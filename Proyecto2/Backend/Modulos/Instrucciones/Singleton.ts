import { env } from './env';
import {Errores} from './Errores';
export class Singleton {
    private static instance: Singleton;
    private error: Errores[]=[];
    private AST: string="";
    private enviroment = new env(null);

    private constructor(){};

    public static getInstance():Singleton{
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    /**
     * add_Error
     */
    public add_Error(data: Errores) {
        this.error.push(data);
    }
    public get_Errors(){
        return this.error;
    }
    
    public add_AST(cadena:string):void {
        this.AST+= cadena;
    }
    public get_AST():string{
        return this.AST;
    }
    public clear_AST():void{
        this.AST = ""
    }
    public clear_Errors(){
        this.error=[]
    }
    public clear_Enviroment(){
        this.enviroment = new env(null);
    }
    public add_Variable(id: string,tipo: string,linea:number,columna:number,valor:{}):any{
        this.enviroment.guardar_Variable(id,tipo,linea,columna,valor);
    }
    public add_Funcion(id: string,tipo: string,linea:number,columna:number,valor:{}):any{
        this.enviroment.guardar_funcion(id,tipo,linea,columna,valor);
    }
    public get_Env(){
        return this.enviroment;
    }
}