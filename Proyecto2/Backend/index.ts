import express from 'express';
import { Errores } from './Modulos/Instrucciones/Errores';
import { Instruccion } from './Modulos/Instrucciones/Instrucciones';
import { Singleton } from './Modulos/Instrucciones/Singleton';

import { exec } from "child_process";
const fs = require('fs');
const morgan = require('morgan');
const parse = require('./Modulos/Analizador/Gramatica');

let errores: Errores[] = [];
let AST:Instruccion[] = []
const app = express();

const s = Singleton.getInstance();
app.use(morgan('tiny'));

app.get('/getParse',(req,res)=>{
    AST = parse.parse(`
    funcion2(string mensaje):void{
        Print(mensaje);
    }
    //https://bmoisesg.github.io/AST/code.html
    Run funcion2("hola soy un mensaje")
    `);
    res.send('<h1>Server on</h1>');
});

app.get('/getAST',(req,res)=>{
    if(AST.length>0){
        s.add_AST(`
digraph G {
node[shape="box"];
start[label="Lista_Instrucciones"];\n
`);
        for (const instruccion of AST) {
            s.add_AST(`start -> nodo_${instruccion.linea}_${instruccion.columna};\n`);
            s.add_AST(instruccion.ast());
        }
        s.add_AST('}');
        createFile('ast.dot',s.get_AST());
        exec('dot -Tpng ast.dot -o ast.png');
        res.json({"status":"Ok"});

    }else{
        res.json({"status":"Error"});
    }
});
app.get('/getErrores',(req,res)=>{
    res.json({"errors":errores})
});
app.listen(3000,()=>{
    console.log('server on');
});

function createFile(nameFile: string, data: string){
    fs.writeFile(nameFile, data, () => {
        console.log('>> The file ' + nameFile + ' has been saved!');
    })
}