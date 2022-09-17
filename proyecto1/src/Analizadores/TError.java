package Analizadores;

public class TError {
    public String lexema, tipo, descripcion;
    public int linea, columna;

    public TError(String lex, int lin, int col, String tipo, String desc){
        this.lexema=lex;
        this.linea=lin;
        this.columna=col;
        this.tipo= tipo;
        this.descripcion=desc;
    }
    public String get(){
        return "[ "+this.lexema+ " , "+this.tipo+" , "+this.descripcion+" ]";
    }
    public int getLinea(){
        return this.linea;
    }
}