import {Instruccion} from "../../Instrucciones/Instrucciones";

export class TypeOf extends Instruccion {
    constructor(
        private expreion: Instruccion,
        linea: number, 
        columna:number
    ){
        super(linea,columna)
    }
    public ast(): string {
        let cadena = "";
        let nodo = `nodo_${this.linea}_${this.columna}`;
        cadena += `${nodo}[label="<Instruccion> \\n TYPEOF"];\n`;
        cadena += this.expreion.ast()+'\n';
        cadena += `${nodo} -> nodo_${this.expreion.linea}_${this.expreion.columna};\n`;
        return cadena;
    }
    public tablaSimbolos() {}
}