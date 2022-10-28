import {Instruccion} from "../../Instrucciones/Instrucciones";

export class Parametro extends Instruccion {
    constructor(
        private tipo: string,
        private id: string,
        linea: number, 
        columna:number
        ){
        super(linea,columna)
    }
    public ast(): string {
        let cadena = "";
        let nodo = `nodo_${this.linea}_${this.columna}`;
        cadena += `${nodo}[label="<Parametro> \\nTipo, Id"];\n`;
        cadena += `tipo_${this.linea}_${this.columna}[label="${this.tipo} , ${this.id}"];\n`;
        cadena += `${nodo} -> tipo_${this.linea}_${this.columna};\n`;
        return cadena;
    }
}