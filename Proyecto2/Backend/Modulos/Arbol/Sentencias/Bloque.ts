import {Instruccion} from "../../Instrucciones/Instrucciones";

export class Bloque extends Instruccion{
    constructor(private Instrucciones:Instruccion[],linea:number,columna:number){
        super(linea,columna)
    }
    public ast(): string {
        let cadena = ""
        let nodo = `nodo_${this.linea}_${this.columna}`;
        cadena += `${nodo}[label="<Instruccion>\\n Bloque { }"];\n`;
        if (this.Instrucciones.length>0) {
            for(const element of this.Instrucciones){
                cadena += element.ast()+'\n';
                cadena += `${nodo} -> nodo_${element.linea}_${element.columna};\n`;
            }
        }
        return cadena;
    }
    public tablaSimbolos() {
        if (this.Instrucciones.length>0) {
            for(const instruccion of this.Instrucciones){
                instruccion.tablaSimbolos;
            }
        }
    }
}