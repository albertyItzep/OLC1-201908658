import {Instruccion} from "../../Instrucciones/Instrucciones";

export class AccesoVectorXY extends Instruccion {
    constructor(
        private nombre: string,
        private data1: Instruccion,
        private data2: Instruccion,
        linea:number,
        columna: number,
    ) {
        super(linea,columna);
    }
    
    public ast(): string {
        let cadena:string="";
        cadena += `nodo_${this.linea}_${this.columna}[label="<Instruccion>:\\n Acceso Vector [Valor][Valor]"];\n`;
        cadena += `id_${this.linea}_${this.columna}[label="<Id>:\\n ${this.nombre}"];\n`;
        cadena += this.data1.ast()+';\n';
        cadena += this.data2.ast()+'\n';
        cadena += `nodo_${this.linea}_${this.columna} -> id_${this.linea}_${this.columna};\n`
        cadena += `nodo_${this.linea}_${this.columna} -> nodo_${this.data1.linea}_${this.data1.columna};\n`
        cadena += `nodo_${this.linea}_${this.columna} -> nodo_${this.data2.linea}_${this.data2.columna};\n`
        return cadena;
    }
}