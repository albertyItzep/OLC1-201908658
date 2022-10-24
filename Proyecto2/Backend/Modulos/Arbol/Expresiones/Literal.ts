import {Instruccion} from "../../Instrucciones/Instrucciones";

export class Literal extends Instruccion {
    constructor(
        private a: any,
        private tipo: String,
        linea: number, 
        columna:number){
        super(linea,columna)
    }
    public ast(): void {
        console.log('hola');
    }
}