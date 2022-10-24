import {Instruccion} from "../../Instrucciones/Instrucciones";

export class Breaks extends Instruccion {
    constructor(
        linea:number,
        columna: number,
    ) {
        super(linea,columna);
    }
    
    public ast(): void {
        console.log('hola')
    }
}

export class ContinueS extends Instruccion {
    constructor(
        linea:number,
        columna: number,
    ) {
        super(linea,columna);
    }
    
    public ast(): void {
        console.log('hola')
    }
}

export class ReturnS extends Instruccion {
    constructor(
        private data:Instruccion,
        linea:number,
        columna: number,
    ) {
        super(linea,columna);
    }
    
    public ast(): void {
        console.log('hola')
    }
}