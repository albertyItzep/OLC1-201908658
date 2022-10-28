import {Instruccion} from "../../Instrucciones/Instrucciones";

export class Metodo extends Instruccion {
    constructor(
        private id: string,
        private parametros: Instruccion[],
        private instrucciones: Instruccion[],
        linea: number, 
        columna:number
    ){
        super(linea,columna)
    }
    public ast(): string {
        let cadena = ""
        let nodo = `nodo_${this.linea}_${this.columna}`;
        cadena += `${nodo}[label="<Instruccion>\\n METODO"];\n`;
        cadena += `id_${this.linea}_${this.columna}[label="<ID>\\n ${this.id}"];\n`;
        cadena+=`${nodo} -> id_${this.linea}_${this.columna};\n`;
        if (this.parametros.length>0) {
            cadena += `parametros_${this.linea}_${this.columna}[label="<Lista Parametros>"];\n`;
            for(const element of this.parametros){
                cadena += element.ast()+'\n';
                cadena += `parametros_${this.linea}_${this.columna} -> nodo_${element.linea}_${element.columna};\n`;
            }
            cadena+=`${nodo} -> parametros_${this.linea}_${this.columna};\n`;
        }
        cadena += `instrucciones_${this.linea}_${this.columna}[label="<Lista Instrucciones>"];\n`;
            for(const element of this.instrucciones){
                cadena += element.ast()+'\n';
                cadena += `instrucciones_${this.linea}_${this.columna} -> nodo_${element.linea}_${element.columna};\n`;
            }
        cadena+=`${nodo} -> instrucciones_${this.linea}_${this.columna};\n`;
        
        return cadena;
    }
}