import {Instruccion} from "../../Instrucciones/Instrucciones";

export class WhileS extends Instruccion{
    constructor(
        private expresion: Instruccion,
        private data: Instruccion,
        linea:number,
        columna: number,
    ) {
        super(linea,columna);
    }
    public ast(): void {
        console.log('hola menso')
    }
}