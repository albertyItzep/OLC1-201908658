import {Instruccion} from "../../Instrucciones/Instrucciones";

export class ModificarVectorX extends Instruccion {
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

export class ModificarVectorXY extends Instruccion {
    constructor(
        private nombre: string,
        private data1: Instruccion,
        private data2: Instruccion,
        private data3: Instruccion,
        linea:number,
        columna: number,
    ) {
        super(linea,columna);
    }
    
    public ast(): void {
        console.log('hola')
    }
}