import {Instruccion} from "../../Instrucciones/Instrucciones";

export class Swith extends Instruccion {
    constructor(
        private expresion: Instruccion,
        private listCase:Instruccion[],
        private defaults:Instruccion,
        linea:number,
        columna: number,

    ) {
        super(linea,columna);
    }
    
    public ast(): string {
        let cadena = "";
        let nodo = `nodo_${this.linea}_${this.columna}`;
        cadena += `${nodo}[label="<Instruccion>\\n SWITCH"];\n`;
        cadena += `ExpresionS_${this.linea}_${this.columna}[label="<Expresion>"];\n`
        cadena += this.expresion.ast()+'\n';
        cadena += `${nodo} -> ExpresionS_${this.linea}_${this.columna};\n`;

        cadena += `ExpresionS_${this.linea}_${this.columna} -> nodo_${this.expresion.linea}_${this.expresion.columna};\n`
        if (this.listCase != null && this.listCase.length>0) {
            cadena += `Cases_${this.linea}_${this.columna}[label="<Lista Casos>"];\n`
            for(const element of this.listCase){
                cadena += element.ast()+'\n';
                cadena += `Cases_${this.linea}_${this.columna} -> nodo_${element.linea}_${element.columna};\n`;
            }
            cadena += `${nodo} -> Cases_${this.linea}_${this.columna};\n`;
        }
        if (this.defaults != null) {
            cadena += this.defaults.ast()+'\n';
            cadena += `${nodo} -> nodo_${this.defaults.linea}_${this.defaults.columna};\n`;
        }
        return cadena;
    }
    public tablaSimbolos() {
        if(this.listCase!= null && this.listCase.length>0){
            for(const instruccion of this.listCase){
                instruccion.tablaSimbolos()
            }
        }
        if(this.defaults!= null){
            this.defaults.tablaSimbolos()
        }
    }
}

export class Case extends Instruccion {
    constructor(
        private expresion: Instruccion,
        private data: Instruccion[],
        linea:number,
        columna: number,
    ) {
        super(linea,columna);
    }
    public tablaSimbolos() {
        if(this.data.length>0){
            for(const instruccion of this.data){
                instruccion.tablaSimbolos()
            }
        }
    }
    public ast(): string {
        let cadena ="";
        let nodo = `nodo_${this.linea}_${this.columna}`;
        cadena += `${nodo}[label="<Instruccion>\\n CASE "];\n`;
        cadena += `Expresion_${this.linea}_${this.columna}[label="<Expresion>"];\n`
        cadena += this.expresion.ast()+'\n';
        cadena += `${nodo} -> Expresion_${this.linea}_${this.columna};\n`;

        cadena += `Expresion_${this.linea}_${this.columna} -> nodo_${this.expresion.linea}_${this.expresion.columna}\n`

        cadena += `Istrucciones_${this.linea}_${this.columna}[label="<Lista Instrucciones>"];\n`
        for(const element of this.data){
            cadena += element.ast()+'\n';
            cadena += `Istrucciones_${this.linea}_${this.columna} -> nodo_${element.linea}_${element.columna};\n`;
        }
        cadena += `${nodo} -> Istrucciones_${this.linea}_${this.columna};\n`;
        return cadena;
    }
}

export class Default extends Instruccion {
    constructor(
        private data: Instruccion[],
        linea:number,
        columna: number,
    ) {
        super(linea,columna);
    }
    public tablaSimbolos() {
        if(this.data.length>0){
            for(const instruccion of this.data){
                instruccion.tablaSimbolos()
            }
        }
    }
    public ast(): string {
        let cadena ="";
        let nodo = `nodo_${this.linea}_${this.columna}`;
        cadena += `${nodo}[label="<Instruccion>\\n DEFAULT"]\n`;
        for(const element of this.data){
            cadena += element.ast()+'\n';
            cadena += `${nodo} -> nodo_${element.linea}_${element.columna};\n`;
        }
        return cadena;
    }
} 