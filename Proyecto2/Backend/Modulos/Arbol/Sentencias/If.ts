import {Instruccion} from "../../Instrucciones/Instrucciones";

export class IfContainer extends Instruccion {
    constructor(
        private ifI: Instruccion,
        private Elif: Instruccion[],
        private ElseI: Instruccion,
        linea:number,
        columna: number,
    ) {
        super(linea,columna);
    }
    public tablaSimbolos() {
        this.ifI.tablaSimbolos()
        if (this.Elif!=null && this.Elif.length>0) {
            for(const intruccion of this.Elif){
                intruccion.tablaSimbolos();
            }
        }
        if (this.ElseI!=null) {
            this.ElseI.tablaSimbolos();
        }
    }
    public ast(): string {
        let cadena:string="";
        cadena+=`nodo_${this.linea}_${this.columna}[label="<Instruccion> IF"];\n`;
        cadena+= this.ifI.ast()+'\n';
        cadena+= `nodo_${this.linea}_${this.columna} -> nodoIF_${this.ifI.linea}_${this.ifI.columna};\n`
        if (this.Elif != null && this.Elif.length>0) {
            for(const element of this.Elif){
                cadena+= element.ast()+'\n'
                cadena+= `nodo_${this.linea}_${this.columna} -> nodo_${element.linea}_${element.columna};\n`
            }
        }
        if (this.ElseI!= null) {
            cadena += this.ElseI.ast()+'\n';
            cadena += `nodo_${this.linea}_${this.columna} -> nodo_${this.ElseI.linea}_${this.ElseI.columna}\n`;
        }
        return cadena;
    }
}

export class If extends Instruccion {
    constructor(
        private expresion: Instruccion,
        private instrucciones: Instruccion[],
        linea:number,
        columna: number,
    ) {
        super(linea,columna);
    }
    public tablaSimbolos() {
        if (this.instrucciones.length>0) {
            for(const intruccion of this.instrucciones){
                intruccion.tablaSimbolos();
            }
        }
    }
    public ast(): string {
        let cadena:string = "";
        cadena+=`nodoIF_${this.linea}_${this.columna}[label="< True >"];\n`;
        cadena+=`Instrucciones_${this.linea}_${this.columna}[label="<Lista Instrucciones>"];\n`;
        for (const element of this.instrucciones) {
            cadena += element.ast()+'\n';
            cadena +=`Instrucciones_${this.linea}_${this.columna} -> nodo_${element.linea}_${element.columna};\n`;
        }
        cadena+=`nodoIF_${this.linea}_${this.columna} -> Instrucciones_${this.linea}_${this.columna};\n`;
        return cadena;
    }
}

export class Else extends Instruccion {
    constructor(
        private instrucciones: Instruccion[],
        linea:number,
        columna: number,
    ) {
        super(linea,columna);
    }
    public tablaSimbolos() {
        if (this.instrucciones.length>0) {
            for(const intruccion of this.instrucciones){
                intruccion.tablaSimbolos();
            }
        }
    }
    public ast(): string {
        let cadena:string = "";
        cadena+=`nodo_${this.linea}_${this.columna}[label="<Instruccion>\\n ELSE"];\n`;
        cadena+=`Instrucciones_${this.linea}_${this.columna}[label="<Lista Instrucciones>"];\n`;
        for (const element of this.instrucciones) {
            cadena += element.ast()+'\n';
            cadena +=`Instrucciones_${this.linea}_${this.columna} -> nodo_${element.linea}_${element.columna};\n`;
        }
        cadena+=`nodo_${this.linea}_${this.columna} -> Instrucciones_${this.linea}_${this.columna};\n`;
        return cadena;
    }
}

export class Elif extends Instruccion {
    constructor(
        private expresion: Instruccion,
        private instrucciones: Instruccion[],
        linea:number,
        columna: number,
    ) {
        super(linea,columna);
    }
    public tablaSimbolos() {
        if (this.instrucciones.length>0) {
            for(const intruccion of this.instrucciones){
                intruccion.tablaSimbolos();
            }
        }
    }
    public ast(): string {
        let cadena:string = "";
        cadena+=`nodo_${this.linea}_${this.columna}[label="<Instruccion>\\n ELIF TRUE"];\n`;
        cadena+=`Instrucciones_${this.linea}_${this.columna}[label="<Lista Instrucciones>"];\n`;
        for (const element of this.instrucciones) {
            cadena += element.ast()+'\n';
            cadena +=`Instrucciones_${this.linea}_${this.columna} -> nodo_${element.linea}_${element.columna};\n`;
        }
        cadena+=`nodo_${this.linea}_${this.columna} -> Instrucciones_${this.linea}_${this.columna};\n`;
        return cadena;
    }
}
