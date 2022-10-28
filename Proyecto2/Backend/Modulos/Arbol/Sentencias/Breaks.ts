import {Instruccion} from "../../Instrucciones/Instrucciones";

export class Breaks extends Instruccion {
    constructor(
        linea:number,
        columna: number,
    ) {
        super(linea,columna);
    }
    
    public ast(): string {
        let cadena = "";
        let nodo = `nodo_${this.linea}_${this.columna}`;
        cadena += `${nodo}[label="<Instruccion>\\n BREAK"];\n`;
        return cadena;
    }
}

export class ContinueS extends Instruccion {
    constructor(
        linea:number,
        columna: number,
    ) {
        super(linea,columna);
    }
    
    public ast(): string {
        let cadena = "";
        let nodo = `nodo_${this.linea}_${this.columna}`;
        cadena += `${nodo}[label="<Instruccion>\\n CONTINUE"];\n`;
        return cadena;
    }
}

export class ReturnS extends Instruccion {
    constructor(
        private data:Instruccion,
        linea:number,
        columna: number,
    ) {
        super(linea,columna);
    }
    
    public ast(): string {
        let cadena = "";
        let nodo = `nodo_${this.linea}_${this.columna}`;
        cadena += `${nodo}[label="<Instruccion>\\n RETURN"];\n`;
        if(this.data != null){
            cadena += this.data.ast()+'\n';
            cadena += `${nodo} -> nodo_${this.data.linea}_${this.data.columna};\n`;
        }
        return cadena;
    }
}