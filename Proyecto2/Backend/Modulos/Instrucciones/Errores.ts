export class Errores {
    constructor(public tipo: string, public descripcion:string,public linea: number, public columna:number,) {
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.linea = linea;
        this.columna = columna;
    }
}