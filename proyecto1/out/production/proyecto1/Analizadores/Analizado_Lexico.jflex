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

/*------------ Tipos de datos ---------*/

<YYINITIAL>{numeroDecimal} {
                     System.out.println("Reconocio token:Numero lexema:"+yytext());
                     return new Symbol(Simbolos.numero,yycolumn,yyline,yytext());
                     }
<YYINITIAL>{numeroEntero} {
                     System.out.println("Reconocio token:Numero lexema:"+yytext());
                     return new Symbol(Simbolos.numero,yycolumn,yyline,yytext());
                     }

[ \t\r\n\f] {}

.   {
     System.out.println("Error Lexico : "+yytext()+"Linea"+(yyline+1)+" Columna "+yycolumn);
     TError datos = new TError(yytext(), yyline, yycolumn, "Error Léxico", "Simbolo no existe en el lenguaje");
     TablaEL.add(datos);
}
