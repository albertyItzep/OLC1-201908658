import {Instruccion} from "../../Instrucciones/Instrucciones";

export class Aritmericas extends Instruccion {
    constructor(
        private a: Instruccion,
        private b: Instruccion,
        private tipo: String,
        linea: number, 
        columna:number){
        super(linea,columna)
    }
    public ast(): void {
        console.log('hola');
    }
}