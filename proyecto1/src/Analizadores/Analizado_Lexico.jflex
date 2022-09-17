package Analizadores;
import java_cup.runtime.*;
import java.util.LinkedList;
%%
%{
  public static LinkedList<TError> TablaEL = new LinkedList<TError>();
  public static LinkedList<Instruccion> AST = new LinkedList<Instruccion>();
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
cadena =[\"]([^\"]|(\\\"))*[\"]
caracter =(\'.*?\')|(\'\$\{.*?\}')
comentario_lineal =("//".*\r\n)|("//".*\n)|("//".*\r)
comentario_multilineal =\/\*(\n|\s|\t|\w|\d|W)*?\*\/
variables =\_([A-Za-z]|[0-9])*\_
booleanR =verdadero|falso
tipoDato =numero|cadena|caracter|boolean
%%


/*------------ Globales ---------*/
<YYINITIAL>"inicio" {
                        AST.add(new Instruccion("inicio",yytext(),yyline));
                        return new Symbol(Simbolos.inicio,yycolumn,yyline,yytext());
                     }
<YYINITIAL>"fin" {
                     AST.add(new Instruccion("fin",yytext(),yyline));
                     return new Symbol(Simbolos.fin,yycolumn,yyline,yytext());
                     }
/*------------ declaracion variables -----------*/
<YYINITIAL>"ingresar" {
                     AST.add(new Instruccion("ingresar",yytext(),yyline));
                     return new Symbol(Simbolos.ingresar,yycolumn,yyline,yytext());
                     }
<YYINITIAL>"como" {
                     AST.add(new Instruccion("como",yytext(),yyline));
                     return new Symbol(Simbolos.como,yycolumn,yyline,yytext());
                     }
<YYINITIAL>"con_valor" {
                     AST.add(new Instruccion("con_valor",yytext(),yyline));
                     return new Symbol(Simbolos.con_valor,yycolumn,yyline,yytext());
                     }
/*------------ Asignacion de variables ---------*/
<YYINITIAL>"->" {
                     AST.add(new Instruccion("asignarValor",yytext(),yyline));
                     return new Symbol(Simbolos.asignarValor,yycolumn,yyline,yytext());
                     }
/*------------ Declaracion para if -------------*/
<YYINITIAL>"si" {
AST.add(new Instruccion("si",yytext(),yyline));
                return new Symbol(Simbolos.si,yycolumn,yyline,yytext());
             }
<YYINITIAL>"o_si" {
AST.add(new Instruccion("o_si",yytext(),yyline));
                return new Symbol(Simbolos.o_si,yycolumn,yyline,yytext());
             }
<YYINITIAL>"de_lo_contrario" {
AST.add(new Instruccion("de_lo_contrario",yytext(),yyline));
                return new Symbol(Simbolos.de_lo_contrario,yycolumn,yyline,yytext());
             }
<YYINITIAL>"fin_si" {
AST.add(new Instruccion("fi_si",yytext(),yyline));
                return new Symbol(Simbolos.fi_si,yycolumn,yyline,yytext());
             }

/*------------ Declaracion para Mientras -------*/
<YYINITIAL>"mientras" {
AST.add(new Instruccion("mientras",yytext(),yyline));
                     return new Symbol(Simbolos.mientras,yycolumn,yyline,yytext());
                     }
<YYINITIAL>"hacer" {
AST.add(new Instruccion("hacer",yytext(),yyline));
                     return new Symbol(Simbolos.hacer,yycolumn,yyline,yytext());
                     }
<YYINITIAL>"fin_mientras" {
AST.add(new Instruccion("fmientras",yytext(),yyline));
                     return new Symbol(Simbolos.fmientras,yycolumn,yyline,yytext());
                     }
/*------------ Operaciones Aritmeticas ---------*/
<YYINITIAL>"?" {
AST.add(new Instruccion("inteC",yytext(),yyline));
                     return new Symbol(Simbolos.inteC,yycolumn,yyline,yytext());
                     }
<YYINITIAL>"¿" {
AST.add(new Instruccion("inteA",yytext(),yyline));
                     return new Symbol(Simbolos.inteA,yycolumn,yyline,yytext());
                     }
<YYINITIAL>"+" {
AST.add(new Instruccion("mas",yytext(),yyline));
                     return new Symbol(Simbolos.mas,yycolumn,yyline,yytext());
                     }
<YYINITIAL>"-" {
AST.add(new Instruccion("menos",yytext(),yyline));
                     return new Symbol(Simbolos.menos,yycolumn,yyline,yytext());
                     }
<YYINITIAL>"*" {
AST.add(new Instruccion("por",yytext(),yyline));
                     return new Symbol(Simbolos.por,yycolumn,yyline,yytext());
                     }
<YYINITIAL>"/" {
AST.add(new Instruccion("division",yytext(),yyline));
                     return new Symbol(Simbolos.division,yycolumn,yyline,yytext());
                     }
<YYINITIAL>"potencia" {
AST.add(new Instruccion("potencia",yytext(),yyline));
                     return new Symbol(Simbolos.potencia,yycolumn,yyline,yytext());
                     }
<YYINITIAL>"mod" {
AST.add(new Instruccion("mod",yytext(),yyline));
                     return new Symbol(Simbolos.mod,yycolumn,yyline,yytext());
                     }
<YYINITIAL>"(" {
AST.add(new Instruccion("parA",yytext(),yyline));
                     return new Symbol(Simbolos.parA,yycolumn,yyline,yytext());
                     }
<YYINITIAL>")" {
AST.add(new Instruccion("parC",yytext(),yyline));
                     return new Symbol(Simbolos.parC,yycolumn,yyline,yytext());
                     }
<YYINITIAL>"[" {
AST.add(new Instruccion("corA",yytext(),yyline));
                     return new Symbol(Simbolos.corA,yycolumn,yyline,yytext());
                     }
<YYINITIAL>"]" {
AST.add(new Instruccion("corC",yytext(),yyline));
                     return new Symbol(Simbolos.corC,yycolumn,yyline,yytext());
                     }
/*------------ TIPO relacional -----------*/
<YYINITIAL>"mayor" {
AST.add(new Instruccion("mayorQue",yytext(),yyline));
                    return new Symbol(Simbolos.mayorQue,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"menor" {AST.add(new Instruccion("menorQue",yytext(),yyline));
                    return new Symbol(Simbolos.menorQue,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"mayor_o_igual" {AST.add(new Instruccion("mayorOIgual",yytext(),yyline));
                    return new Symbol(Simbolos.mayorOIgual,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"menor_o_igual" {AST.add(new Instruccion("menorOIgual",yytext(),yyline));
                    return new Symbol(Simbolos.menorOIgual,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"es_igual" {AST.add(new Instruccion("igualLogico",yytext(),yyline));
                    return new Symbol(Simbolos.igualLogico,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"es_diferente" {AST.add(new Instruccion("diferente",yytext(),yyline));
                    return new Symbol(Simbolos.diferente,yycolumn,yyline,yytext());
                    }

/*------------ Tipo Logica ------------*/
<YYINITIAL>"or" {AST.add(new Instruccion("or",yytext(),yyline));
                    return new Symbol(Simbolos.or,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"and" {AST.add(new Instruccion("and",yytext(),yyline));
                    return new Symbol(Simbolos.and,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"not" {AST.add(new Instruccion("not",yytext(),yyline));
                    return new Symbol(Simbolos.not,yycolumn,yyline,yytext());
                    }

/*------------ Tipos de datos ---------*/
<YYINITIAL>"," {AST.add(new Instruccion("coma",yytext(),yyline));
                     return new Symbol(Simbolos.coma,yycolumn,yyline,yytext());
                     }
<YYINITIAL>";" {AST.add(new Instruccion("ptcoma",yytext(),yyline));
                     return new Symbol(Simbolos.ptcoma,yycolumn,yyline,yytext());
                     }

<YYINITIAL>{numeroDecimal} {AST.add(new Instruccion("numero",yytext(),yyline));
                     return new Symbol(Simbolos.numero,yycolumn,yyline,yytext());
                     }
<YYINITIAL>{numeroEntero} {AST.add(new Instruccion("numero",yytext(),yyline));
                     return new Symbol(Simbolos.numero,yycolumn,yyline,yytext());
                     }
<YYINITIAL>{cadena} {AST.add(new Instruccion("cadena",yytext(),yyline));
                    return new Symbol(Simbolos.cadena,yycolumn,yyline,yytext());
                    }
<YYINITIAL>{caracter} {AST.add(new Instruccion("caracter",yytext(),yyline));
                    return new Symbol(Simbolos.caracter,yycolumn,yyline,yytext());
                    }
<YYINITIAL>{comentario_lineal} {
                    }
<YYINITIAL>{comentario_multilineal} {
                    }
<YYINITIAL>{variables} {AST.add(new Instruccion("variables",yytext(),yyline));
                    return new Symbol(Simbolos.variables,yycolumn,yyline,yytext());
                    }
<YYINITIAL>{booleanR} {AST.add(new Instruccion("booleanR",yytext(),yyline));
                    return new Symbol(Simbolos.booleanR,yycolumn,yyline,yytext());
                    }
<YYINITIAL>{tipoDato} {AST.add(new Instruccion("tipoDato",yytext(),yyline));
                    return new Symbol(Simbolos.tipoDato,yycolumn,yyline,yytext());
                    }
/*-------------- ciclo for ------------*/
<YYINITIAL>"para" {AST.add(new Instruccion("para",yytext(),yyline));
                    return new Symbol(Simbolos.para,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"hasta" {AST.add(new Instruccion("hasta",yytext(),yyline));
                    return new Symbol(Simbolos.hasta,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"con" {AST.add(new Instruccion("con",yytext(),yyline));
                    return new Symbol(Simbolos.con,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"incremental" {AST.add(new Instruccion("incremental",yytext(),yyline));
                    return new Symbol(Simbolos.incremental,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"fin_para" {AST.add(new Instruccion("fpara",yytext(),yyline));
                    return new Symbol(Simbolos.fpara,yycolumn,yyline,yytext());
                    }
/* -------------- ciclo do while ----------*/
<YYINITIAL>"repetir" {AST.add(new Instruccion("repetir",yytext(),yyline));
                    return new Symbol(Simbolos.repetir,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"hasta_que" {AST.add(new Instruccion("hasta_que",yytext(),yyline));
                    return new Symbol(Simbolos.hasta_que,yycolumn,yyline,yytext());
                    }
/* ----- retorno ---- */
<YYINITIAL>"retornar" {AST.add(new Instruccion("retornar",yytext(),yyline));
                    return new Symbol(Simbolos.retornar,yycolumn,yyline,yytext());
                    }
/*------- case -----*/
<YYINITIAL>"segun" {AST.add(new Instruccion("segun",yytext(),yyline));
                    return new Symbol(Simbolos.segun,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"entonces" {AST.add(new Instruccion("entonces",yytext(),yyline));
                    return new Symbol(Simbolos.entonces,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"fin_segun" {AST.add(new Instruccion("fin_segun",yytext(),yyline));
                    return new Symbol(Simbolos.fin_segun,yycolumn,yyline,yytext());
                    }
/* -------- metodo ---------*/
<YYINITIAL>"metodo" {AST.add(new Instruccion("metodo",yytext(),yyline));
                    return new Symbol(Simbolos.metodo,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"con_parametros" {AST.add(new Instruccion("con_parametros",yytext(),yyline));
                    return new Symbol(Simbolos.con_parametros,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"fin_metodo" {AST.add(new Instruccion("fin_metodo",yytext(),yyline));
                    return new Symbol(Simbolos.fin_metodo,yycolumn,yyline,yytext());
                    }
/* ------- funcion ----- */
<YYINITIAL>"funcion" {AST.add(new Instruccion("funcion",yytext(),yyline));
                    return new Symbol(Simbolos.funcion,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"fin_funcion" {AST.add(new Instruccion("fin_funcion",yytext(),yyline));
                    return new Symbol(Simbolos.fin_funcion,yycolumn,yyline,yytext());
                    }
/*---------- imprimir, ejecutar --------*/
<YYINITIAL>"imprimir" {AST.add(new Instruccion("imprimir",yytext(),yyline));
                    return new Symbol(Simbolos.imprimir,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"imprimir_nl" {AST.add(new Instruccion("imprimir_nl",yytext(),yyline));
                    return new Symbol(Simbolos.imprimir_nl,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"ejecutar" {AST.add(new Instruccion("ejecutar",yytext(),yyline));
                    return new Symbol(Simbolos.ejecutar,yycolumn,yyline,yytext());
                    }
[ \t\r\n\f] {}

.   {
     TError datos = new TError(yytext(), yyline, yycolumn, "Error Léxico", "Simbolo no existe en el lenguaje");
     TablaEL.add(datos);
}