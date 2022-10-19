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
//new
'new'                       return 'PRnew';
//if
'if'                        return 'if';
'else'                      return 'else';
'elif'                      return 'elif';
//case
'switch'                    return 'switch';
'case'                      return 'case';
'break'                     return 'break';
'default'                   return 'default';
'println'                   return 'println';
'print'                     return 'print';
'toLower'                   return 'tolower';
'toUpper'                   return 'toupper';
//continue y return
'continue'                  return 'continue';
'return'                    return 'return';
'length'                    return 'length';
'typeof'                    return 'typeof';
'tostring'                  return 'tostring';
'toCharArray'               return 'tochararray';
//for 
'for'                       return 'for';
//while, do y until
'while'                     return 'while';
'do'                        return 'do';
'until'                     return 'until';
'void'                      return 'void';
'round'                     return 'round';
'push'                      return 'push';
'run'                       return 'run';
'pop'                       return 'pop';

//Valores
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
'['                         return 'cor_izq';
']'                         return 'cor_der';
'{'                         return 'llave_izq';
'}'                         return 'llave_der';
'?'                         return 'interrogacion';
':'                         return 'dos_puntos';
'++'                        return 'incremento';
'--'                        return 'decremento';
'+'                         return 'mas';
'-'                         return 'menos';
'.'                         return 'punto'
// Expresiones regulares
([a-zA-Z])[a-zA-Z0-9_]*     return 'id';
[0-9]+("."[0-9]+)?\b  	    return 'numero';
[0-9]+\b				    return 'numero';
\"[^\"]*\"				    { yytext = yytext.substr(1,yyleng-2); return 'cadena'; }
\'([^\"]|\\[a-zA-Z])?\'     { yytext = yytext.substr(1,yyleng-2); return 'caracter'; }

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
    | INSTRUCCION_IF
    | SWITCH
    | WHILE
    | FOR
    | BREAK
    | DOWHILE
    | RETURN
    | DOUNTIL
    | MODIFICARVECTOR
    | CONTINUE
    | FUNCION
    | METODO
    | PRINT
    | PRINTLN
    | LLAMADA_FUNCION
    | TOLOWER
    | TOUPPER
    | ROUND
    | LENGTH
    | PUSH
    | POP
    | RUN
    | error { console.error('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column); }
;
//funciones nativas
LENGTH
    : length par_izq EXP par_der punto_coma
    | length par_izq ACCESOVECTORES par_der punto_coma
;
LENGTH_EXP
    : length par_izq EXP par_der
    | length par_izq ACCESOVECTORES par_der
;
TYPEOF
    : typeof par_izq EXP par_der
;
TOSTRING
    : tostring par_izq EXP par_der
;
TOCHARARRAY
    : tochararray par_izq cadena par_der
;
PUSH
    : id punto push par_izq EXP par_der punto_coma
;
POP
    : id punto pop par_izq par_der punto_coma
;
// RUN
RUN
    : run id par_izq PARAMETROS_LLAMADA par_der punto_coma
    | run id par_izq par_der punto_coma
;
//funcion tolower
TOLOWER
    : tolower par_izq EXP par_der punto_coma
;
TOLOWER_EXP
    : tolower par_izq EXP par_der
;
//FUNCION TOUPPER
TOUPPER
    : toupper par_izq EXP par_der punto_coma
;
TOUPPER_EXP
    : toupper par_izq EXP par_der
;
// ROUND
ROUND
    : round par_izq EXP par_der punto_coma
;
ROUND_EXP
    : round par_izq EXP par_der
;
//sentencia Print 
PRINT
    : print par_izq EXP par_der punto_coma
;
PRINTLN
    : println par_izq EXP par_der punto_coma
;
//sentencia Funcion
FUNCION
    : id par_izq par_der dos_puntos TIPOVARIABLE llave_izq INSTRUCCIONES llave_der
    | id par_izq LISTA_PARAMETROS par_der dos_puntos TIPOVARIABLE llave_izq INSTRUCCIONES llave_der
;
// Sentencia Metodo
METODO
    : id par_izq par_der dos_puntos void llave_izq INSTRUCCIONES llave_der
    | id par_izq LISTA_PARAMETROS par_der dos_puntos void llave_izq INSTRUCCIONES llave_der
    | id par_izq par_der llave_izq INSTRUCCIONES llave_der
    | id par_izq LISTA_PARAMETROS par_der llave_izq INSTRUCCIONES llave_der
;
LISTA_PARAMETROS
    : LISTA_PARAMETROS coma PARAMETRO
    | PARAMETRO
;
PARAMETRO
    : TIPOVARIABLE id
;
// Sentencia llamada a Funcion o metodo
LLAMADA_FUNCION
    : id par_izq PARAMETROS_LLAMADA par_der punto_coma
    | id par_izq par_der punto_coma
;
LLAMADA_FUNCION_EXP
    : id par_izq PARAMETROS_LLAMADA par_der
    | id par_izq par_der
;
PARAMETROS_LLAMADA
    : PARAMETROS_LLAMADA coma EXP
    | EXP
;
//Sentencia For
FOR
    : for par_izq DECLARACION EXP punto_coma INCREMENTO_DECREMENTO_FOR par_der llave_izq INSTRUCCIONES llave_der
    | for par_izq ASIGNACIONES EXP punto_coma INCREMENTO_DECREMENTO_FOR par_der llave_izq INSTRUCCIONES llave_der
;
//Sentencia while
WHILE
    : while par_izq EXP par_der llave_izq INSTRUCCIONES llave_der
;
// Sentencia DO WHile
DOWHILE
    : do llave_izq INSTRUCCIONES llave_der while par_izq EXP par_der punto_coma
;
// sentencia DO UNTIL
DOUNTIL
    : do llave_izq INSTRUCCIONES llave_der until par_izq EXP par_der punto_coma
;
//sentencia if
INSTRUCCION_IF
    : IF
    | IF ELSE
    | IF LISTA_ELIF
    | IF LISTA_ELIF ELSE

;
IF
    //if { instrucciones }
    : if par_izq EXP par_der llave_izq INSTRUCCIONES llave_der
    | if par_izq EXP par_der llave_izq llave_der
;
ELSE
    : else llave_izq INSTRUCCIONES llave_der
    | else llave_izq llave_der
;
ELIF
    : elif par_izq EXP par_der llave_izq INSTRUCCIONES llave_der
    | elif par_izq EXP par_der llave_izq llave_der
;
LISTA_ELIF
    : LISTA_ELIF ELIF
    | ELIF
;
// sentencia SWITCH
SWITCH
    : switch par_izq EXP par_der llave_izq LISTA_CASE DEFAULT llave_der
    | switch par_izq EXP par_der llave_izq LISTA_CASE llave_der
    | switch par_izq EXP par_der llave_izq DEFAULT llave_der
;
LISTA_CASE
    : LISTA_CASE CASE
    | CASE
;
CASE
    : case EXP dos_puntos INSTRUCCIONES 
;
DEFAULT
    : default dos_puntos INSTRUCCIONES
;
// sentencia break
BREAK
    : break punto_coma
;
// sentencia continue
CONTINUE
    : continue punto_coma
;
// sentencia return
RETURN
    : return punto_coma
    | return EXP punto_coma
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
INCREMENTO_DECREMENTO_FOR
    : id incremento
    | id decremento
    | id igual EXP
;
ID
    :ID coma id
    |id
;
DECLARACION
    : TIPOVARIABLE ID punto_coma
    | TIPOVARIABLE ID igual EXP punto_coma
    | TIPOVARIABLE ID igual CASTEOS punto_coma
    | TIPOVARIABLE ID igual ACCESOVECTORES punto_coma
;
VECTORES
    //vectores int [] variable = new int[3];
    : TIPOVARIABLE cor_izq cor_der id igual PRnew TIPOVARIABLE cor_izq EXP cor_der punto_coma
    //vectores int [] variable = new int[(int)'3'];
    | TIPOVARIABLE cor_izq cor_der id igual PRnew TIPOVARIABLE cor_izq CASTEOS cor_der punto_coma
    //vectores int [][] variable = new int[(int)'3'][5];
    | TIPOVARIABLE cor_izq cor_der cor_izq cor_der id igual PRnew TIPOVARIABLE cor_izq EXP cor_der cor_izq EXP cor_der punto_coma
    | TIPOVARIABLE cor_izq cor_der cor_izq cor_der id igual PRnew TIPOVARIABLE cor_izq CASTEOS cor_der cor_izq EXP cor_der punto_coma
    | TIPOVARIABLE cor_izq cor_der cor_izq cor_der id igual PRnew TIPOVARIABLE cor_izq EXP cor_der cor_izq CASTEOS cor_der punto_coma
    | TIPOVARIABLE cor_izq cor_der cor_izq cor_der id igual PRnew TIPOVARIABLE cor_izq CASTEOS cor_der cor_izq CASTEOS cor_der punto_coma
    //vectores int [] variable = {0,15.2,4};
    | TIPOVARIABLE cor_izq cor_der id igual llave_izq LISTA_VECTOR llave_der punto_coma
    //vectores int [][] variable = {{ 0 ,0},{0 , 0}};
    | TIPOVARIABLE cor_izq cor_der cor_izq cor_der id igual llave_izq llave_izq LISTA_VECTOR llave_der coma llave_izq LISTA_VECTOR llave_der llave_der punto_coma
    // TO CHAR
    | TIPOVARIABLE cor_izq cor_der id igual EXP punto_coma
;
ACCESOVECTORES
    : id cor_izq EXP cor_der
    | id cor_izq CASTEOS cor_der
    | id cor_izq EXP cor_der cor_izq EXP cor_der
    | id cor_izq CASTEOS cor_der cor_izq EXP cor_der
    | id cor_izq EXP cor_der cor_izq CASTEOS cor_der
    | id cor_izq CASTEOS cor_der cor_izq CASTEOS cor_der
;
MODIFICARVECTOR
    // vector1[3]= 56; || vector1[(int) '3'] = 56; || vector1[3]= (int) '56';
    : id cor_izq EXP cor_der igual EXP punto_coma
    | id cor_izq CASTEOS cor_der igual EXP punto_coma
    | id cor_izq EXP cor_der igual CASTEOS punto_coma
    | id cor_izq CASTEOS cor_der igual CASTEOS punto_coma
    // vector1[3][4]= 56;
    | id cor_izq EXP cor_der cor_izq EXP cor_der igual EXP punto_coma
    | id cor_izq CASTEOS cor_der cor_izq CASTEOS cor_der igual EXP punto_coma
    | id cor_izq EXP cor_der cor_izq CASTEOS cor_der igual EXP punto_coma
    | id cor_izq CASTEOS cor_der cor_izq EXP cor_der igual EXP punto_coma
    | id cor_izq EXP cor_der cor_izq EXP cor_der igual CASTEOS punto_coma
    | id cor_izq CASTEOS cor_der cor_izq CASTEOS cor_der igual CASTEOS punto_coma
    | id cor_izq EXP cor_der cor_izq CASTEOS cor_der igual CASTEOS punto_coma
    | id cor_izq CASTEOS cor_der cor_izq EXP cor_der igual CASTEOS punto_coma
;
LISTA_VECTOR
    : LISTA_VECTOR coma EXP
    | EXP 
;
ASIGNACIONES
    : ID igual EXP punto_coma
    | ID igual CASTEOS punto_coma
    | ID igual ACCESOVECTORES punto_coma
;
CASTEOS
    : par_izq TIPOVARIABLE par_der EXP
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
    | falso
    | id
    | LLAMADA_FUNCION_EXP
    | TOLOWER_EXP
    | TOUPPER_EXP
    | ROUND_EXP
    | LENGTH_EXP
    | TYPEOF
    | TOSTRING
    | TOCHARARRAY
;