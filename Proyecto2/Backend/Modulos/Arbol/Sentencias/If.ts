import {Instruccion} from "../../Instrucciones/Instrucciones";

export class IfContainer extends Instruccion {
    constructor(
        private ifI: Instruccion,
        private Elif: [],
        private ElseI: Instruccion,
        linea:number,
        columna: number,
    ) {
        super(linea,columna);
    }
    
    public ast(): void {
        console.log('hola')
    }
}

export class If extends Instruccion {
    constructor(
        private expresion: Instruccion,
        private instrucciones: Instruccion,
        linea:number,
        columna: number,
    ) {
        super(linea,columna);
    }
    
    public ast(): void {
        console.log('hola')
    }
}

export class Else extends Instruccion {
    constructor(
        private instrucciones: Instruccion,
        linea:number,
        columna: number,
    ) {
        super(linea,columna);
    }
    
    public ast(): void {
        console.log('hola')
    }
}

export class Elif extends Instruccion {
    constructor(
        private expresion: Instruccion,
        private instrucciones: Instruccion,
        linea:number,
        columna: number,
    ) {
        super(linea,columna);
    }
    
    public ast(): void {
        console.log('hola')
    }
}
