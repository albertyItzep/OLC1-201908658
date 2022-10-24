import {Errores} from './Errores';
export class Singleton {
    private static instance: Singleton;
    private error: Errores[]=[];
    private AST: string="";

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
    

}