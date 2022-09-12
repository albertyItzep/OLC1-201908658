package Analizadores;
import java_cup.runtime.*;
import java.util.LinkedList;
%%
%{
  public static LinkedList<TError> TablaEL = new LinkedList<TError>();
%}
%public
%class Analizador_Lexico
%cupsym Simbolos
%cup
%char
%column
%full
%ignorecase
%line
%unicode

numeroDecimal =(\d+\s*\n*\t*\.\s*\n*\t*\d+\s*\n*\t*)
numeroEntero =(\d+\s*\n*\t*)
cadena =[\"]([^\"\n]|(\\\"))*[\"]
caracter =(\'.*?\')|(\'\$\{.*?\}')
comentario_lineal =(\/\/).*?(\n)
comentario_multilineal =(\/\*)(\s*|.*?)*(\*\/)
variables =\_([A-Za-z]|[0-9])*\_
booleanR =verdadero|falso
tipoDato =numero|cadena|caracter|boolean
%%


/*------------ Globales ---------*/
<YYINITIAL>"inicio" {
                     System.out.println("Reconocio token:Inicio lexema:"+yytext());
                     return new Symbol(Simbolos.inicio,yycolumn,yyline,yytext());
                     }
<YYINITIAL>"fin" {
                     System.out.println("Reconocio token:fin lexema:"+yytext());
                     return new Symbol(Simbolos.fin,yycolumn,yyline,yytext());
                     }
/*------------ declaracion variables -----------*/
<YYINITIAL>"ingresar" {
                     System.out.println("Reconocio token:ingresar :"+yytext());
                     return new Symbol(Simbolos.ingresar,yycolumn,yyline,yytext());
                     }
<YYINITIAL>"como" {
                     System.out.println("Reconocio token:como :"+yytext());
                     return new Symbol(Simbolos.como,yycolumn,yyline,yytext());
                     }
<YYINITIAL>"con_valor" {
                     System.out.println("Reconocio token:con valor :"+yytext());
                     return new Symbol(Simbolos.con_valor,yycolumn,yyline,yytext());
                     }
/*------------ Asignacion de variables ---------*/
<YYINITIAL>"->" {
                     System.out.println("Reconocio token:AsignarValor :"+yytext());
                     return new Symbol(Simbolos.asignarValor,yycolumn,yyline,yytext());
                     }
/*------------ Declaracion para if -------------*/
<YYINITIAL>"si" {
                System.out.println("Reconocio token:si:"+yytext());
                return new Symbol(Simbolos.si,yycolumn,yyline,yytext());
             }
<YYINITIAL>"o_si" {
                System.out.println("Reconocio token:o_si:"+yytext());
                return new Symbol(Simbolos.o_si,yycolumn,yyline,yytext());
             }
<YYINITIAL>"de_lo_contrario" {
                System.out.println("Reconocio token:de lo contrario:"+yytext());
                return new Symbol(Simbolos.de_lo_contrario,yycolumn,yyline,yytext());
             }
<YYINITIAL>"fin_si" {
                System.out.println("Reconocio token:fin_si:"+yytext());
                return new Symbol(Simbolos.fi_si,yycolumn,yyline,yytext());
             }

/*------------ Declaracion para Mientras -------*/
<YYINITIAL>"mientras" {
                     System.out.println("Reconocio token:mientras:" + yytext());
                     return new Symbol(Simbolos.mientras,yycolumn,yyline,yytext());
                     }
<YYINITIAL>"hacer" {
                     System.out.println("Reconocio token:hacer:" + yytext());
                     return new Symbol(Simbolos.hacer,yycolumn,yyline,yytext());
                     }
<YYINITIAL>"fin_mientras" {
                     System.out.println("Reconocio token:fin_mientras:"+yytext());
                     return new Symbol(Simbolos.fmientras,yycolumn,yyline,yytext());
                     }
/*------------ Operaciones Aritmeticas ---------*/
<YYINITIAL>"?" {
                     System.out.println("Reconocio token:inteC lexema:"+yytext());
                     return new Symbol(Simbolos.inteC,yycolumn,yyline,yytext());
                     }
<YYINITIAL>"¿" {
                     System.out.println("Reconocio token:inteA lexema:"+yytext());
                     return new Symbol(Simbolos.inteA,yycolumn,yyline,yytext());
                     }
<YYINITIAL>"+" {
                     System.out.println("Reconocio token:mas lexema:"+yytext());
                     return new Symbol(Simbolos.mas,yycolumn,yyline,yytext());
                     }
<YYINITIAL>"-" {
                     System.out.println("Reconocio token:menos lexema:"+yytext());
                     return new Symbol(Simbolos.menos,yycolumn,yyline,yytext());
                     }
<YYINITIAL>"*" {
                     System.out.println("Reconocio token:por lexema:"+yytext());
                     return new Symbol(Simbolos.por,yycolumn,yyline,yytext());
                     }
<YYINITIAL>"/" {
                     System.out.println("Reconocio token:division lexema:"+yytext());
                     return new Symbol(Simbolos.division,yycolumn,yyline,yytext());
                     }
<YYINITIAL>"potencia" {
                     System.out.println("Reconocio token:potencia lexema:"+yytext());
                     return new Symbol(Simbolos.potencia,yycolumn,yyline,yytext());
                     }
<YYINITIAL>"mod" {
                     System.out.println("Reconocio token:mod lexema:"+yytext());
                     return new Symbol(Simbolos.mod,yycolumn,yyline,yytext());
                     }
<YYINITIAL>"(" {
                     System.out.println("Reconocio token:parentesisAbre lexema:"+yytext());
                     return new Symbol(Simbolos.parA,yycolumn,yyline,yytext());
                     }
<YYINITIAL>")" {
                     System.out.println("Reconocio token:parentesisCierra lexema:"+yytext());
                     return new Symbol(Simbolos.parC,yycolumn,yyline,yytext());
                     }
<YYINITIAL>"[" {
                     System.out.println("Reconocio token:corA lexema:"+yytext());
                     return new Symbol(Simbolos.corA,yycolumn,yyline,yytext());
                     }
<YYINITIAL>"]" {
                     System.out.println("Reconocio token:corC lexema:"+yytext());
                     return new Symbol(Simbolos.corC,yycolumn,yyline,yytext());
                     }
/*------------ TIPO relacional -----------*/
<YYINITIAL>"mayor" {
                    System.out.println("Reconocio token:mayor lexema:"+yytext());
                    return new Symbol(Simbolos.mayorQue,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"menor" {
                    System.out.println("Reconocio token:menor lexema:"+yytext());
                    return new Symbol(Simbolos.menorQue,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"mayor_o_igual" {
                    System.out.println("Reconocio token:mayorOIgual lexema:"+yytext());
                    return new Symbol(Simbolos.mayorOIgual,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"menor_o_igual" {
                    System.out.println("Reconocio token:menorOIgual lexema:"+yytext());
                    return new Symbol(Simbolos.menorOIgual,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"es_igual" {
                    System.out.println("Reconocio token:igual lexema:"+yytext());
                    return new Symbol(Simbolos.igualLogico,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"es_diferente" {
                    System.out.println("Reconocio token:diferente lexema:"+yytext());
                    return new Symbol(Simbolos.diferente,yycolumn,yyline,yytext());
                    }

/*------------ Tipo Logica ------------*/
<YYINITIAL>"or" {
                    System.out.println("Reconocio token:or lexema:"+yytext());
                    return new Symbol(Simbolos.or,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"and" {
                    System.out.println("Reconocio token:and lexema:"+yytext());
                    return new Symbol(Simbolos.and,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"not" {
                    System.out.println("Reconocio token:not lexema:"+yytext());
                    return new Symbol(Simbolos.not,yycolumn,yyline,yytext());
                    }

/*------------ Tipos de datos ---------*/
<YYINITIAL>"," {
                     System.out.println("Reconocio token:coma lexema:"+yytext());
                     return new Symbol(Simbolos.coma,yycolumn,yyline,yytext());
                     }
<YYINITIAL>";" {
                     System.out.println("Reconocio token:punto y coma lexema:"+yytext());
                     return new Symbol(Simbolos.ptcoma,yycolumn,yyline,yytext());
                     }

<YYINITIAL>{numeroDecimal} {
                     System.out.println("Reconocio token:Numero lexema:"+yytext());
                     return new Symbol(Simbolos.numero,yycolumn,yyline,yytext());
                     }
<YYINITIAL>{numeroEntero} {
                     System.out.println("Reconocio token:Numero lexema:"+yytext());
                     return new Symbol(Simbolos.numero,yycolumn,yyline,yytext());
                     }
<YYINITIAL>{cadena} {
                    System.out.println("Reconocio token:cadena lexema:"+yytext());
                    return new Symbol(Simbolos.cadena,yycolumn,yyline,yytext());
                    }
<YYINITIAL>{caracter} {
                    System.out.println("Reconocio token:caracter lexema:"+yytext());
                    return new Symbol(Simbolos.caracter,yycolumn,yyline,yytext());
                    }
<YYINITIAL>{comentario_lineal} {
                    System.out.println("Reconocio token:comentario lineal lexema:"+yytext());
                    return new Symbol(Simbolos.comentario,yycolumn,yyline,yytext());
                    }
<YYINITIAL>{comentario_multilineal} {
                    System.out.println("Reconocio token:comentario multi lineal lexema:"+yytext());
                    return new Symbol(Simbolos.comentario,yycolumn,yyline,yytext());
                    }
<YYINITIAL>{variables} {
                    System.out.println("Reconocio token:variables lexema:"+yytext());
                    return new Symbol(Simbolos.variables,yycolumn,yyline,yytext());
                    }
<YYINITIAL>{booleanR} {
                    System.out.println("Reconocio token:boolean lineal lexema:"+yytext());
                    return new Symbol(Simbolos.booleanR,yycolumn,yyline,yytext());
                    }
<YYINITIAL>{tipoDato} {
                    System.out.println("Reconocio token:tipoDato lineal lexema:"+yytext());
                    return new Symbol(Simbolos.tipoDato,yycolumn,yyline,yytext());
                    }
/*-------------- ciclo for ------------*/
<YYINITIAL>"para" {
                    System.out.println("Reconocio token: lexema:para"+yytext());
                    return new Symbol(Simbolos.para,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"hasta" {
                    System.out.println("Reconocio token:hasta lexema:"+yytext());
                    return new Symbol(Simbolos.hasta,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"con" {
                    System.out.println("Reconocio token:con lexema:"+yytext());
                    return new Symbol(Simbolos.con,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"incremental" {
                    System.out.println("Reconocio token:incremental lexema:"+yytext());
                    return new Symbol(Simbolos.incremental,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"fin_para" {
                    System.out.println("Reconocio token:fpara lexema:"+yytext());
                    return new Symbol(Simbolos.fpara,yycolumn,yyline,yytext());
                    }
/* -------------- ciclo do while ----------*/
<YYINITIAL>"repetir" {
                    System.out.println("Reconocio token:repetir lexema:"+yytext());
                    return new Symbol(Simbolos.repetir,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"hasta_que" {
                    System.out.println("Reconocio token:hasta_que lexema:"+yytext());
                    return new Symbol(Simbolos.hasta_que,yycolumn,yyline,yytext());
                    }
/* ----- retorno ---- */
<YYINITIAL>"retornar" {
                    System.out.println("Reconocio token:retornar lexema:"+yytext());
                    return new Symbol(Simbolos.retornar,yycolumn,yyline,yytext());
                    }
/*------- case -----*/
<YYINITIAL>"segun" {
                    System.out.println("Reconocio token:segun lexema:"+yytext());
                    return new Symbol(Simbolos.segun,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"entonces" {
                    System.out.println("Reconocio token:entonces lexema:"+yytext());
                    return new Symbol(Simbolos.entonces,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"fin_segun" {
                    System.out.println("Reconocio token:fin_segun lexema:"+yytext());
                    return new Symbol(Simbolos.fin_segun,yycolumn,yyline,yytext());
                    }
/* -------- metodo ---------*/
<YYINITIAL>"metodo" {
                    System.out.println("Reconocio token:metodo lexema:"+yytext());
                    return new Symbol(Simbolos.metodo,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"con_parametros" {
                    System.out.println("Reconocio token:con_parametros lexema:"+yytext());
                    return new Symbol(Simbolos.con_parametros,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"fin_metodo" {
                    System.out.println("Reconocio token:fin_metodo lexema:"+yytext());
                    return new Symbol(Simbolos.fin_metodo,yycolumn,yyline,yytext());
                    }
/* ------- funcion ----- */
<YYINITIAL>"funcion" {
                    System.out.println("Reconocio token:funcion lexema:"+yytext());
                    return new Symbol(Simbolos.funcion,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"fin_funcion" {
                    System.out.println("Reconocio token:fin_funcion lexema:"+yytext());
                    return new Symbol(Simbolos.fin_funcion,yycolumn,yyline,yytext());
                    }
/*---------- imprimir, ejecutar --------*/
<YYINITIAL>"imprimir" {
                    System.out.println("Reconocio token:imprimir lexema:"+yytext());
                    return new Symbol(Simbolos.imprimir,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"imprimir_nl" {
                    System.out.println("Reconocio token:imprimir_nl lexema:"+yytext());
                    return new Symbol(Simbolos.imprimir_nl,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"ejecutar" {
                    System.out.println("Reconocio token:ejecutar lexema:"+yytext());
                    return new Symbol(Simbolos.ejecutar,yycolumn,yyline,yytext());
                    }
[ \t\r\n\f] {}

.   {
     System.out.println("Error Lexico : "+yytext()+"Linea"+(yyline+1)+" Columna "+yycolumn);
     TError datos = new TError(yytext(), yyline, yycolumn, "Error Léxico", "Simbolo no existe en el lenguaje");
     TablaEL.add(datos);
}
/*
numeroDecimal =  (\d+\s*\n*\t*\.\s*\n*\t*\d+\s*\n*\t*)
    numeroEntero = (\d+\s*\n*\t*)
    cadena = \".*?\"
    caracter = (\'.*?\')|(\'$\{.*?\}')
    comentario = \\\*\n*\s*\t*(.*?)\n*\s*\t*\*\\
    variableNombre = \_.[^\W]*?\_
    booleanR = \n*\s*\t*true\n*\s*\t*|\n*\s*\t*false\n*\s*\t* */