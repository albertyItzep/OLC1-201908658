import {Instruccion} from "../../Instrucciones/Instrucciones";

export class Asignacion extends Instruccion {
    constructor(
        private nombre: string,
        private data: Instruccion,
        linea:number,
        columna: number,
    ) {
        super(linea,columna);
    }
    
    public ast(): string {
        let cadena: string = "";
        cadena+=`
nodo_${this.linea}_${this.columna}[label="<Instruccion> \\n Asignacion"];
nombre_${this.linea}_${this.columna}[label="<Nombre>\\n ${this.nombre}"];
nodo_${this.linea}_${this.columna} -> nombre_${this.linea}_${this.columna};\n`;
        cadena+= `${this.data.ast()}\n`;
        cadena+=`nodo_${this.linea}_${this.columna} -> nodo_${this.data.linea}_${this.data.columna}\n`;   
        return cadena;
    }
}