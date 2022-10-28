import {Instruccion} from "../../Instrucciones/Instrucciones";

export class Pop extends Instruccion {
    constructor(
        private id:string,
        linea: number, 
        columna:number
    ){
        super(linea,columna)
    }
    public ast(): string {
        let cadena = "";
        let nodo = `nodo_${this.linea}_${this.columna}`;
        cadena += `${nodo}[label="<Instruccion> \\n POP"];\n`;
        cadena += `id_${this.linea}_${this.columna}[label="<ID>\\n ${this.id}"];\n`;
        cadena+=`${nodo} -> id_${this.linea}_${this.columna};\n`;
        return cadena;
    }
}