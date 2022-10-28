export abstract class Instruccion {
    constructor(public linea: number, public columna: number){
        this.linea = linea;
        this.columna = columna;
    }
    public abstract ast():string;
}