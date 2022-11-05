import express from 'express';
import { Errores } from './Modulos/Instrucciones/Errores';
import { Instruccion } from './Modulos/Instrucciones/Instrucciones';
import { Singleton } from './Modulos/Instrucciones/Singleton';

import { exec } from "child_process";
const cors = require('cors');
const fs = require('fs');
const morgan = require('morgan');
const parse = require('./Modulos/Analizador/Gramatica');

const s = Singleton.getInstance();
let errores: Errores[] = [];
let AST:Instruccion[] = [];
const app = express();

app.use(morgan('tiny'));
app.use(cors())
app.use(express.json())
app.post('/getParse',(req,res)=>{
    let body_req = req.body.data
    try {
        s.clear_Errors();
        s.clear_Enviroment();
        s.clear_AST();
        AST = parse.parse(body_req);
        res.json({errors:s.get_Errors()});
    } catch (error) {
        res.send('<h1>Internal Error</h1>');
    }
});

app.get('/getAST',async(req,res)=>{
    if(AST.length>0){
        s.clear_AST();
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
        createFile('../Frontend/mfmscript/src/assets/ast.dot',s.get_AST());
        exec('dot -Tpng ../Frontend/mfmscript/src/assets/ast.dot -o ../Frontend/mfmscript/src/assets/ast.png');
        res.json({"status":"Ok"});
    }else{
        s.clear_AST();
        s.add_AST(`
        digraph G {
        node[shape="box"];
        start[label="Sin Instrucciones"];\n
        `);
        s.add_AST('}');
        createFile('../Frontend/mfmscript/src/assets/ast.dot',s.get_AST());
        exec('dot -Tpng ../Frontend/mfmscript/src/assets/ast.dot -o ../Frontend/mfmscript/src/assets/ast.png');
        res.json({"status":"Error"});
    }
});
app.get('/getErrores',(req,res)=>{
    errores = s.get_Errors();
    console.log(s.get_Errors());
    res.json({"errors":errores});
});
app.get('/getSymbol',(req,res)=>{
    if (AST.length>0) {
        for (const instruccion of AST) {
            instruccion.tablaSimbolos();
        }
        let re = s.get_Env()
        let con=(re["Enviroment"]);
        let prueba:any=[]
        for(const [key, value] of con){
            prueba.push(value);
        }
        res.json({prueba})
    }else{
        res.json({AST})
    }
})
app.listen(8000,()=>{
    console.log('server on');
});
function createFile(nameFile: string, data: string){
    fs.writeFile(nameFile, data, () => {
        console.log('>> The file ' + nameFile + ' has been saved!');
    })
};