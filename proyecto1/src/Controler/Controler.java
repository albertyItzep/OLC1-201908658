package Controler;
import Analizadores.Analizador_Lexico;
import Analizadores.Analizador_Sintactico;
import java.io.BufferedReader;
import java.io.StringReader;

public class Controler {

    public Controler(){

    }
    public void generateCompiling(String data){
        Analizador_Lexico analizadorLexico = new Analizador_Lexico(new BufferedReader(new StringReader(data)));
        Analizador_Sintactico analizadorSintactico = new Analizador_Sintactico(analizadorLexico);
        try {
            analizadorSintactico.parse();
        }catch (Exception e){
            System.out.println(e);
        }
    }
}
