import {Instruccion} from "../../Instrucciones/Instrucciones";

export class Print extends Instruccion {
    constructor(
        private a: Instruccion,
        private tipo: string,
        linea: number, 
        columna:number){
        super(linea,columna)
    }
    public ast(): void {
        console.log('hola');
    }
}