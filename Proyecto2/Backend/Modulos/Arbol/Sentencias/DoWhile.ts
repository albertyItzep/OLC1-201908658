import {Instruccion} from "../../Instrucciones/Instrucciones";

export class DoWhile extends Instruccion{
    constructor(
        private data: Instruccion,
        private expresion: Instruccion,
        linea:number,
        columna: number,
    ) {
        super(linea,columna);
    }
    public ast(): void {
        console.log('hola menso')
    }
}