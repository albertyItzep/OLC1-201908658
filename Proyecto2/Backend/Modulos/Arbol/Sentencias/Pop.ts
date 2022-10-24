import {Instruccion} from "../../Instrucciones/Instrucciones";

export class Pop extends Instruccion {
    constructor(
        private id:string,
        linea: number, 
        columna:number
    ){
        super(linea,columna)
    }
    public ast(): void {
        console.log('hola');
    }
}