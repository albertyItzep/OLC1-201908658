import {Instruccion} from "../../Instrucciones/Instrucciones";

export class Run extends Instruccion {
    constructor(
        private id: string,
        private parametros: [],
        linea: number, 
        columna:number
    ){
        super(linea,columna)
    }
    public ast(): void {
        console.log('hola');
    }
}