import {Instruccion} from "../../Instrucciones/Instrucciones";
export class Relacion extends Instruccion{
    constructor(
        private a: Instruccion,
        private b: Instruccion,
        private tipo : string,
        linea:number,
        columna:number
        ){
        super(linea,columna)
    }
    public ast(): string {
        let cadena: string ="";
        if(this.tipo =="NOT"){
            cadena+=`nodeNOT[label="Negacion"];\n`;
        }else{
            cadena+=`${this.a.ast()}\n`;    
        }
        cadena+=`${this.b.ast()}\n`;
        cadena+=`nodo_${this.linea}_${this.columna}[label=<Instruccion: "${this.tipo}">];\n`;
        if(this.tipo =="NOT"){
            cadena+=`nodo_${this.linea}_${this.columna} -> nodeNOT;
nodeNOT ->  nodo_${this.b.linea}_${this.b.columna};
            `;
        }else{
            cadena+=`nodo_${this.linea}_${this.columna} -> nodo_${this.a.linea}_${this.a.columna};
nodo_${this.linea}_${this.columna} -> nodo_${this.b.linea}_${this.b.columna};\n`;
        }
        return cadena;
    }
    public tablaSimbolos() {
    }
}

/*let cadena: string ="";
        if(this.tipo =="NOT"){
            cadena+=`nodeNOT[label="Negacion"];`;
        }else{
            cadena+=`${this.a.ast()}\n`;    
        }
        cadena+=`${this.b.ast()}\n`;
        cadena+=`nodo_${this.linea}_${this.columna}[label=<Instruccion: "${this.tipo}">];\n`;
        if (this.tipo =="NOT") {
            cadena+=`nodo_${this.linea}_${this.columna} -> nodeNOT;
nodo_${this.linea}_${this.columna} -> nodo_${this.b.linea}_${this.b.columna};`;
        } else {
            cadena+=`nodo_${this.linea}_${this.columna} -> nodo_${this.a.linea}_${this.a.columna};
nodo_${this.linea}_${this.columna} -> nodo_${this.b.linea}_${this.b.columna};\n`;
        }
        return cadena */