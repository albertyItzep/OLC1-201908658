import {Instruccion} from "../../Instrucciones/Instrucciones";

export class VectorChar extends Instruccion {
    constructor(
        private tipo: string,
        private nombre: string,
        private expresion: Instruccion,
        linea:number,
        columna: number,
    ) {
        super(linea,columna);
    }
    
    public ast(): string {
        let cadena = "";

        cadena+=`nodo_${this.linea}_${this.columna}[label="<Instruccion>\\n Vector"];\n`
        cadena+=`tipo_${this.linea}_${this.columna}[label="<Tipo>: \\n ${this.tipo}"];\n`
        cadena+=`nombre_${this.linea}_${this.columna}[label="<Nombre>: \\n ${this.nombre}"];\n`
        cadena+= this.expresion.ast()+'\n';
        cadena+=`nodo_${this.linea}_${this.columna} -> tipo_${this.linea}_${this.columna};\n`;
        cadena+=`nodo_${this.linea}_${this.columna} -> nombre_${this.linea}_${this.columna};\n`;
        cadena+=`nodo_${this.linea}_${this.columna} -> nodo_${this.expresion.linea}_${this.expresion.columna};\n`;
        return cadena;
    }
}
