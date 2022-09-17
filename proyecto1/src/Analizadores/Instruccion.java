package Analizadores;

public class Instruccion {
    public String Token;
    public String Lexema;
    public int linea;
    public Instruccion(String Token, String Lexema,int linea){
        this.Token = Token;
        this.Lexema = Lexema;
        this.linea = linea;
    }
}
