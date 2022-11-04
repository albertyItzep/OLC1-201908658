import {Instruccion} from "../../Instrucciones/Instrucciones";

export class IncrementoDecremento extends Instruccion {
    constructor(
        private nombre: string,
        private tipo: string,
        linea:number,
        columna: number,
        private salto?:Instruccion,
    ) {
        super(linea,columna);
    }
    public tablaSimbolos() {}
    public ast(): string {
        let cadena:string="";
        if (this.salto!= undefined){
            cadena += `nodo_${this.linea}_${this.columna}[label="<Instruccion>:\\n ${this.tipo}"]\n`;
            cadena += `nombre_${this.linea}_${this.columna}[label="<ID>:\\n ${this.nombre}"]\n`;
            cadena += this.salto.ast()+'\n';
            cadena += `nodo_${this.linea}_${this.columna} -> nombre_${this.linea}_${this.columna};\n`
            cadena += `nodo_${this.linea}_${this.columna} -> nodo_${this.salto.linea}_${this.salto.columna};\n`
        }else{
            cadena += `nodo_${this.linea}_${this.columna}[label="<Instruccion>:\\n ${this.tipo}"]\n`;
            cadena += `nombre_${this.linea}_${this.columna}[label="<ID>:\\n ${this.nombre}"]\n`;
            cadena += `aumento_${this.linea}_${this.columna}[label="<Salto>:\\n 1"]\n`;
            cadena += `nodo_${this.linea}_${this.columna} -> nombre_${this.linea}_${this.columna};\n`
            cadena += `nodo_${this.linea}_${this.columna} -> aumento_${this.linea}_${this.columna};\n`;
        }
        return cadena;
    }
}