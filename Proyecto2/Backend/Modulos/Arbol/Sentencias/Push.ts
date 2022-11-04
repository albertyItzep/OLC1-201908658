import {Instruccion} from "../../Instrucciones/Instrucciones";

export class Push extends Instruccion {
    constructor(
        private id:string,
        private expresion: Instruccion,
        linea: number, 
        columna:number
    ){
        super(linea,columna)
    }
    public ast(): string {
        let cadena = "";
        let nodo = `nodo_${this.linea}_${this.columna}`;
        cadena += `${nodo}[label="<Instruccion> \\n PUSH"];\n`;
        cadena += `id_${this.linea}_${this.columna}[label="<ID>\\n ${this.id}"];\n`;
        cadena+=`${nodo} -> id_${this.linea}_${this.columna};\n`;
        cadena += this.expresion.ast()+'\n';
        cadena+=`${nodo} -> nodo_${this.expresion.linea}_${this.expresion.columna};\n`;
        return cadena;
    }
    public tablaSimbolos() {}
}