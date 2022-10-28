import {Instruccion} from "../../Instrucciones/Instrucciones";

export class CicloFor extends Instruccion{
    constructor(
        private interador: Instruccion,
        private condicion: Instruccion,
        private aumento: Instruccion,
        private data: Instruccion[],
        linea:number,
        columna: number,
    ) {
        super(linea,columna);
    }
    public ast(): string {
        let cadena ="";
        let nodo = `nodo_${this.linea}_${this.columna}`;
        cadena += `${nodo}[label="<Instruccion> FOR"]\n`;
        cadena += `expresion_${this.linea}_${this.columna}[label="<Expresion>"]\n`;
        //declaracion 
        cadena += this.interador.ast()+'\n';
        cadena += `expresion_${this.linea}_${this.columna} -> nodo_${this.interador.linea}_${this.interador.columna};\n`;
        //condicion 
        cadena += this.condicion.ast()+'\n';
        cadena += `expresion_${this.linea}_${this.columna} -> nodo_${this.condicion.linea}_${this.condicion.columna};\n`;
        //aumento
        cadena += this.aumento.ast()+'\n';
        cadena += `expresion_${this.linea}_${this.columna} -> nodo_${this.aumento.linea}_${this.aumento.columna};\n`;

        cadena += `instrucciones_${this.linea}_${this.columna}[label="<Lista Instrucciones>"]\n`;
        
        for(const element of this.data){
            cadena += element.ast()+'\n';
            cadena += `instrucciones_${this.linea}_${this.columna} -> nodo_${element.linea}_${element.columna};\n`;
        }

        cadena += `${nodo} -> expresion_${this.linea}_${this.columna};\n`;
        cadena += `${nodo} -> instrucciones_${this.linea}_${this.columna};\n`;
        return cadena;
    }
}