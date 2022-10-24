import {Instruccion} from "../../Instrucciones/Instrucciones";

export class AccesoVectorXY extends Instruccion {
    constructor(
        private nombre: string,
        private data1: Instruccion,
        private data2: Instruccion,
        linea:number,
        columna: number,
    ) {
        super(linea,columna);
    }
    
    public ast(): void {
        console.log('hola')
    }
}