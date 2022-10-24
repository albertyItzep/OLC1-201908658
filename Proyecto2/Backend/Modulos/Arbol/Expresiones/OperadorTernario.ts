import {Instruccion} from "../../Instrucciones/Instrucciones";
export class OperadorTernario extends Instruccion{
    constructor(
        private expresion: Instruccion,
        private a: Instruccion,
        private b: Instruccion,
        linea:number,
        columna:number
        ){
        super(linea,columna)
    }
    public ast(): void {
        console.log('hola');
    }
}