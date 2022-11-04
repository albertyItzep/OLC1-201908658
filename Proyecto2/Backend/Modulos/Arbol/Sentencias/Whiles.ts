import {Instruccion} from "../../Instrucciones/Instrucciones";

export class WhileS extends Instruccion{
    constructor(
        private expresion: Instruccion,
        private data: Instruccion[],
        linea:number,
        columna: number,
    ) {
        super(linea,columna);
    }
    public ast(): string {
        let cadena = "";
        let nodo = `nodo_${this.linea}_${this.columna}`;
        cadena += `${nodo}[label="<WHILE>"]\n`;
        cadena += `Expresion_${this.linea}_${this.columna}[label="<Expresion>"];\n`
        cadena += `Istrucciones_${this.linea}_${this.columna}[label="<Lista Instrucciones>"];\n`
        cadena += `${nodo} -> Expresion_${this.linea}_${this.columna};\n`;
        cadena += this.expresion.ast()+'\n';
        cadena += `Expresion_${this.linea}_${this.columna} -> nodo_${this.expresion.linea}_${this.expresion.columna};\n`;
        cadena += `${nodo} -> Istrucciones_${this.linea}_${this.columna};\n`;
        for(const element of this.data){
            cadena += element.ast()+'\n';
            cadena += `Istrucciones_${this.linea}_${this.columna} -> nodo_${element.linea}_${element.columna};\n`;
        }
        return cadena;
    }
    public tablaSimbolos() {
        if (this.data.length>0) {
            for(const intruccion of this.data){
                intruccion.tablaSimbolos();
            }
        }
    }
}