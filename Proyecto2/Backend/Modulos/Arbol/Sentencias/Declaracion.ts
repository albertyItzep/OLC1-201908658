import {Instruccion} from "../../Instrucciones/Instrucciones";

export class Declaracion extends Instruccion {
    constructor(
        private tipo: string,
        private nombre: string,
        linea:number,
        columna: number,
        private data?: Instruccion,
    ) {
        super(linea,columna);
    }
    
    public ast(): void {
        console.log('hola')
    }
}