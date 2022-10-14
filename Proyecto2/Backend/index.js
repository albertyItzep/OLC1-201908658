const express = require('express')
const parse = require('./Modulos/Analizador/Gramatica')
const morgan = require('morgan')
const app = express();
app.listen(8080,()=>{
    console.log("Hello Word");
})
app.use(morgan());

app.get('/parse',(req,res)=>{
    parse.parse(`
        //hola como estan
        int holaMundo;
        /*
        este 
        es un 
        comentario 
        multi 
        lineal
        */
        string curso_ = "organización de compiladores 1 2022";
        char var_111 = 'a';
        celular = true;
        int var1, var2, var3 = -125-263;
        var1++;
        var2--;
        boolean flag_1, flag2_, flag33 = true;
        char ch_1, ch_2, ch3, qwert123 = 'M';
        universidad= "usac";
        boolean flag_personalizada = !(flag_1) && (flag_2) || flag_5;
        Boolean mayoria_edad = false;
        mayoria_edadd = (edad > 21) ? 5+5 : 9*3;
        Double doubleInt = (Double) 16; //16.0
        Double doubleString = (Double) "16.0"; //16.0 Cadenas numericas
        Boolean boolInt = (Boolean) 0; //false
        Boolean boolDouble = (Boolean) 1.0; //true
        Boolean boolString = (Boolean) "0"; //false
        Boolean boolChar = (Boolean) '1'; //true
        Char charInt = (Char) 16; //'1' solo toma el primer carácter
        Char charDouble = (Char) 16.1; //'1' solo toma el primer carácter
        Int [ ] vector1 = new Int[4]; //se crea un vector de 4 posiciones, con 0 en cada posición
        Char [ ][ ] vectorDosd = new Char [(Int) “4”] [4] ; // se crea un vector de dos dimensiones de 4x4
        //Ejemplo de declaración tipo 2
        String [ ] vector2 = {"hola", "Mundo"}; //vector de 2 posiciones, con "Hola" y "Mundo"
        Char [ ][ ] vectordos
    `)
    res.send("<h1>hola</h1>")
})