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
    10 */
    string curso_ = "organización de compiladores 1 2022";
    char var_111 = 'a';
    celular = true;
    int var1, var2, var3 = -125-263;
    var1++;
    var2--;
    boolean flag_1, flag2_, flag33 = true;
    char ch_1, ch_2, ch3, qwert123 = 'M';
    universidad= "usac";
    //20
    boolean flag_personalizada = !(flag_1) && (flag_2) || flag_5;
    Boolean mayoria_edad = false;
    mayoria_edadd = (edad > 21) ? 5+5 : 9*3;
    
    Double doubleInt = (Double) 16; //16.0
    Double doubleString = (Double) "16.0"; //16.0 Cadenas numericas
    Boolean boolInt = (Boolean) 0; //false
    Boolean boolDouble = (Boolean) 1.0; //true
    Boolean boolString = (Boolean) "0"; //false
    Boolean boolChar = (Boolean) '1'; //true 30
    Char charInt = (Char) 16; //'1' solo toma el primer carácter
    Char charDouble = (Char) 16.1; //'1' solo toma el primer carácter
    Int [ ] vector1 = new Int[4]; //se crea un vector de 4 posiciones, con 0 en cada posición
    Char [ ][ ] vectorDosd = new Char [(Int) "4"] [4] ; // se crea un vector de dos dimensiones de 4x4
    //Ejemplo de declaración tipo 2
    String [ ] vector2 = {"hola", "Mundo"}; //vector de 2 posiciones, con "Hola" y "Mundo"
    Char [ ][ ] vectordosd2 = {{ 0 ,0},{0 , 0}}; // vector de dos dimensiones con valores de 0 en cada posición
    if (x<50){
            Double doubleInt = (Double) 16; //16.0 40
            Double doubleString = (Double) "16.0"; //16.0 Cadenas numericas
            Boolean boolInt = (Boolean) 0; //false
            Boolean boolDouble = (Boolean) 1.0; //true
            Boolean boolString = (Boolean) "0"; //false 

            String [ ] vector2 = {"hola", "Mundo"}; //creamos un vector de 2 posiciones de tipo string
            String valorPosicion = vector2[1]; //posición 1, valorPosicion = “hola”
            Char [ ][ ] vectorDosd = new char [4] [4] ; // creamos vector de 4x4
            Char valor = vectorDosd[1][1];
            valor3 = vectorDosd[1][1]; // 50
            valor3 = vectorDosd[(int) '1'][1];
            valor3 = vectorDosd[1][(int) '1'];
            valor3 = vector1[1];
            valor3 = vector1[(int) '1'];
            String [ ] vector2 = {"hola", "Mundo"}; //vector de 2 posiciones, con "Hola" y "Mundo"
            Int [ ] vectorNumero = {2020,2021,2022};
            vector2[1] = "OLC1";
            //vector2[2] = "2do Semestre "+vectorNumero[2];
        //Más sentencias 60
    }
    if (x <50){
        Double doubleInt = (Double) 16; //16.0 40
            Double doubleString = (Double) "16.0"; //16.0 Cadenas numericas
            Boolean boolInt = (Boolean) 0; //false
            Boolean boolDouble = (Boolean) 1.0; //true
            Boolean boolString = (Boolean) "0"; //false 

            String [ ] vector2 = {"hola", "Mundo"}; //creamos un vector de 2 posiciones de tipo string
            String valorPosicion = vector2[1]; //posición 1, valorPosicion = “hola” 70
            Char [ ][ ] vectorDosd = new char [4] [4] ; // creamos vector de 4x4
            Char valor = vectorDosd[1][1];
            valor3 = vectorDosd[1][1]; 
            valor3 = vectorDosd[(int) '1'][1];
            valor3 = vectorDosd[1][(int) '1'];
            valor3 = vector1[1];
            valor3 = vector1[(int) '1'];
            String [ ] vector2 = {"hola", "Mundo"}; //vector de 2 posiciones, con "Hola" y "Mundo"
            Int [ ] vectorNumero = {2020,2021,2022};
            vector2[1] = "OLC1"; //80
        //Más sentencias
    } else{
        Double doubleInt = (Double) 16; //16.0 40
            Double doubleString = (Double) "16.0"; //16.0 Cadenas numericas
            Boolean boolInt = (Boolean) 0; //false
            Boolean boolDouble = (Boolean) 1.0; //true
            Boolean boolString = (Boolean) "0"; //false 

            String [ ] vector2 = {"hola", "Mundo"}; //creamos un vector de 2 posiciones de tipo string
            String valorPosicion = vector2[1]; //posición 1, valorPosicion = “hola” //90
            Char [ ][ ] vectorDosd = new char [4] [4] ; // creamos vector de 4x4
            Char valor = vectorDosd[1][1];
            valor3 = vectorDosd[1][1]; 
            valor3 = vectorDosd[(int) '1'][1];
            valor3 = vectorDosd[1][(int) '1'];
            valor3 = vector1[1];
            valor3 = vector1[(int) '1'];
            String [ ] vector2 = {"hola", "Mundo"}; //vector de 2 posiciones, con "Hola" y "Mundo"
            Int [ ] vectorNumero = {2020,2021,2022};
            vector2[1] = "OLC1"; //100
        //Más sentencias
    }
    if (x > 50){
        valor3 = vectorDosd[1][1]; // 
        valor3 = vectorDosd[(int) '1'][1];
        valor3 = vectorDosd[1][(int) '1'];
        valor3 = vector1[1];
        valor3 = vector1[(int) '1'];
        //Más sentencias
    }elif (x <= 50 && x > 0){ // 110
        if (x > 25){
            valor3 = vectorDosd[1][1]; // 
            valor3 = vectorDosd[(int) '1'][1];
            //Print("Número mayor que 25");
            //Más sentencias
        }else{
            switch( edad ) {
                Case 10:
                    valor3 = vectorDosd[(int) '1'][1];
                    valor3 = vectorDosd[1][(int) '1']; //120
                    break;
                    //Println(“Tengo 10 anios.”);
                // mas sentencias Break;
                Case 18:
                    valor3 = vectorDosd[(int) '1'][1];
                    valor3 = vectorDosd[1][(int) '1'];
                    break;
                // mas sentencias Case 25:
                // mas sentencias Break;
                Default: //130
                    valor3 = vectorDosd[(int) '1'][1];
                    valor3 = vectorDosd[1][(int) '1'];
                    break;
                // mas sentencias Break;
            }
        }
        //Más sentencias 
    }else{
        valor3 = vectorDosd[1][1]; // 
        valor3 = vectorDosd[(int) '1'][1];//140
        //Más
    }
    while (x<100){
        if (x > 50){
            //Print(“Mayor que 50”);
            valor3 = vectorDosd[1][1]; 
            valor3 = vectorDosd[(int) '1'][1];
        //Más sentencias
        } else{
            valor3 = vectorDosd[1][1]; //150
            valor3 = vectorDosd[(int) '1'][1];
            //Print(“Menor que 100”);
        //Más sentencias
        } 
        X++;
        break;
        //Más sentencias
    }
    for ( int i=0; i<3;i++ ){
        valor3 = vectorDosd[1][1]; //160
        valor3 = vectorDosd[(int) '1'][1];
        //Println("i="+ i)
        //más sentencias
    }
        /*RESULTADO
        i=0 i=1 i=2
        */
        //Ejemplo 2: asignación de variable previamente declarada y decremento por asignación
    Int i;
    for ( i=5; i>2;i=i-1 ){//170
        valor3 = vectorDosd[1][1]; 
        valor3 = vectorDosd[(int) '1'][1];
    //más sentencias
    }
    Int a=5;
    do{
        if (a>=1 && a <3){
            valor3 = vectorDosd[1][1]; 
            valor3 = vectorDosd[(int) '1'][1];
            break; //180
        }
        else{
            valor3 = vectorDosd[1][1]; 
            valor3 = vectorDosd[(int) '1'][1];
        }
        a--;
    } while (a>0);
    Int a=5;
    do{
        if (a>=1 && a <3){ //190
            valor3 = vectorDosd[1][1]; 
            valor3 = vectorDosd[(int) '1'][1];  
        } else{
            valor3 = vectorDosd[1][1]; 
            valor3 = vectorDosd[(int) '1'][1];
        }
        a--;
       } until (a==0);
    for(int i = 0; i < 9; i++){
        if(i==5){ //200
            int n3;
            n3 = n1+n2;
            return n3 * 25 ^3;
        }
        continue;
       }
    conversion (double pies, string tipo): double {
        if (tipo == "metro"){
            return pies/3.281;
        }else{ //210
            return -1;
        }
    }
    conversion (): double {
        if (tipo == "metro"){
            return pies/3.281;
        }else{
            return -1;
        }
        return 30.56; //220
    }
    holamundo(): void {
        return pies/3.281;
    }
        //Ejemplo sin tipo definido de un método
    HolaCompi() {
        return pies/3.281;
    }
    holamundo(int hola): void {
        return pies/3.281; // 230
    }
        //Ejemplo sin tipo definido de un método
    HolaCompi(int adios, string hola) {
        return pies/3.281;
    }
    holamundo();
    holamundo("hola como estas vos");
    
    Int num = suma(6,5);
    Print("Hola mundo!!");
    Print("Sale compi \n" + valor + "!!");
    Print(suma(2,2));
    Println("Hola mundo!!");
    Println("Sale compi \n" + valor + "!!");
    Println(suma(2,2));

    string cad_1 = toLower("hOla MunDo"); // cad_1 = "hola mundo"
    string cad_2 = toLower("RESULTADO = " + 100); // cad_2 = "resultado = 100"

    string cad_1 = toUpper("hOla MunDo");
    string cad_2 = toUpper("resultado = " + 100);

    Double valor = round(5.8); //valor = 6
    Double valor2 = round(5.4); //valor2 = 5

    string [ ] vector2 = {"hola", "Mundo"};
    
    int tam_vector = length(vector2); // tam_vector = 2
    int tam_hola = length(tam_vector[0]); // tam_hola = 4
    
    Int[] lista2 =new int [1];
    String tipo = typeof(15); 
    String tipo2 = typeof(15.25);//262
    String tipo3 = typeof(lista2);

    String valor = toString(14); 
    String valor2 = toString(true);

    Char[] caracteres = toCharArray("Hola");

    string[ ] vector2 = {"hola", "Mundo"};
    vector2.push("bonito");

    string[ ] vector2 = {"hola", "Mundo","bonito"};
    vector2.pop();
    funcion1():void{
        Print("hola");
    }
    run funcion1();
    funcion2(string mensaje):void{
        Print(mensaje);
    }
    Run funcion2("hola soy un mensaje");
        
    `)
    res.send("<h1>hola</h1>")
})