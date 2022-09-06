package Analizadores;

public class Instruccion {
    public String Token;
    public String Lexema;
    public Instruccion(String Token, String Lexema){
        this.Token = Token;
        this.Lexema = Lexema;
    }
}
