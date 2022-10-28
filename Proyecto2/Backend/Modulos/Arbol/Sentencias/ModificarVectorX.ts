import {Instruccion} from "../../Instrucciones/Instrucciones";

export class ModificarVectorX extends Instruccion {
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
        let cadena:string ="";
        cadena += `nodo_${this.linea}_${this.columna}[label="<Instruccion>:\\n Modificar Vector"];\n`;
        cadena += `id_${this.linea}_${this.columna}[label="<Nombre>:\\n ${this.nombre}"];\n`;
        cadena += `posicion_${this.linea}_${this.columna}[label="<Posicion X>"];\n`;
        cadena += `valor_${this.linea}_${this.columna}[label="<Valor Asignar>"];\n`;
        cadena += this.data1.ast()+'\n';;
        cadena += this.data2.ast()+'\n';;
        cadena += `nodo_${this.linea}_${this.columna} -> id_${this.linea}_${this.columna};\n`;
        cadena += `nodo_${this.linea}_${this.columna} -> posicion_${this.linea}_${this.columna};\n`;
        cadena += `nodo_${this.linea}_${this.columna} -> valor_${this.linea}_${this.columna};\n`;
        cadena += `posicion_${this.linea}_${this.columna} -> nodo_${this.data1.linea}_${this.data1.columna};\n`;
        cadena += `valor_${this.linea}_${this.columna} -> nodo_${this.data2.linea}_${this.data2.columna};\n`;
        return cadena;
    }
}

export class ModificarVectorXY extends Instruccion {
    constructor(
        private nombre: string,
        private data1: Instruccion,
        private data2: Instruccion,
        private data3: Instruccion,
        linea:number,
        columna: number,
    ) {
        super(linea,columna);
    }
    
    public ast(): string {
        let cadena:string ="";
        cadena += `nodo_${this.linea}_${this.columna}[label="<Instruccion>:\\n Modificar Vector"];\n`;
        cadena += `id_${this.linea}_${this.columna}[label="<Nombre>:\\n ${this.nombre}"];\n`;
        cadena += `posicion_${this.linea}_${this.columna}[label="<Posicion [ X, Y ]>"];\n`;
        cadena += `valor_${this.linea}_${this.columna}[label="<Valor Asignar>"];\n`;
        cadena += this.data1.ast()+';\n';
        cadena += this.data2.ast()+'\n';
        cadena += this.data3.ast()+'\n';
        cadena += `nodo_${this.linea}_${this.columna} -> id_${this.linea}_${this.columna};\n`;
        cadena += `nodo_${this.linea}_${this.columna} -> posicion_${this.linea}_${this.columna};\n`;
        cadena += `nodo_${this.linea}_${this.columna} -> valor_${this.linea}_${this.columna};\n`;
        cadena += `posicion_${this.linea}_${this.columna} -> nodo_${this.data1.linea}_${this.data1.columna};\n`;
        cadena += `posicion_${this.linea}_${this.columna} -> nodo_${this.data2.linea}_${this.data2.columna};\n`;
        cadena += `valor_${this.linea}_${this.columna} -> nodo_${this.data3.linea}_${this.data3.columna};\n`;
        return cadena;
    }
}