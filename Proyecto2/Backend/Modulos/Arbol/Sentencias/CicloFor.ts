import {Instruccion} from "../../Instrucciones/Instrucciones";

export class CicloFor extends Instruccion{
    constructor(
        private interador: Instruccion,
        private condicion: Instruccion,
        private aumento: Instruccion,
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