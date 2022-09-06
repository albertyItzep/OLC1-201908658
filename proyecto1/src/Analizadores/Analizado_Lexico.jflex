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

numeroDecimal =  (\d+\s*\n*\t*\.\s*\n*\t*\d+\s*\n*\t*)
numeroEntero = (\d+\s*\n*\t*)
cadena = \".*?\"
caracter = (\'.*?\')|(\'$\{.*?\}')
comentario = \\\*\n*\s*\t*(.*?)\n*\s*\t*\*\\
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

/*------------ Operaciones Aritmeticas ---------*/
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
/*------------ TIPO relacional -----------*/
<YYINITIAL>"mayor" {
                    return new Symbol(Simbolos.mayorQue,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"menor" {
                    return new Symbol(Simbolos.menorQue,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"mayor o igual que" {
                    return new Symbol(Simbolos.mayorOIgual,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"menor o igual que" {
                    return new Symbol(Simbolos.menorOIgual,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"igual" {
                    return new Symbol(Simbolos.igualLogico,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"diferente" {
                    return new Symbol(Simbolos.diferente,yycolumn,yyline,yytext());
                    }
/*------------ Tipo Logica ------------*/
<YYINITIAL>"or" {
                    return new Symbol(Simbolos.or,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"and" {
                    return new Symbol(Simbolos.and,yycolumn,yyline,yytext());
                    }
<YYINITIAL>"not" {
                    return new Symbol(Simbolos.not,yycolumn,yyline,yytext());
                    }
/*------------ Tipos de datos ---------*/

<YYINITIAL>{numeroDecimal} {
                     System.out.println("Reconocio token:Numero lexema:"+yytext());
                     return new Symbol(Simbolos.numero,yycolumn,yyline,yytext());
                     }
<YYINITIAL>{numeroEntero} {
                     System.out.println("Reconocio token:Numero lexema:"+yytext());
                     return new Symbol(Simbolos.numero,yycolumn,yyline,yytext());
                     }
<YYINITIAL>{cadena} {
                    return new Symbol(Simbolos.cadena,yycolumn,yyline,yytext());
                    }
<YYINITIAL>{caracter} {
                    return new Symbol(Simbolos.caracter,yycolumn,yyline,yytext());
                    }
<YYINITIAL>{comentario} {
                    return new Symbol(Simbolos.comentario,yycolumn,yyline,yytext());
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