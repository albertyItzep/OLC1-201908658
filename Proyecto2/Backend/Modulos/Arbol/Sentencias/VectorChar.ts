import {Instruccion} from "../../Instrucciones/Instrucciones";

export class VectorChar extends Instruccion {
    constructor(
        private tipo: string,
        private nombre: string,
        private expresion: Instruccion,
        linea:number,
        columna: number,
    ) {
        super(linea,columna);
    }
    
    public ast(): void {
        console.log('hola')
    }
}
