import { Symbols } from "./Symbol";

export class env {
    private Enviroment: Map<string,Symbols>;
    constructor(private anterior: env|null){
        this.Enviroment = new Map();
    }
    public guardar_Variable(nombre: string, tipo:string,linea:number,columna:number,valor:{}){
        this.Enviroment.set(nombre,new Symbols(nombre,tipo,linea,columna,valor));
    }
    public guardar_funcion(nombre: string, tipo:string,linea:number,columna:number,valor:{}){
        this.Enviroment.set(nombre,new Symbols(nombre,tipo,linea,columna,valor));
    }
}