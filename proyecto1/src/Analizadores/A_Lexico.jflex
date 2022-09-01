package Analizadores;
import java_cup.runtime.*;
import java.util.LinkedList;
%%
    %public
    %class ALexico
    %cupsym sym
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
    variableNombre = \_.[^\W]*?\_
    booleanR = \n*\s*\t*true\n*\s*\t*|\n*\s*\t*false\n*\s*\t*

%%
//------> ER Simbolos
<YYINITIAL>"."{return new Symbol(sym.punto,yycolumn, yyline,yytext());}
<YYINITIAL>"="{return new Symbol(sym.igual,yycolumn, yyline,yytext());}
<YYINITIAL>"+"{return new Symbol(sym.suma,yycolumn, yyline,yytext());}
<YYINITIAL>"-"{return new Symbol(sym.menos,yycolumn, yyline,yytext());}
<YYINITIAL>"*"{return new Symbol(sym.por,yycolumn, yyline,yytext());}
<YYINITIAL>"/"{return new Symbol(sym.entre,yycolumn, yyline,yytext());}
<YYINITIAL>"("{return new Symbol(sym.para,yycolumn, yyline,yytext());}
<YYINITIAL>")"{return new Symbol(sym.parc,yycolumn, yyline,yytext());}
<YYINITIAL>">"{return new Symbol(sym.mayor,yycolumn, yyline,yytext());}
<YYINITIAL>"<"{return new Symbol(sym.menor,yycolumn, yyline,yytext());}
<YYINITIAL>"?"{return new Symbol(sym.inta,yycolumn, yyline,yytext());}
<YYINITIAL>"¿"{return new Symbol(sym.intc,yycolumn, yyline,yytext());}
<YYINITIAL>","{return new Symbol(sym.coma,yycolumn, yyline,yytext());}

//------> ER Palabras reservadas
<YYINITIAL>"potencia"{return new Symbol(sym.potencia,yycolumn, yyline,yytext());}
<YYINITIAL>"mod"{return new Symbol(sym.mod,yycolumn, yyline,yytext());}
<YYINITIAL>"inicio"{return new Symbol(sym.inicio,yycolumn, yyline,yytext());}
<YYINITIAL>"fin"{return new Symbol(sym.fin,yycolumn, yyline,yytext());}
<YYINITIAL>"ingresar"{return new Symbol(sym.ingresar,yycolumn, yyline,yytext());}
<YYINITIAL>"como"{return new Symbol(sym.como,yycolumn, yyline,yytext());}
<YYINITIAL>"con_valor"{return new Symbol(sym.cValor,yycolumn, yyline,yytext());}
<YYINITIAL>"si"{return new Symbol(sym.si,yycolumn, yyline,yytext());}
<YYINITIAL>"entonces"{return new Symbol(sym.entonces,yycolumn, yyline,yytext());}
<YYINITIAL>"de_lo_contrario"{return new Symbol(sym.dlContrario,yycolumn, yyline,yytext());}
<YYINITIAL>"fin_si"{return new Symbol(sym.fSi,yycolumn, yyline,yytext());}

<YYINITIAL>"o_si"{return new Symbol(sym.oSi,yycolumn, yyline,yytext());}
<YYINITIAL>"segun"{return new Symbol(sym.segun,yycolumn, yyline,yytext());}
<YYINITIAL>"fin_segun"{return new Symbol(sym.fSegun,yycolumn, yyline,yytext());}
<YYINITIAL>"para"{return new Symbol(sym.parar,yycolumn, yyline,yytext());}
<YYINITIAL>"hasta"{return new Symbol(sym.hasta,yycolumn, yyline,yytext());}
<YYINITIAL>"fin_para"{return new Symbol(sym.fpara,yycolumn, yyline,yytext());}
<YYINITIAL>"con"{return new Symbol(sym.con,yycolumn, yyline,yytext());}
<YYINITIAL>"incremental"{return new Symbol(sym.incremental,yycolumn, yyline,yytext());}
<YYINITIAL>"mientras"{return new Symbol(sym.mientras,yycolumn, yyline,yytext());}
<YYINITIAL>"fin_mientras"{return new Symbol(sym.fMientras,yycolumn, yyline,yytext());}
<YYINITIAL>"repetir"{return new Symbol(sym.repetir,yycolumn, yyline,yytext());}
<YYINITIAL>"hasta_que"{return new Symbol(sym.hQue,yycolumn, yyline,yytext());}
<YYINITIAL>"retornar"{return new Symbol(sym.retornar,yycolumn, yyline,yytext());}
<YYINITIAL>"metodo"{return new Symbol(sym.metodo,yycolumn, yyline,yytext());}
<YYINITIAL>"fin_metodo"{return new Symbol(sym.fMetodo,yycolumn, yyline,yytext());}
<YYINITIAL>"con_parametros"{return new Symbol(sym.cParametros,yycolumn, yyline,yytext());}
<YYINITIAL>"funcion"{return new Symbol(sym.funcion,yycolumn, yyline,yytext());}
<YYINITIAL>"fin_funcion"{return new Symbol(sym.fFuncion,yycolumn, yyline,yytext());}
<YYINITIAL>"ejecutar"{return new Symbol(sym.ejecutar,yycolumn, yyline,yytext());}
<YYINITIAL>"imprimir"{return new Symbol(sym.imprimir,yycolumn, yyline,yytext());}
<YYINITIAL>"imprimir_ln"{return new Symbol(sym.iLn,yycolumn, yyline,yytext());}
<YYINITIAL>"mayor"{return new Symbol(sym.mayorQue,yycolumn, yyline,yytext());}
<YYINITIAL>"menor"{return new Symbol(sym.menorQue,yycolumn, yyline,yytext());}
<YYINITIAL>"mayor_o_igual"{return new Symbol(sym.maOIQue,yycolumn, yyline,yytext());}
<YYINITIAL>"menor_o_igual"{return new Symbol(sym.meOIQue,yycolumn, yyline,yytext());}
<YYINITIAL>"es_igual"{return new Symbol(sym.eIgual,yycolumn, yyline,yytext());}
<YYINITIAL>"diferente"{return new Symbol(sym.eDiferente,yycolumn, yyline,yytext());}
<YYINITIAL>"or"{return new Symbol(sym.or,yycolumn, yyline,yytext());}
<YYINITIAL>"and"{return new Symbol(sym.and,yycolumn, yyline,yytext());}
<YYINITIAL>"not"{return new Symbol(sym.not,yycolumn, yyline,yytext());}

//------> ER Palabras designadas

<YYINITIAL>{numeroDecimal}{return new Symbol(sym.numero,yycolumn, yyline,yytext());}
<YYINITIAL>{numeroEntero}{return new Symbol(sym.numero,yycolumn, yyline,yytext());}
<YYINITIAL>{cadena}{return new Symbol(sym.cadena,yycolumn, yyline,yytext());}
<YYINITIAL>{caracter}{return new Symbol(sym.caracter,yycolumn, yyline,yytext());}
<YYINITIAL>{comentario}{return new Symbol(sym.comentario,yycolumn, yyline,yytext());}
<YYINITIAL>{variableNombre}{return new Symbol(sym.varNombre,variable, yyline,yytext());}
<YYINITIAL>{booleanR}{return new Symbol(sym.booleanR, yyline,yytext());}

. {
    System.out.println("Error Lexico : "+yytext()+
    "Linea"+(yyline+1)+" Columna "+yycolumn);
}