import {Instruccion} from "../../Instrucciones/Instrucciones";

export class TypeOf extends Instruccion {
    constructor(
        private expreion: Instruccion,
        linea: number, 
        columna:number
    ){
        super(linea,columna)
    }
    public ast(): void {
        console.log('hola');
    }
}