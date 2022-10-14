%lex

%options case-insensitive

%%
\s+                                 //Espacios en Blanco
"//".*                              //Comentario unilineal
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/] //Comentario de Varias lineas

//tipos de variables e identificadores
'int'                       return 'int';
'double'                    return 'double';
'boolean'                   return 'boolean';
'char'                      return 'char';
'string'                    return 'string';
([a-zA-Z])[a-zA-Z0-9_]*     return 'id';

//Valores
[0-9]+("."[0-9]+)?\b  	    return 'numero';
[0-9]+\b				    return 'numero';
\"[^\"]*\"				    { yytext = yytext.substr(1,yyleng-2); return 'cadena'; }
\'([^\"]|\\[a-zA-Z])?\'     { yytext = yytext.substr(1,yyleng-2); return 'caracter'; }
'true'                      return 'verdadero';
'false'                     return 'falso';

//simbolos
'*'                         return 'por';
'/'                         return 'dividido';
'^'                         return 'potencia';
'%'                         return 'mod';
';'                         return 'punto_coma';
','                         return 'coma';
'>='                        return 'mayor_igual';
'<='                        return 'menor_igual';
'=='                        return 'igual_logico';
'!='                        return 'diferente';
'='                         return 'igual';
'>'                         return 'mayor';
'<'                         return 'menor';
'!'                         return 'no';
'&&'                        return 'and';
'||'                        return 'or';
'('                         return 'par_izq';
')'                         return 'par_der';
'?'                         return 'interrogacion';
':'                         return 'dos_puntos';
'++'                        return 'incremento'
'--'                        return 'decremento'
'+'                         return 'mas';
'-'                         return 'menos';
'['                         return 'cor_izq';
']'                         return 'cor_der';
'{'                         return 'llave_izq';
'}'                         return 'llave_der';

// palabras reservadas
'new'                       return 'new';
<<EOF>>                     return 'EOF';
.                           {console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column);}

/lex

%left 'interrogacion'
%left 'or'
%left 'and'
%left 'no'
%left 'mayor' 'menor' 'mayor_igual' 'menor_igual' 'igual_logico' 'diferente'
%left 'mas' 'menos'
%left 'por' 'dividido' 'mod'
%left UMENOS
%left 'potencia'
%left 'incremento' 'decremento'

%start INI

%%
INI
    :INSTRUCCIONES EOF
;
INSTRUCCIONES
    :INSTRUCCIONES INSTRUCCION
    |INSTRUCCION
;
INSTRUCCION
    : DECLARACION
    | ASIGNACIONES
    | INCREMENTO_DECREMENTO
    | VECTORES
    | par_izq TIPOVARIABLE par_der EXP
    | error { console.error('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column); }
;

TIPOVARIABLE
    : int
    | double
    | boolean
    | char
    | string
;
INCREMENTO_DECREMENTO
    : id incremento punto_coma
    | id decremento punto_coma 
;
ID
    :ID coma id
    |id
;
DECLARACION
    : TIPOVARIABLE ID punto_coma
    | TIPOVARIABLE ID igual EXP punto_coma
;
VECTORES
    : TIPOVARIABLE cor_izq cor_der id igual new TIPOVARIABLE cor_izq EXP cor_der punto_coma
    | TIPOVARIABLE cor_izq cor_der cor_izq cor_der id igual new TIPOVARIABLE cor_izq EXP cor_der cor_izq EXP cor_der punto_coma
    | TIPOVARIABLE cor_izq cor_der id igual cor_izq LISTA_VECTOR cor_der punto_coma
    | TIPOVARIABLE cor_izq cor_der cor_izq cor_der id igual cor_izq cor_izq LISTA_VECTOR cor_der coma cor_izq LISTA_VECTOR cor_der cor_der punto_coma
;
LISTA_VECTOR
    : LISTA_VECTOR coma EXP
    | EXP
;
ASIGNACIONES
    : ID igual EXP punto_coma
;
EXP
    //operaciones Aritmericas
    : menos EXP %prec UMENOS
    | EXP mas EXP
    | EXP menos EXP
    | EXP por EXP
    | EXP dividido EXP
    | EXP potencia EXP
    | EXP mod EXP

    //operaciones Logicas
    | EXP mayor EXP
    | EXP menor EXP
    | EXP mayor_igual EXP
    | EXP menor_igual EXP
    | EXP igual_logico EXP
    | EXP diferente EXP
    //operador ternario
    | EXP interrogacion EXP dos_puntos EXP
    //operaciones relacionales
    | EXP or EXP
    | EXP and EXP
    | no EXP
    //agrupacion
    | par_izq EXP par_der
    //valores Primitivos
    | numero
    | cadena
    | caracter
    | verdadero
    | false
    | id
;