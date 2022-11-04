import {Instruccion} from "../../Instrucciones/Instrucciones";
export class OperadorTernario extends Instruccion{
    constructor(
        private expresion: Instruccion,
        private a: Instruccion,
        private b: Instruccion,
        linea:number,
        columna:number
        ){
        super(linea,columna)
    }
    public ast(): string {
        let cadena:string ="";
        cadena+=`nodo_${this.linea}_${this.columna}[label="<Instruccion>:\n Operador Ternario"]`;

        cadena+=`nodo_Expresion_${this.linea}_${this.columna}[label="<Instruccion>:\n Expresion Validacion"];\n`;
        cadena+= this.expresion.ast();
        cadena+=`nodo_Instruccione_${this.linea}_${this.columna}[label="<Intrucciones>\n A o B"];\n`;
        cadena+= this.a.ast();
        cadena+= this.b.ast();
        //asignaciones
        cadena+=`nodo_${this.linea}_${this.columna} -> nodo_Expresion_${this.linea}_${this.columna};\n`;
        cadena+=`nodo_Expresion_${this.linea}_${this.columna} -> nodo_${this.expresion.linea}_${this.expresion.columna};\n`;
        cadena+=`nodo_${this.linea}_${this.columna} -> nodo_Instruccione_${this.linea}_${this.columna};\n`;
        cadena+=`nodo_Instruccione_${this.linea}_${this.columna} -> nodo_${this.a.linea}_${this.a.columna};\n`;
        cadena+=`nodo_Instruccione_${this.linea}_${this.columna} -> nodo_${this.b.linea}_${this.b.columna};\n`;
        return cadena;
    }
    public tablaSimbolos() {
    }
}