import {Instruccion} from "../../Instrucciones/Instrucciones";

export class Parametro extends Instruccion {
    constructor(
        private tipo: Instruccion,
        private id: string,
        linea: number, 
        columna:number
        ){
        super(linea,columna)
    }
    public ast(): void {
        console.log('hola');
    }
}