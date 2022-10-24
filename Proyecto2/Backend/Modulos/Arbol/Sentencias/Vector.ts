import {Instruccion} from "../../Instrucciones/Instrucciones";

export class VectorX extends Instruccion {
    constructor(
        private tipo: string,
        private nombre: string,
        linea:number,
        columna: number,
        private size?: Instruccion,
        private tipoD?: string,
        private data?:[],
    ) {
        super(linea,columna);
    }
    
    public ast(): void {
        console.log('hola')
    }
}

export class VectorXY extends Instruccion {
    constructor(
        private tipo: string,
        private nombre: string,
        linea:number,
        columna: number,
        private size1?: Instruccion,
        private size2?: Instruccion,
        private tipoD?: string,
        private data1?:[],
        private data2?:[],
    ) {
        super(linea,columna);
    }
    
    public ast(): void {
        console.log('hola')
    }
}