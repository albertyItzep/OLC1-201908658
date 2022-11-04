import {Instruccion} from "../../Instrucciones/Instrucciones";
import { Singleton } from "../../Instrucciones/Singleton";

export class VectorX extends Instruccion {
    public tablaSimbolos() {
        let s = Singleton.getInstance();
        let ids = this.nombre.split(',');
        if (ids.length>0) {
            ids.forEach(ele =>{
                s.add_Variable(ele,this.tipo,this.linea,this.columna,{"valor":this.data});
            })
        }else{
            s.add_Variable(this.nombre,this.tipo,this.linea,this.columna,{"valor":this.data});
        }
    }
    constructor(
        private tipo: string,
        private nombre: string,
        linea:number,
        columna: number,
        private size?: Instruccion,
        private tipoD?: string,
        private data?:Instruccion[],
    ) {
        super(linea,columna);
    }
    
    public ast(): string {
        let cadena: string ="";
        if(this.data != undefined){
            cadena+=`nodo_${this.linea}_${this.columna}[label="<Instruccion>\\n Vector"];\n`
            cadena+=`tipo_${this.linea}_${this.columna}[label="<Tipo>: \\n ${this.tipo}"];\n`
            cadena+=`nombre_${this.linea}_${this.columna}[label="<Nombre>: \\n ${this.nombre}"];\n`
            cadena+=`instancia_${this.linea}_${this.columna}[label="<Contenido>\\n Dimension 1"];\n`;
            for (const element of this.data) {              
                cadena+=element.ast()+'\n';
                cadena+=`instancia_${this.linea}_${this.columna} -> nodo_${element.linea}_${element.columna}\n`;
            }
            cadena+=`nodo_${this.linea}_${this.columna} -> tipo_${this.linea}_${this.columna};\n`;
            cadena+=`nodo_${this.linea}_${this.columna} -> nombre_${this.linea}_${this.columna};\n`;
            cadena+=`nodo_${this.linea}_${this.columna} -> instancia_${this.linea}_${this.columna};\n`;
        }else{
            cadena+=`nodo_${this.linea}_${this.columna}[label="<Instruccion>\\n Vector"];\n`
            cadena+=`tipo_${this.linea}_${this.columna}[label="<Tipo>: \\n ${this.tipo}"];\n`
            cadena+=`nombre_${this.linea}_${this.columna}[label="<Nombre>: \\n ${this.nombre}"];\n`
            cadena+=`instancia_${this.linea}_${this.columna}[label="<Arreglo Instancia Tamaño>\\n"];\n`;
            cadena+= this.size?.ast()+'\n';
            cadena+=`nodo_${this.linea}_${this.columna} -> tipo_${this.linea}_${this.columna};\n`;
            cadena+=`nodo_${this.linea}_${this.columna} -> nombre_${this.linea}_${this.columna};\n`;
            cadena+=`nodo_${this.linea}_${this.columna} -> instancia_${this.linea}_${this.columna};\n`;
            cadena+=`instancia_${this.linea}_${this.columna} -> nodo_${this.size?.linea}_${this.size?.columna}\n`;
        }
        return cadena;
    }
}

export class VectorXY extends Instruccion {
    public tablaSimbolos() {
        let s = Singleton.getInstance();
        let ids = this.nombre.split(',');
        if (ids.length>0) {
            ids.forEach(ele =>{
                s.add_Variable(ele,this.tipo,this.linea,this.columna,{"valor1":this.data1,"valor2":this.data2});
            })
        }else{
            s.add_Variable(this.nombre,this.tipo,this.linea,this.columna,{"valor1":this.data1,"valor2":this.data2});
        }
    }
    constructor(
        private tipo: string,
        private nombre: string,
        linea:number,
        columna: number,
        private size1?: Instruccion,
        private size2?: Instruccion,
        private tipoD?: string,
        private data1?:Instruccion[],
        private data2?:Instruccion[],
    ) {
        super(linea,columna);
    }
    
    public ast(): string {
        let cadena: string ="";
        if (this.data1 != undefined && this.data2!= undefined) {
            cadena+=`nodo_${this.linea}_${this.columna}[label="<Instruccion>\\n Vector"];\n`
            cadena+=`tipo_${this.linea}_${this.columna}[label="<Tipo>: \\n ${this.tipo}"];\n`
            cadena+=`nombre_${this.linea}_${this.columna}[label="<Nombre>: \\n ${this.nombre}"];\n`
            cadena+=`instancia_${this.linea}_${this.columna}[label="<Contenido>\\n 2 Dimensiones"];\n`;
            cadena+=`Dimension1_${this.linea}_${this.columna}[label="<Dimension 1>"];\n`;
            cadena+=`Dimension2_${this.linea}_${this.columna}[label="<Dimension 2>"];\n`;
            for (const element of this.data1) {              
                cadena+=element.ast()+'\n';
                cadena+=`Dimension1_${this.linea}_${this.columna} -> nodo_${element.linea}_${element.columna}\n`;
            }
            for (const element of this.data2) {              
                cadena+=element.ast()+'\n';
                cadena+=`Dimension2_${this.linea}_${this.columna} -> nodo_${element.linea}_${element.columna}\n`;
            }
            cadena+=`nodo_${this.linea}_${this.columna} -> tipo_${this.linea}_${this.columna};\n`;
            cadena+=`nodo_${this.linea}_${this.columna} -> nombre_${this.linea}_${this.columna};\n`;
            cadena+=`nodo_${this.linea}_${this.columna} -> instancia_${this.linea}_${this.columna};\n`;
            cadena+=`instancia_${this.linea}_${this.columna} -> Dimension1_${this.linea}_${this.columna};\n`;
            cadena+=`instancia_${this.linea}_${this.columna} -> Dimension2_${this.linea}_${this.columna};\n`;
        } else {
            cadena+=`nodo_${this.linea}_${this.columna}[label="<Instruccion>\\n Vector"];\n`
            cadena+=`tipo_${this.linea}_${this.columna}[label="<Tipo>: \\n ${this.tipo}"];\n`
            cadena+=`nombre_${this.linea}_${this.columna}[label="<Nombre>: \\n ${this.nombre}"];\n`
            cadena+=`instancia_${this.linea}_${this.columna}[label="<Instancia Dimencion 2>\\n"];\n`;
            cadena+= this.size1?.ast()+'\n';
            cadena+= this.size2?.ast()+'\n';
            cadena+=`nodo_${this.linea}_${this.columna} -> tipo_${this.linea}_${this.columna};\n`;
            cadena+=`nodo_${this.linea}_${this.columna} -> nombre_${this.linea}_${this.columna};\n`;
            cadena+=`nodo_${this.linea}_${this.columna} -> instancia_${this.linea}_${this.columna};\n`;
            cadena+=`instancia_${this.linea}_${this.columna} -> nodo_${this.size1?.linea}_${this.size1?.columna}\n`;
            cadena+=`instancia_${this.linea}_${this.columna} -> nodo_${this.size2?.linea}_${this.size2?.columna}\n`;
        }
        
        return cadena;
    }
}