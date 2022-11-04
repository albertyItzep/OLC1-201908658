import {Instruccion} from "../../Instrucciones/Instrucciones";

export class Print extends Instruccion {
    constructor(
        private a: Instruccion,
        private tipo: string,
        linea: number, 
        columna:number){
        super(linea,columna)
    }
    public ast(): string {
        let cadena = "";
        let nodo = `nodo_${this.linea}_${this.columna}`;
        cadena += `${nodo}[label="<Instruccion>\\n ${this.tipo}"]\n`;
        cadena += this.a.ast()+'\n';
        cadena += `${nodo} -> nodo_${this.a.linea}_${this.a.columna};\n`;
        return cadena;
    }
    public tablaSimbolos() {}
}