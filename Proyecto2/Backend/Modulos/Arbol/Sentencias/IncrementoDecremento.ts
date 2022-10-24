import {Instruccion} from "../../Instrucciones/Instrucciones";

export class IncrementoDecremento extends Instruccion {
    constructor(
        private nombre: string,
        private tipo: string,
        linea:number,
        columna: number,
        private salto?:number,
    ) {
        super(linea,columna);
    }
    
    public ast(): void {
        console.log('hola')
    }
}