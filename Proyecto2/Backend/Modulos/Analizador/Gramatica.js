/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var Gramatica = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,9],$V1=[1,8],$V2=[1,13],$V3=[1,14],$V4=[1,15],$V5=[1,16],$V6=[1,17],$V7=[1,12],$V8=[2,5,11,15,16,17,18,19,20],$V9=[1,25],$Va=[2,18],$Vb=[13,20,27],$Vc=[22,25,26],$Vd=[1,35],$Ve=[1,41],$Vf=[1,33],$Vg=[1,34],$Vh=[1,36],$Vi=[1,37],$Vj=[1,38],$Vk=[1,39],$Vl=[1,40],$Vm=[1,51],$Vn=[1,50],$Vo=[1,52],$Vp=[1,53],$Vq=[1,54],$Vr=[1,55],$Vs=[1,56],$Vt=[1,57],$Vu=[1,58],$Vv=[1,59],$Vw=[1,60],$Vx=[1,61],$Vy=[1,62],$Vz=[1,63],$VA=[1,64],$VB=[2,5,11,13,15,16,17,18,19,20,22,25,28,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46],$VC=[2,5,11,13,15,16,17,18,19,20,22,25,28,31,32,33,34,36,37,38,39,40,41,42,43,44,45,46],$VD=[2,5,11,13,15,16,17,18,19,20,22,25,28,43,44,45,46],$VE=[2,5,11,13,15,16,17,18,19,20,22,25,28,31,32,37,38,39,40,41,42,43,44,45,46],$VF=[2,5,11,13,15,16,17,18,19,20,22,25,28,37,38,39,40,41,42,43,44,45,46],$VG=[1,98],$VH=[25,28];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INI":3,"INSTRUCCIONES":4,"EOF":5,"INSTRUCCION":6,"DECLARACION":7,"ASIGNACIONES":8,"INCREMENTO_DECREMENTO":9,"VECTORES":10,"par_izq":11,"TIPOVARIABLE":12,"par_der":13,"EXP":14,"int":15,"double":16,"boolean":17,"char":18,"string":19,"id":20,"incremento":21,"punto_coma":22,"decremento":23,"ID":24,"coma":25,"igual":26,"cor_izq":27,"cor_der":28,"new":29,"LISTA_VECTOR":30,"menos":31,"mas":32,"por":33,"dividido":34,"potencia":35,"mod":36,"mayor":37,"menor":38,"mayor_igual":39,"menor_igual":40,"igual_logico":41,"diferente":42,"interrogacion":43,"dos_puntos":44,"or":45,"and":46,"no":47,"numero":48,"cadena":49,"caracter":50,"verdadero":51,"false":52,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",11:"par_izq",13:"par_der",15:"int",16:"double",17:"boolean",18:"char",19:"string",20:"id",21:"incremento",22:"punto_coma",23:"decremento",25:"coma",26:"igual",27:"cor_izq",28:"cor_der",29:"new",31:"menos",32:"mas",33:"por",34:"dividido",35:"potencia",36:"mod",37:"mayor",38:"menor",39:"mayor_igual",40:"menor_igual",41:"igual_logico",42:"diferente",43:"interrogacion",44:"dos_puntos",45:"or",46:"and",47:"no",48:"numero",49:"cadena",50:"caracter",51:"verdadero",52:"false"},
productions_: [0,[3,2],[4,2],[4,1],[6,1],[6,1],[6,1],[6,1],[6,4],[6,1],[12,1],[12,1],[12,1],[12,1],[12,1],[9,3],[9,3],[24,3],[24,1],[7,3],[7,5],[10,11],[10,16],[10,9],[10,17],[30,3],[30,1],[8,4],[14,2],[14,3],[14,3],[14,3],[14,3],[14,3],[14,3],[14,3],[14,3],[14,3],[14,3],[14,3],[14,3],[14,5],[14,3],[14,3],[14,2],[14,3],[14,1],[14,1],[14,1],[14,1],[14,1],[14,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 9:
 console.error('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column); 
break;
}
},
table: [{2:$V0,3:1,4:2,6:3,7:4,8:5,9:6,10:7,11:$V1,12:10,15:$V2,16:$V3,17:$V4,18:$V5,19:$V6,20:$V7,24:11},{1:[3]},{2:$V0,5:[1,18],6:19,7:4,8:5,9:6,10:7,11:$V1,12:10,15:$V2,16:$V3,17:$V4,18:$V5,19:$V6,20:$V7,24:11},o($V8,[2,3]),o($V8,[2,4]),o($V8,[2,5]),o($V8,[2,6]),o($V8,[2,7]),{12:20,15:$V2,16:$V3,17:$V4,18:$V5,19:$V6},o($V8,[2,9]),{20:[1,23],24:21,27:[1,22]},{25:$V9,26:[1,24]},o([25,26],$Va,{21:[1,26],23:[1,27]}),o($Vb,[2,10]),o($Vb,[2,11]),o($Vb,[2,12]),o($Vb,[2,13]),o($Vb,[2,14]),{1:[2,1]},o($V8,[2,2]),{13:[1,28]},{22:[1,29],25:$V9,26:[1,30]},{28:[1,31]},o($Vc,$Va),{11:$Vd,14:32,20:$Ve,31:$Vf,47:$Vg,48:$Vh,49:$Vi,50:$Vj,51:$Vk,52:$Vl},{20:[1,42]},{22:[1,43]},{22:[1,44]},{11:$Vd,14:45,20:$Ve,31:$Vf,47:$Vg,48:$Vh,49:$Vi,50:$Vj,51:$Vk,52:$Vl},o($V8,[2,19]),{11:$Vd,14:46,20:$Ve,31:$Vf,47:$Vg,48:$Vh,49:$Vi,50:$Vj,51:$Vk,52:$Vl},{20:[1,47],27:[1,48]},{22:[1,49],31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,39:$Vu,40:$Vv,41:$Vw,42:$Vx,43:$Vy,45:$Vz,46:$VA},{11:$Vd,14:65,20:$Ve,31:$Vf,47:$Vg,48:$Vh,49:$Vi,50:$Vj,51:$Vk,52:$Vl},{11:$Vd,14:66,20:$Ve,31:$Vf,47:$Vg,48:$Vh,49:$Vi,50:$Vj,51:$Vk,52:$Vl},{11:$Vd,14:67,20:$Ve,31:$Vf,47:$Vg,48:$Vh,49:$Vi,50:$Vj,51:$Vk,52:$Vl},o($VB,[2,46]),o($VB,[2,47]),o($VB,[2,48]),o($VB,[2,49]),o($VB,[2,50]),o($VB,[2,51]),o($Vc,[2,17]),o($V8,[2,15]),o($V8,[2,16]),o($V8,[2,8],{31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,39:$Vu,40:$Vv,41:$Vw,42:$Vx,43:$Vy,45:$Vz,46:$VA}),{22:[1,68],31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,39:$Vu,40:$Vv,41:$Vw,42:$Vx,43:$Vy,45:$Vz,46:$VA},{26:[1,69]},{28:[1,70]},o($V8,[2,27]),{11:$Vd,14:71,20:$Ve,31:$Vf,47:$Vg,48:$Vh,49:$Vi,50:$Vj,51:$Vk,52:$Vl},{11:$Vd,14:72,20:$Ve,31:$Vf,47:$Vg,48:$Vh,49:$Vi,50:$Vj,51:$Vk,52:$Vl},{11:$Vd,14:73,20:$Ve,31:$Vf,47:$Vg,48:$Vh,49:$Vi,50:$Vj,51:$Vk,52:$Vl},{11:$Vd,14:74,20:$Ve,31:$Vf,47:$Vg,48:$Vh,49:$Vi,50:$Vj,51:$Vk,52:$Vl},{11:$Vd,14:75,20:$Ve,31:$Vf,47:$Vg,48:$Vh,49:$Vi,50:$Vj,51:$Vk,52:$Vl},{11:$Vd,14:76,20:$Ve,31:$Vf,47:$Vg,48:$Vh,49:$Vi,50:$Vj,51:$Vk,52:$Vl},{11:$Vd,14:77,20:$Ve,31:$Vf,47:$Vg,48:$Vh,49:$Vi,50:$Vj,51:$Vk,52:$Vl},{11:$Vd,14:78,20:$Ve,31:$Vf,47:$Vg,48:$Vh,49:$Vi,50:$Vj,51:$Vk,52:$Vl},{11:$Vd,14:79,20:$Ve,31:$Vf,47:$Vg,48:$Vh,49:$Vi,50:$Vj,51:$Vk,52:$Vl},{11:$Vd,14:80,20:$Ve,31:$Vf,47:$Vg,48:$Vh,49:$Vi,50:$Vj,51:$Vk,52:$Vl},{11:$Vd,14:81,20:$Ve,31:$Vf,47:$Vg,48:$Vh,49:$Vi,50:$Vj,51:$Vk,52:$Vl},{11:$Vd,14:82,20:$Ve,31:$Vf,47:$Vg,48:$Vh,49:$Vi,50:$Vj,51:$Vk,52:$Vl},{11:$Vd,14:83,20:$Ve,31:$Vf,47:$Vg,48:$Vh,49:$Vi,50:$Vj,51:$Vk,52:$Vl},{11:$Vd,14:84,20:$Ve,31:$Vf,47:$Vg,48:$Vh,49:$Vi,50:$Vj,51:$Vk,52:$Vl},{11:$Vd,14:85,20:$Ve,31:$Vf,47:$Vg,48:$Vh,49:$Vi,50:$Vj,51:$Vk,52:$Vl},o($VC,[2,28],{35:$Vq}),o($VD,[2,44],{31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,39:$Vu,40:$Vv,41:$Vw,42:$Vx}),{13:[1,86],31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,39:$Vu,40:$Vv,41:$Vw,42:$Vx,43:$Vy,45:$Vz,46:$VA},o($V8,[2,20]),{27:[1,88],29:[1,87]},{20:[1,89]},o($VE,[2,29],{33:$Vo,34:$Vp,35:$Vq,36:$Vr}),o($VE,[2,30],{33:$Vo,34:$Vp,35:$Vq,36:$Vr}),o($VC,[2,31],{35:$Vq}),o($VC,[2,32],{35:$Vq}),o($VB,[2,33]),o($VC,[2,34],{35:$Vq}),o($VF,[2,35],{31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr}),o($VF,[2,36],{31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr}),o($VF,[2,37],{31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr}),o($VF,[2,38],{31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr}),o($VF,[2,39],{31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr}),o($VF,[2,40],{31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr}),{31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,39:$Vu,40:$Vv,41:$Vw,42:$Vx,43:$Vy,44:[1,90],45:$Vz,46:$VA},o([2,5,11,13,15,16,17,18,19,20,22,25,28,43,44,45],[2,42],{31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,39:$Vu,40:$Vv,41:$Vw,42:$Vx,46:$VA}),o($VD,[2,43],{31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,39:$Vu,40:$Vv,41:$Vw,42:$Vx}),o($VB,[2,45]),{12:91,15:$V2,16:$V3,17:$V4,18:$V5,19:$V6},{11:$Vd,14:93,20:$Ve,30:92,31:$Vf,47:$Vg,48:$Vh,49:$Vi,50:$Vj,51:$Vk,52:$Vl},{26:[1,94]},{11:$Vd,14:95,20:$Ve,31:$Vf,47:$Vg,48:$Vh,49:$Vi,50:$Vj,51:$Vk,52:$Vl},{27:[1,96]},{25:$VG,28:[1,97]},o($VH,[2,26],{31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,39:$Vu,40:$Vv,41:$Vw,42:$Vx,43:$Vy,45:$Vz,46:$VA}),{27:[1,100],29:[1,99]},o([2,5,11,13,15,16,17,18,19,20,22,25,28,43,44],[2,41],{31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,39:$Vu,40:$Vv,41:$Vw,42:$Vx,45:$Vz,46:$VA}),{11:$Vd,14:101,20:$Ve,31:$Vf,47:$Vg,48:$Vh,49:$Vi,50:$Vj,51:$Vk,52:$Vl},{22:[1,102]},{11:$Vd,14:103,20:$Ve,31:$Vf,47:$Vg,48:$Vh,49:$Vi,50:$Vj,51:$Vk,52:$Vl},{12:104,15:$V2,16:$V3,17:$V4,18:$V5,19:$V6},{27:[1,105]},{28:[1,106],31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,39:$Vu,40:$Vv,41:$Vw,42:$Vx,43:$Vy,45:$Vz,46:$VA},o($V8,[2,23]),o($VH,[2,25],{31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,39:$Vu,40:$Vv,41:$Vw,42:$Vx,43:$Vy,45:$Vz,46:$VA}),{27:[1,107]},{11:$Vd,14:93,20:$Ve,30:108,31:$Vf,47:$Vg,48:$Vh,49:$Vi,50:$Vj,51:$Vk,52:$Vl},{22:[1,109]},{11:$Vd,14:110,20:$Ve,31:$Vf,47:$Vg,48:$Vh,49:$Vi,50:$Vj,51:$Vk,52:$Vl},{25:$VG,28:[1,111]},o($V8,[2,21]),{28:[1,112],31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,39:$Vu,40:$Vv,41:$Vw,42:$Vx,43:$Vy,45:$Vz,46:$VA},{25:[1,113]},{27:[1,114]},{27:[1,115]},{11:$Vd,14:116,20:$Ve,31:$Vf,47:$Vg,48:$Vh,49:$Vi,50:$Vj,51:$Vk,52:$Vl},{11:$Vd,14:93,20:$Ve,30:117,31:$Vf,47:$Vg,48:$Vh,49:$Vi,50:$Vj,51:$Vk,52:$Vl},{28:[1,118],31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,39:$Vu,40:$Vv,41:$Vw,42:$Vx,43:$Vy,45:$Vz,46:$VA},{25:$VG,28:[1,119]},{22:[1,120]},{28:[1,121]},o($V8,[2,22]),{22:[1,122]},o($V8,[2,24])],
defaultActions: {18:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse (input) {
    var self = this,
        stack = [0],
        tstack = [], // token stack
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    var args = lstack.slice.call(arguments, 1);

    //this.reductionCount = this.shiftCount = 0;

    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    // copy state
    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }

    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);

    var ranges = lexer.options && lexer.options.ranges;

    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }

    function popStack (n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

_token_stack:
    var lex = function () {
        var token;
        token = lexer.lex() || EOF;
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length - 1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

_handle_error:
        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {
            var error_rule_depth;
            var errStr = '';

            // Return the rule stack depth where the nearest error rule can be found.
            // Return FALSE when no error recovery rule was found.
            function locateNearestErrorRecoveryRule(state) {
                var stack_probe = stack.length - 1;
                var depth = 0;

                // try to recover from error
                for(;;) {
                    // check for error recovery rule in this state
                    if ((TERROR.toString()) in table[state]) {
                        return depth;
                    }
                    if (state === 0 || stack_probe < 2) {
                        return false; // No suitable error recovery rule available.
                    }
                    stack_probe -= 2; // popStack(1): [symbol, action]
                    state = stack[stack_probe];
                    ++depth;
                }
            }

            if (!recovering) {
                // first see if there's any chance at hitting an error recovery rule:
                error_rule_depth = locateNearestErrorRecoveryRule(state);

                // Report error
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push("'"+this.terminals_[p]+"'");
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == EOF ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected,
                    recoverable: (error_rule_depth !== false)
                });
            } else if (preErrorSymbol !== EOF) {
                error_rule_depth = locateNearestErrorRecoveryRule(state);
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol === EOF || preErrorSymbol === EOF) {
                    throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                }

                // discard current lookahead and grab another
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            if (error_rule_depth === false) {
                throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
            }
            popStack(error_rule_depth);

            preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {
            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(lexer.yytext);
                lstack.push(lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = lexer.yyleng;
                    yytext = lexer.yytext;
                    yylineno = lexer.yylineno;
                    yyloc = lexer.yylloc;
                    if (recovering > 0) {
                        recovering--;
                    }
                } else {
                    // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2:
                // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3:
                // accept
                return true;
        }

    }

    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0://Espacios en Blanco
break;
case 1://Comentario unilineal
break;
case 2://Comentario de Varias lineas
break;
case 3:return 15;
break;
case 4:return 16;
break;
case 5:return 17;
break;
case 6:return 18;
break;
case 7:return 19;
break;
case 8:return 20;
break;
case 9:return 48;
break;
case 10:return 48;
break;
case 11: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 49; 
break;
case 12: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 50; 
break;
case 13:return 51;
break;
case 14:return 'falso';
break;
case 15:return 33;
break;
case 16:return 34;
break;
case 17:return 35;
break;
case 18:return 36;
break;
case 19:return 22;
break;
case 20:return 25;
break;
case 21:return 39;
break;
case 22:return 40;
break;
case 23:return 41;
break;
case 24:return 42;
break;
case 25:return 26;
break;
case 26:return 37;
break;
case 27:return 38;
break;
case 28:return 47;
break;
case 29:return 46;
break;
case 30:return 45;
break;
case 31:return 11;
break;
case 32:return 13;
break;
case 33:return 43;
break;
case 34:return 44;
break;
case 35:return 21
break;
case 36:return 23
break;
case 37:return 32;
break;
case 38:return 31;
break;
case 39:return 27;
break;
case 40:return 28;
break;
case 41:return 'llave_izq';
break;
case 42:return 'llave_der';
break;
case 43:return 29;
break;
case 44:return 5;
break;
case 45:console.error('Este es un error léxico: ' + yy_.yytext + ', en la linea: ' + yy_.yylloc.first_line + ', en la columna: ' + yy_.yylloc.first_column);
break;
}
},
rules: [/^(?:\s+)/i,/^(?:\/\/.*)/i,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/i,/^(?:int\b)/i,/^(?:double\b)/i,/^(?:boolean\b)/i,/^(?:char\b)/i,/^(?:string\b)/i,/^(?:([a-zA-Z])[a-zA-Z0-9_]*)/i,/^(?:[0-9]+(\.[0-9]+)?\b)/i,/^(?:[0-9]+\b)/i,/^(?:"[^\"]*")/i,/^(?:'([^\"]|\\[a-zA-Z])?')/i,/^(?:true\b)/i,/^(?:false\b)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:\^)/i,/^(?:%)/i,/^(?:;)/i,/^(?:,)/i,/^(?:>=)/i,/^(?:<=)/i,/^(?:==)/i,/^(?:!=)/i,/^(?:=)/i,/^(?:>)/i,/^(?:<)/i,/^(?:!)/i,/^(?:&&)/i,/^(?:\|\|)/i,/^(?:\()/i,/^(?:\))/i,/^(?:\?)/i,/^(?::)/i,/^(?:\+\+)/i,/^(?:--)/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\[)/i,/^(?:\])/i,/^(?:\{)/i,/^(?:\})/i,/^(?:new\b)/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = Gramatica;
exports.Parser = Gramatica.Parser;
exports.parse = function () { return Gramatica.parse.apply(Gramatica, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}