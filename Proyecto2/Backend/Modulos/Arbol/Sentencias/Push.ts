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
    public ast(): void {
        console.log('hola');
    }
}