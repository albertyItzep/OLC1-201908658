import {Instruccion} from "../../Instrucciones/Instrucciones";

export class AccesoVectorX extends Instruccion {
    constructor(
        private nombre: string,
        private data: Instruccion,
        linea:number,
        columna: number,
    ) {
        super(linea,columna);
    }
    
    public ast(): string {
        let cadena:string="";
        cadena += `nodo_${this.linea}_${this.columna}[label="<Instruccion>:\\n Acceso Vector [valor]"];\n`;
        cadena += `id_${this.linea}_${this.columna}[label="<Id>:\\n ${this.nombre}"];\n`;
        cadena += this.data.ast()+'\n';
        cadena += `nodo_${this.linea}_${this.columna} -> id_${this.linea}_${this.columna};\n`
        cadena += `nodo_${this.linea}_${this.columna} -> nodo_${this.data.linea}_${this.data.columna};\n`
        return cadena;
    }
    public tablaSimbolos() {
    }
}