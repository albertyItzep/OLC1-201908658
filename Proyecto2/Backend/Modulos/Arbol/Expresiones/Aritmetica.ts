import {Instruccion} from "../../Instrucciones/Instrucciones";

export class Aritmericas extends Instruccion {
    public tablaSimbolos() {
    }
    constructor(
        private a: Instruccion,
        private b: Instruccion,
        private tipo: String,
        linea: number, 
        columna:number){
        super(linea,columna)
    }
    public ast(): string {
        let cadena: string ="";
        cadena+=`${this.a.ast()}\n`;
        cadena+=`${this.b.ast()}\n`;
        cadena+=`nodo_${this.linea}_${this.columna}[label=<Instruccion: "${this.tipo}">];
nodo_${this.linea}_${this.columna} -> nodo_${this.a.linea}_${this.a.columna};
nodo_${this.linea}_${this.columna} -> nodo_${this.b.linea}_${this.b.columna};
        `;
        return cadena;
    }
}