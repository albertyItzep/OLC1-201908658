import {Instruccion} from "../../Instrucciones/Instrucciones";

export class Swith extends Instruccion {
    constructor(
        private expresion: Instruccion,
        private listCase:[],
        private defaults:Instruccion,
        linea:number,
        columna: number,

    ) {
        super(linea,columna);
    }
    
    public ast(): void {
        console.log('hola');
    }
}

export class Case extends Instruccion {
    constructor(
        private expresion: Instruccion,
        private data: Instruccion,
        linea:number,
        columna: number,
    ) {
        super(linea,columna);
    }
    
    public ast(): void {
        console.log('hola');
    }
}

export class Default extends Instruccion {
    constructor(
        private data: Instruccion,
        linea:number,
        columna: number,
    ) {
        super(linea,columna);
    }
    
    public ast(): void {
        console.log('hola');
    }
}

