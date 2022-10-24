import {Instruccion} from "../../Instrucciones/Instrucciones";

export class Asignacion extends Instruccion {
    constructor(
        private nombre: string,
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