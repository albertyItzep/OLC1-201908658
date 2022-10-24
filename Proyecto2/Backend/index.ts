import express from 'express';
import { Errores } from './Modulos/Instrucciones/Errores';
import { Singleton } from './Modulos/Instrucciones/Singleton';

const morgan = require('morgan');
const parse = require('./Modulos/Analizador/Gramatica');


const app = express();

app.use(morgan('tiny'));

app.get('/getParse',(req,res)=>{


    const s = Singleton.getInstance();
    let AST = parse.parse(`
    for ( int i=0; i<3;i++ ){
        valor3 = vectorDosd[1][1];
        valor3 = vectorDosd[(int) '1'][1];
        //Println("i="+ i)
        //más sentencias
    }
    `);
    let errores: Errores[] = s.get_Errors();
    if(errores.length>0){
        console.log(errores);
    }

    res.send('<h1>Server on</h1>');
});
app.listen(3000,()=>{
    console.log('server on');
});
