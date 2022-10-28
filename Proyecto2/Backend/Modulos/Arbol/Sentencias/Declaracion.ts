import {Instruccion} from "../../Instrucciones/Instrucciones";

export class Declaracion extends Instruccion {
    constructor(
        private tipo: string,
        private nombre: string,
        linea:number,
        columna: number,
        private data?: Instruccion,
    ) {
        super(linea,columna);
    }
    
    public ast(): string {
        let cadena: string = "";
        cadena+=`
nodo_${this.linea}_${this.columna}[label="<Instruccion>\\n Declaracion"];
tipo_${this.linea}_${this.columna}[label="<Tipo>\\n ${this.tipo}"];
nombre_${this.linea}_${this.columna}[label="<Nombre>\\n ${this.nombre}"];
nodo_${this.linea}_${this.columna} -> tipo_${this.linea}_${this.columna};
nodo_${this.linea}_${this.columna} -> nombre_${this.linea}_${this.columna};\n`;
        if (this.data!= undefined) {
            cadena+= `${this.data.ast()}\n`;
            cadena+=`nodo_${this.linea}_${this.columna} -> nodo_${this.data.linea}_${this.data.columna}\n`;   
        }
        return cadena;
    }
}
