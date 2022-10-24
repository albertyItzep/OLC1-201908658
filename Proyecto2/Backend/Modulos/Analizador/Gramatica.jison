%{
    // Expresiones
    const { Aritmericas } = require('../Arbol/Expresiones/Aritmetica.ts');
    const { Logica } = require('../Arbol/Expresiones/Logica.ts');
    const { Literal } = require('../Arbol/Expresiones/Literal.ts'); 
    const { Relacion } = require('../Arbol/Expresiones/Relacion.ts');
    const { Parametro } = require('../Arbol/Expresiones/Parametro.ts');
    const { OperadorTernario } = require('../Arbol/Expresiones/OperadorTernario.ts');
    // sentencias estructurales
    const { Print } = require('../Arbol/Sentencias/Print.ts');
    const { VectorChar } = require('../Arbol/Sentencias/VectorChar.ts');
    const { Funcion } = require('../Arbol/Sentencias/Funcion.ts');
    const { Metodo } = require('../Arbol/Sentencias/Metodo.ts');
    const { Breaks, ContinueS, ReturnS } = require('../Arbol/Sentencias/Breaks.ts');
    const { WhileS } = require('../Arbol/Sentencias/WhileS.ts');
    const { DoWhile } = require('../Arbol/Sentencias/DoWhile.ts');
    const { DoUntil } = require('../Arbol/Sentencias/DoUntil.ts');
    const { CicloFor } = require('../Arbol/Sentencias/CicloFor.ts');
    const { Declaracion } = require('../Arbol/Sentencias/Declaracion.ts');
    const { Asignacion } = require('../Arbol/Sentencias/Asignacion.ts');
    const { Casteo } = require('../Arbol/Sentencias/Casteo.ts');
    const { ToUpper } = require('../Arbol/Sentencias/ToUpper.ts');
    const { Round } = require('../Arbol/Sentencias/Round.ts');
    const { ToLower } = require('../Arbol/Sentencias/ToLower.ts');

    const { Pop } = require('../Arbol/Sentencias/Pop.ts');
    const { Push } = require('../Arbol/Sentencias/Push.ts');
    const { Run } = require('../Arbol/Sentencias/Run.ts');

    const { TypeOf } = require('../Arbol/Sentencias/TypeOf.ts');
    const { ToCharArray } = require('../Arbol/Sentencias/ToCharArray.ts');
    const { ToString } = require('../Arbol/Sentencias/ToString.ts');
    
    const { Length } = require('../Arbol/Sentencias/Length.ts');
    const { IncrementoDecremento } = require('../Arbol/Sentencias/IncrementoDecremento.ts');
    const { AccesoVectorX } = require('../Arbol/Sentencias/AccesoVectorX.ts');
    const { AccesoVectorXY } = require('../Arbol/Sentencias/AccesoVectorXY.ts');
    const { LLamadaFuncion } = require('../Arbol/Sentencias/LLamadaFuncion.ts');
    const { VectorX , VectorXY } = require('../Arbol/Sentencias/Vector.ts');
    const { ModificarVectorX, ModificarVectorXY } = require('../Arbol/Sentencias/ModificarVectorX.ts');
    const { IfContainer, If, Else, Elif } = require('../Arbol/Sentencias/If.ts');
    const { Swith, Case, Default } = require('../Arbol/Sentencias/Swich.ts');

    const { Singleton } = require('../Instrucciones/Singleton.ts');
    const { Errores } = require('../Instrucciones/Errores.ts');

    %}
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
.                           {
                                let s = Singleton.getInstance();
                                s.add_Error(new Errores('Lexico','Caracter Desconocido',yylineno+1,yylloc.first_column+1));
}

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
    :INSTRUCCIONES EOF { return $1; }
;
INSTRUCCIONES
    :INSTRUCCIONES INSTRUCCION { $1.push($2); $$ =$1; }
    |INSTRUCCION { $$ = [$1] }
;
INSTRUCCION
    : DECLARACION               { $$ = $1; }
    | ASIGNACIONES              { $$ = $1; }
    | INCREMENTO_DECREMENTO     { $$ = $1; }
    | VECTORES                  { $$ = $1; }
    | INSTRUCCION_IF            { $$ = $1; }
    | SWITCH                    { $$ = $1; }
    | WHILE                     { $$ = $1; }
    | FOR                       { $$ = $1; }
    | BREAK                     { $$ = $1; }
    | DOWHILE                   { $$ = $1; }
    | RETURN                    { $$ = $1; }
    | DOUNTIL                   { $$ = $1; }
    | MODIFICARVECTOR           { $$ = $1; }
    | CONTINUE                  { $$ = $1; }
    | FUNCION                   { $$ = $1; }
    | METODO                    { $$ = $1; }
    | PRINT                     { $$ = $1; }
    | PRINTLN                   { $$ = $1; }
    | LLAMADA_FUNCION           { $$ = $1; }
    | TOLOWER                   { $$ = $1; }
    | TOUPPER                   { $$ = $1; }
    | ROUND                     { $$ = $1; }
    | LENGTH                    { $$ = $1; }
    | PUSH                      { $$ = $1; }
    | POP                       { $$ = $1; }
    | RUN                       { $$ = $1; }
    | error {                   let s = Singleton.getInstance();
                                s.add_Error(new Errores('Sintactico','Token Inesperado',@1.first_line,@1.first_column)); }
;
//funciones nativas
LENGTH
    : length par_izq EXP par_der punto_coma             { $$ = new Length($3, @1.first_line,@1.first_column); }
   // | length par_izq ACCESOVECTORES par_der punto_coma
;
LENGTH_EXP
    : length par_izq EXP par_der                        { $$ = new Length($3, @1.first_line,@1.first_column); }
   // | length par_izq ACCESOVECTORES par_der
;
TYPEOF
    : typeof par_izq EXP par_der     { $$ = new TypeOf($3, @1.first_line,@1.first_column); }
;
TOSTRING
    : tostring par_izq EXP par_der   { $$ = new ToString($3, @1.first_line,@1.first_column); }
;
TOCHARARRAY
    : tochararray par_izq cadena par_der    { $$ = new ToCharArray($3, @1.first_line,@1.first_column); }
;
PUSH
    : id punto push par_izq EXP par_der punto_coma  { $$ = new Push($1,$5, @1.first_line,@1.first_column); }
;
POP
    : id punto pop par_izq par_der punto_coma   { $$ = new Pop($1, @1.first_line,@1.first_column); }
;
// RUN
RUN
    : run id par_izq PARAMETROS_LLAMADA par_der punto_coma  { $$ = new Run( $2,$4, @1.first_line,@1.first_column); }
    | run id par_izq par_der punto_coma     { $$ = new Run( $2,[], @1.first_line,@1.first_column); }
;
//funcion tolower
TOLOWER
    : tolower par_izq EXP par_der punto_coma    { $$ = new ToLower($3, @1.first_line,@1.first_column); }
;
TOLOWER_EXP
    : tolower par_izq EXP par_der               { $$ = new ToLower($3, @1.first_line,@1.first_column); }
;
//FUNCION TOUPPER
TOUPPER
    : toupper par_izq EXP par_der punto_coma    { $$ = new ToUpper($3, @1.first_line,@1.first_column); }
;
TOUPPER_EXP
    : toupper par_izq EXP par_der               { $$ = new ToUpper($3, @1.first_line,@1.first_column); }
;
// ROUND
ROUND
    : round par_izq EXP par_der punto_coma      { $$ = new Round($3, @1.first_line,@1.first_column); }
;
ROUND_EXP
    : round par_izq EXP par_der                 { $$ = new Round($3, @1.first_line,@1.first_column); }
;
//sentencia Print 
PRINT
    : print par_izq EXP par_der punto_coma      {$$ = new Print($3,'PRINT', @1.first_line,@1.first_column);}
;
PRINTLN
    : println par_izq EXP par_der punto_coma    {$$ = new Print($3,'PRINTLN', @1.first_line,@1.first_column);}
;
//sentencia Funcion
FUNCION
    : id par_izq par_der dos_puntos TIPOVARIABLE llave_izq INSTRUCCIONES llave_der                      { $$ = new Funcion($1,[],$5,$7,@1.first_line,@1.first_column); }
    | id par_izq LISTA_PARAMETROS par_der dos_puntos TIPOVARIABLE llave_izq INSTRUCCIONES llave_der     { $$ = new Funcion($1,$3,$6,$8,@1.first_line,@1.first_column); }
;
// Sentencia Metodo
METODO
    : id par_izq par_der dos_puntos void llave_izq INSTRUCCIONES llave_der                      { $$ = new Metodo($1,[],$7,@1.first_line,@1.first_column); }
    | id par_izq LISTA_PARAMETROS par_der dos_puntos void llave_izq INSTRUCCIONES llave_der     { $$ = new Metodo($1,$3,$8,@1.first_line,@1.first_column); }
    | id par_izq par_der llave_izq INSTRUCCIONES llave_der                                      { $$ = new Metodo($1,[],$5,@1.first_line,@1.first_column); }
    | id par_izq LISTA_PARAMETROS par_der llave_izq INSTRUCCIONES llave_der                     { $$ = new Metodo($1,$3,$6,@1.first_line,@1.first_column); }
;
LISTA_PARAMETROS
    : LISTA_PARAMETROS coma PARAMETRO  { $1.push($3); $$ = $1;}
    | PARAMETRO     { $$ = [$1] }
;
PARAMETRO
    : TIPOVARIABLE id       { $$ = new Parametro($1, $2,@1.first_line,@1.first_column); }
;
// Sentencia llamada a Funcion o metodo
LLAMADA_FUNCION
    : id par_izq PARAMETROS_LLAMADA par_der punto_coma      { $$ = new LLamadaFuncion($1,$3,@1.first_line,@1.first_column); }
    | id par_izq par_der punto_coma                         { $$ = new LLamadaFuncion($1,[],@1.first_line,@1.first_column); }
;
LLAMADA_FUNCION_EXP
    : id par_izq PARAMETROS_LLAMADA par_der                 { $$ = new LLamadaFuncion($1,$3,@1.first_line,@1.first_column); }
    | id par_izq par_der                                    { $$ = new LLamadaFuncion($1,[],@1.first_line,@1.first_column); }
;
PARAMETROS_LLAMADA
    : PARAMETROS_LLAMADA coma EXP { $1.push($3); $$ = $1;}
    | EXP { $$ = [$1] }
;
//Sentencia For
FOR
    : for par_izq DECLARACION EXP punto_coma INCREMENTO_DECREMENTO_FOR par_der llave_izq INSTRUCCIONES llave_der    { $$ = new CicloFor($3,$4,$6,$9,@1.first_line,@1.first_column); }
    | for par_izq ASIGNACIONES EXP punto_coma INCREMENTO_DECREMENTO_FOR par_der llave_izq INSTRUCCIONES llave_der   { $$ = new CicloFor($3,$4,$6,$9,@1.first_line,@1.first_column); }
;
//Sentencia while
WHILE
    : while par_izq EXP par_der llave_izq INSTRUCCIONES llave_der { $$ = new WhileS($3,$6,@1.first_line,@1.first_column); }
;
// Sentencia DO WHile
DOWHILE
    : do llave_izq INSTRUCCIONES llave_der while par_izq EXP par_der punto_coma     { $$ = new DoWhile($3,$7,@1.first_line,@1.first_column); }
;
// sentencia DO UNTIL
DOUNTIL
    : do llave_izq INSTRUCCIONES llave_der until par_izq EXP par_der punto_coma     { $$ = new DoUntil($3,$7,@1.first_line,@1.first_column); }
;
//sentencia if
INSTRUCCION_IF
    : IF                        { $$ = new IfContainer($1,null,null,@1.first_line,@1.first_column);}
    | IF ELSE                   { $$ = new IfContainer($1,null,$2,@1.first_line,@1.first_column);}
    | IF LISTA_ELIF             { $$ = new IfContainer($1,$2,null,@1.first_line,@1.first_column);}
    | IF LISTA_ELIF ELSE        { $$ = new IfContainer($1,$3,$2,@1.first_line,@1.first_column);}
;
IF
    //if { instrucciones }
    : if par_izq EXP par_der llave_izq INSTRUCCIONES llave_der  { $$ = new If($3,$6,@1.first_line,@1.first_column);}
    | if par_izq EXP par_der llave_izq llave_der                { $$ = new If($3,null,@1.first_line,@1.first_column);}
;
ELSE
    : else llave_izq INSTRUCCIONES llave_der    { $$ = new Else($3,@1.first_line,@1.first_column);}
    | else llave_izq llave_der                  { $$ = new Else(null,@1.first_line,@1.first_column);}
;
ELIF
    : elif par_izq EXP par_der llave_izq INSTRUCCIONES llave_der    { $$ = new Elif($3,$6,@1.first_line,@1.first_column);}
    | elif par_izq EXP par_der llave_izq llave_der                  { $$ = new Elif($3,null,@1.first_line,@1.first_column);}
;
LISTA_ELIF
    : LISTA_ELIF ELIF       { $1.push($2); $$ = $1 }
    | ELIF                  { $$ = [$1]; }
;
// sentencia SWITCH
SWITCH
    : switch par_izq EXP par_der llave_izq LISTA_CASE DEFAULT llave_der     { $$ = new Swith($3,$6,$7,@1.first_line,@1.first_column); }
    | switch par_izq EXP par_der llave_izq LISTA_CASE llave_der             { $$ = new Swith($3,$6,null,@1.first_line,@1.first_column); }
    | switch par_izq EXP par_der llave_izq DEFAULT llave_der                { $$ = new Swith($3,null,$7,@1.first_line,@1.first_column); }
;
LISTA_CASE
    : LISTA_CASE CASE {$1.push($2); $$ = $1; }
    | CASE {$$ = [$1] }
;
CASE
    : case EXP dos_puntos INSTRUCCIONES { $$ =  new Case($2,$4,@1.first_line,@1.first_column);}
;
DEFAULT
    : default dos_puntos INSTRUCCIONES  { $$ =  new Default($3,@1.first_line,@1.first_column);}
;
// sentencia break
BREAK
    : break punto_coma      { $$ = new Breaks(@1.first_line,@1.first_column); }
;
// sentencia continue
CONTINUE
    : continue punto_coma   { $$ = new ContinueS(@1.first_line,@1.first_column); }
;
// sentencia return
RETURN
    : return punto_coma         { $$ = new ReturnS(null,@1.first_line,@1.first_column); }
    | return EXP punto_coma     { $$ = new ReturnS($2,@1.first_line,@1.first_column); }
;
TIPOVARIABLE
    : int       {$$ = $1}
    | double    {$$ = $1}
    | boolean   {$$ = $1}
    | char      {$$ = $1}
    | string    {$$ = $1}
;
INCREMENTO_DECREMENTO
    : id incremento punto_coma { $$ = new IncrementoDecremento($1,$2,@1.first_line,@1.first_column);}
    | id decremento punto_coma { $$ = new IncrementoDecremento($1,$2,@1.first_line,@1.first_column);}
;
INCREMENTO_DECREMENTO_EXP
    : id incremento { $$ = new IncrementoDecremento($1,$2,@1.first_line,@1.first_column);}
    | id decremento { $$ = new IncrementoDecremento($1,$2,@1.first_line,@1.first_column);}
;
INCREMENTO_DECREMENTO_FOR
    : id incremento             { $$ = new IncrementoDecremento($1,$2,@1.first_line,@1.first_column);}
    | id decremento             { $$ = new IncrementoDecremento($1,$2,@1.first_line,@1.first_column);}
    | id igual EXP              { $$ = new IncrementoDecremento($1,$1,@1.first_line,@1.first_column , $3);}
;
ID
    :ID coma id { $$ = $1 + $2 + ' ' + $3}
    |id         { $$ = $1 }
;
DECLARACION
    : TIPOVARIABLE ID punto_coma                        { $$ = new Declaracion($1,$2,@1.first_line,@1.first_column);}
    | TIPOVARIABLE ID igual EXP punto_coma              { $$ = new Declaracion($1,$2,@1.first_line,@1.first_column, $4);}
    | TIPOVARIABLE ID igual CASTEOS punto_coma          { $$ = new Declaracion($1,$2,@1.first_line,@1.first_column, $4);}
    //| TIPOVARIABLE ID igual ACCESOVECTORES punto_coma   { $$ = new Declaracion($1,$2,@1.first_line,@1.first_column, $4);}
;
VECTORES
    //vectores int [] variable = new int[3];
    : TIPOVARIABLE cor_izq cor_der id igual PRnew TIPOVARIABLE cor_izq EXP cor_der punto_coma    {$$ = new VectorX($1,$4,@1.first_line,@1.first_column,$9,$7); }
    //vectores int [] variable = new int[(int)'3'];
    | TIPOVARIABLE cor_izq cor_der id igual PRnew TIPOVARIABLE cor_izq CASTEOS cor_der punto_coma {$$ = new VectorX($1,$4,@1.first_line,@1.first_column,$9,$7); }
    //vectores int [][] variable = new int[(int)'3'][5];
    | TIPOVARIABLE cor_izq cor_der cor_izq cor_der id igual PRnew TIPOVARIABLE cor_izq EXP cor_der cor_izq EXP cor_der punto_coma           { $$ = new VectorXY($1,$6,@1.first_line,@1.first_column,$11,$14,$9); }
    | TIPOVARIABLE cor_izq cor_der cor_izq cor_der id igual PRnew TIPOVARIABLE cor_izq CASTEOS cor_der cor_izq EXP cor_der punto_coma       { $$ = new VectorXY($1,$6,@1.first_line,@1.first_column,$11,$14,$9); }
    | TIPOVARIABLE cor_izq cor_der cor_izq cor_der id igual PRnew TIPOVARIABLE cor_izq EXP cor_der cor_izq CASTEOS cor_der punto_coma       { $$ = new VectorXY($1,$6,@1.first_line,@1.first_column,$11,$14,$9); }
    | TIPOVARIABLE cor_izq cor_der cor_izq cor_der id igual PRnew TIPOVARIABLE cor_izq CASTEOS cor_der cor_izq CASTEOS cor_der punto_coma   { $$ = new VectorXY($1,$6,@1.first_line,@1.first_column,$11,$14,$9); }
    //vectores int [] variable = {0,15.2,4};
    | TIPOVARIABLE cor_izq cor_der id igual llave_izq LISTA_VECTOR llave_der punto_coma {$$ = new VectorX($1,$4,@1.first_line,@1.first_column,null,null,$7); }
    //vectores int [][] variable = {{ 0 ,0},{0 , 0}};
    | TIPOVARIABLE cor_izq cor_der cor_izq cor_der id igual llave_izq llave_izq LISTA_VECTOR llave_der coma llave_izq LISTA_VECTOR llave_der llave_der punto_coma { $$ = new VectorXY($1,$6,@1.first_line,@1.first_column,null,null,null,$10,$14); }
    // TO CHAR
    | TIPOVARIABLE cor_izq cor_der id igual EXP punto_coma  { $$ = new VectorChar($1,$4,$6,@1.first_line,@1.first_column); }
;
ACCESOVECTORES
    : id cor_izq EXP cor_der                                { $$ = new AccesoVectorX($1,$3,@1.first_line,@1.first_column); }
    | id cor_izq CASTEOS cor_der                            { $$ = new AccesoVectorX($1,$3,@1.first_line,@1.first_column); }
    | id cor_izq EXP cor_der cor_izq EXP cor_der            { $$ = new AccesoVectorXY($1,$3,$6,@1.first_line,@1.first_column); }
    | id cor_izq CASTEOS cor_der cor_izq EXP cor_der        { $$ = new AccesoVectorXY($1,$3,$6,@1.first_line,@1.first_column); }
    | id cor_izq EXP cor_der cor_izq CASTEOS cor_der        { $$ = new AccesoVectorXY($1,$3,$6,@1.first_line,@1.first_column); }
    | id cor_izq CASTEOS cor_der cor_izq CASTEOS cor_der    { $$ = new AccesoVectorXY($1,$3,$6,@1.first_line,@1.first_column); }
;
MODIFICARVECTOR
    // vector1[3]= 56; || vector1[(int) '3'] = 56; || vector1[3]= (int) '56';
    : id cor_izq EXP cor_der igual EXP punto_coma               { $$ = new ModificarVectorX($1,$3,$6,@1.first_line,@1.first_column); }
    | id cor_izq CASTEOS cor_der igual EXP punto_coma           { $$ = new ModificarVectorX($1,$3,$6,@1.first_line,@1.first_column); }
    | id cor_izq EXP cor_der igual CASTEOS punto_coma           { $$ = new ModificarVectorX($1,$3,$6,@1.first_line,@1.first_column); }
    | id cor_izq CASTEOS cor_der igual CASTEOS punto_coma       { $$ = new ModificarVectorX($1,$3,$6,@1.first_line,@1.first_column); }
    // vector1[3][4]= 56;
    | id cor_izq EXP cor_der cor_izq EXP cor_der igual EXP punto_coma                   { $$ = new ModificarVectorXY($1,$3,$6,$9,@1.first_line,@1.first_column); }
    | id cor_izq CASTEOS cor_der cor_izq CASTEOS cor_der igual EXP punto_coma           { $$ = new ModificarVectorXY($1,$3,$6,$9,@1.first_line,@1.first_column); }
    | id cor_izq EXP cor_der cor_izq CASTEOS cor_der igual EXP punto_coma               { $$ = new ModificarVectorXY($1,$3,$6,$9,@1.first_line,@1.first_column); }
    | id cor_izq CASTEOS cor_der cor_izq EXP cor_der igual EXP punto_coma               { $$ = new ModificarVectorXY($1,$3,$6,$9,@1.first_line,@1.first_column); }
    | id cor_izq EXP cor_der cor_izq EXP cor_der igual CASTEOS punto_coma               { $$ = new ModificarVectorXY($1,$3,$6,$9,@1.first_line,@1.first_column); }
    | id cor_izq CASTEOS cor_der cor_izq CASTEOS cor_der igual CASTEOS punto_coma       { $$ = new ModificarVectorXY($1,$3,$6,$9,@1.first_line,@1.first_column); }
    | id cor_izq EXP cor_der cor_izq CASTEOS cor_der igual CASTEOS punto_coma           { $$ = new ModificarVectorXY($1,$3,$6,$9,@1.first_line,@1.first_column); }
    | id cor_izq CASTEOS cor_der cor_izq EXP cor_der igual CASTEOS punto_coma           { $$ = new ModificarVectorXY($1,$3,$6,$9,@1.first_line,@1.first_column); }
;
LISTA_VECTOR
    : LISTA_VECTOR coma EXP  { $1.push($3); $$ = $1}
    | EXP { $$ = [$1]; }
;
ASIGNACIONES
    : ID igual EXP punto_coma               { $$ = new Asignacion($1,$3,@1.first_line,@1.first_column); }
    | ID igual CASTEOS punto_coma           { $$ = new Asignacion($1,$3,@1.first_line,@1.first_column); }
   // | ID igual ACCESOVECTORES punto_coma    { $$ = new Asignacion($1,$3,@1.first_line,@1.first_column); }
;
CASTEOS
    : par_izq TIPOVARIABLE par_der EXP      { $$ = new Casteo($2,$4,@1.first_line,@1.first_column);}
;

EXP
    //operaciones Aritmericas
    : menos EXP %prec UMENOS { $$ = new Aritmericas($2,$2,'NEGATIVO',@1.first_line, @1.first_column);}
    | EXP mas EXP            { $$ = new Aritmericas($1,$3,'SUMA',@2.first_line, @2.first_column);}
    | EXP menos EXP          { $$ = new Aritmericas($1,$3,'RESTA',@2.first_line, @2.first_column);}
    | EXP por EXP            { $$ = new Aritmericas($1,$3,'MULTIPLICACION',@2.first_line, @2.first_column);}
    | EXP dividido EXP       { $$ = new Aritmericas($1,$3,'DIVISION',@2.first_line, @2.first_column);}
    | EXP potencia EXP       { $$ = new Aritmericas($1,$3,'POTENCIA',@2.first_line, @2.first_column);}
    | EXP mod EXP            { $$ = new Aritmericas($1,$3,'MODULO',@2.first_line, @2.first_column);}

    //operaciones Logicas
    | EXP mayor EXP         { $$ = new Logica($1,$3,'MAYOR',@2.first_line, @2.first_column);}
    | EXP menor EXP         { $$ = new Logica($1,$3,'MENOR',@2.first_line, @2.first_column);}
    | EXP mayor_igual EXP   { $$ = new Logica($1,$3,'MAYORIGUAL',@2.first_line, @2.first_column);}
    | EXP menor_igual EXP   { $$ = new Logica($1,$3,'MENORIGUAL',@2.first_line, @2.first_column);}
    | EXP igual_logico EXP  { $$ = new Logica($1,$3,'IGUAL',@2.first_line, @2.first_column);}
    | EXP diferente EXP     { $$ = new Logica($1,$3,'DIFERENTE',@2.first_line, @2.first_column);}
    //operador ternario
    | EXP interrogacion EXP dos_puntos EXP { $$ = new OperadorTernario($1,$3,$5,@1.first_line,@1.first_column);}
    //operaciones relacionales
    | EXP or EXP            { $$ = new Relacion($1,$3,'OR',@1.first_line,@1.first_column); }
    | EXP and EXP           { $$ = new Relacion($1,$3,'AND',@1.first_line,@1.first_column); }
    | no EXP                { $$ = new Relacion($1,$2,'NOT',@1.first_line,@1.first_column); }
    //agrupacion
    | par_izq EXP par_der   { $$ = $2; }
    //valores Primitivos
    | numero                    { $$ = new Literal($1,'NUMERO',@1.first_line, @1.first_column);}
    | cadena                    { $$ = new Literal($1,'CADENA',@1.first_line, @1.first_column);}
    | caracter                  { $$ = new Literal($1,'CARACTER',@1.first_line, @1.first_column);}
    | verdadero                 { $$ = new Literal($1,'BOOLEAN',@1.first_line, @1.first_column);}
    | falso                     { $$ = new Literal($1,'BOOLEAN',@1.first_line, @1.first_column);}
    | id                        { $$ = $1; }
    | ACCESOVECTORES            { $$ = $1}
    | LLAMADA_FUNCION_EXP       { $$ = $1}
    | TOLOWER_EXP               { $$ = $1}
    | TOUPPER_EXP               { $$ = $1}
    | ROUND_EXP                 { $$ = $1}
    | LENGTH_EXP                { $$ = $1}
    | TYPEOF                    { $$ = $1}
    | TOSTRING                  { $$ = $1}
    | TOCHARARRAY               { $$ = $1}
    | INCREMENTO_DECREMENTO_EXP { $$ = $1; }
;