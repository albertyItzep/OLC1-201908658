import {Instruccion} from "../../Instrucciones/Instrucciones";

export class Metodo extends Instruccion {
    constructor(
        private id: string,
        private parametros: [],
        private instrucciones: Instruccion,
        linea: number, 
        columna:number
    ){
        super(linea,columna)
    }
    public ast(): void {
        console.log('hola');
    }
}