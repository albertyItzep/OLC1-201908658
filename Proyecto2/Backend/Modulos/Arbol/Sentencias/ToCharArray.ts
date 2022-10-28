import {Instruccion} from "../../Instrucciones/Instrucciones";

export class ToCharArray extends Instruccion {
    constructor(
        private expreion: string,
        linea: number, 
        columna:number
    ){
        super(linea,columna)
    }
    public ast(): string {
        let cadena = "";
        let nodo = `nodo_${this.linea}_${this.columna}`;
        cadena += `${nodo}[label="<Instruccion> \\n TOCHARARRAY"];\n`;
        cadena += `cadena_${this.linea}_${this.columna}[label="${this.expreion}"];\n`;
        cadena += `${nodo} -> cadena_${this.linea}_${this.columna}`
        return cadena;
    }
}