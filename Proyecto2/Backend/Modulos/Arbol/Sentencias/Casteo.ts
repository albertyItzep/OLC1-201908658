import {Instruccion} from "../../Instrucciones/Instrucciones";

export class Casteo extends Instruccion {
    constructor(
        private tipo: string,
        private data: Instruccion,
        linea:number,
        columna: number,
    ) {
        super(linea,columna);
    }
    
    public ast(): void {
        console.log('hola')
    }
}