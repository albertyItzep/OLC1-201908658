import {Instruccion} from "../../Instrucciones/Instrucciones";
export class Relacion extends Instruccion{
    constructor(
        private a: Instruccion,
        private b: Instruccion,
        private tipo : string,
        linea:number,
        columna:number
        ){
        super(linea,columna)
    }
    public ast(): void {
        console.log('hola');
    }
}