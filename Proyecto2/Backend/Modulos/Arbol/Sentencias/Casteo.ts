import {Instruccion} from "../../Instrucciones/Instrucciones";

export class Casteo extends Instruccion {
    constructor(
        private tipo: string,
        private data: Instruccion,
        linea:number,
        columna: number,
    ) {
        super(linea,columna);
    }
    
    public ast(): string {
        let cadena:string ="";
        cadena+=`nodo_${this.linea}_${this.columna}[label="<Instruccion>:\\n CASTEO"];\n`;
        cadena+=`tipo_${this.linea}_${this.columna}[label="<Nuevo Tipo>\n ${this.tipo}"];\n`;
        cadena+=this.data.ast()+'\n';
        cadena+=`nodo_${this.linea}_${this.columna} -> tipo_${this.linea}_${this.columna};\n`;
        cadena+=`nodo_${this.linea}_${this.columna} -> nodo_${this.data.linea}_${this.data.columna}\n`;
        return cadena;
    }
}