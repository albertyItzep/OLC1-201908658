import {Instruccion} from "../../Instrucciones/Instrucciones";

export class Literal extends Instruccion {
    constructor(
        private a: any,
        private tipo: String,
        linea: number, 
        columna:number){
        super(linea,columna)
    }
    public ast(): string {
        let cadena = "";
        cadena+=`nodo_${this.linea}_${this.columna}[label="<Valor>\\n ${this.a.toString()}"]`;
        return cadena;
    }
    public tablaSimbolos() {
    }
}