
//----------------------------------------------------
// The following code was generated by CUP v0.11b 20160615 (GIT 4ac7450)
//----------------------------------------------------

package Analizadores;

import java_cup.runtime.Symbol;
import java.util.LinkedList;
import java_cup.runtime.XMLElement;

/** CUP v0.11b 20160615 (GIT 4ac7450) generated parser.
  */
@SuppressWarnings({"rawtypes"})
public class Analizador_Sintactico extends java_cup.runtime.lr_parser {

 public final Class getSymbolContainer() {
    return Simbolos.class;
}

  /** Default constructor. */
  @Deprecated
  public Analizador_Sintactico() {super();}

  /** Constructor which sets the default scanner. */
  @Deprecated
  public Analizador_Sintactico(java_cup.runtime.Scanner s) {super(s);}

  /** Constructor which sets the default scanner. */
  public Analizador_Sintactico(java_cup.runtime.Scanner s, java_cup.runtime.SymbolFactory sf) {super(s,sf);}

  /** Production table. */
  protected static final short _production_table[][] = 
    unpackFromStrings(new String[] {
    "\000\012\000\002\002\004\000\002\002\005\000\002\003" +
    "\005\000\002\003\005\000\002\003\005\000\002\003\005" +
    "\000\002\003\005\000\002\003\005\000\002\003\005\000" +
    "\002\003\003" });

  /** Access to production table. */
  public short[][] production_table() {return _production_table;}

  /** Parse-action table. */
  protected static final short[][] _action_table = 
    unpackFromStrings(new String[] {
    "\000\026\000\004\004\005\001\002\000\004\002\030\001" +
    "\002\000\006\006\006\015\010\001\002\000\022\005\ufff8" +
    "\007\ufff8\010\ufff8\011\ufff8\012\ufff8\013\ufff8\014\ufff8\016" +
    "\ufff8\001\002\000\020\005\027\007\014\010\015\011\012" +
    "\012\020\013\016\014\013\001\002\000\006\006\006\015" +
    "\010\001\002\000\020\007\014\010\015\011\012\012\020" +
    "\013\016\014\013\016\017\001\002\000\006\006\006\015" +
    "\010\001\002\000\006\006\006\015\010\001\002\000\006" +
    "\006\006\015\010\001\002\000\006\006\006\015\010\001" +
    "\002\000\006\006\006\015\010\001\002\000\022\005\ufff9" +
    "\007\ufff9\010\ufff9\011\ufff9\012\ufff9\013\ufff9\014\ufff9\016" +
    "\ufff9\001\002\000\006\006\006\015\010\001\002\000\022" +
    "\005\ufffc\007\ufffc\010\ufffc\011\ufffc\012\ufffc\013\016\014" +
    "\013\016\ufffc\001\002\000\022\005\ufffb\007\ufffb\010\ufffb" +
    "\011\ufffb\012\ufffb\013\ufffb\014\ufffb\016\ufffb\001\002\000" +
    "\022\005\ufffe\007\ufffe\010\ufffe\011\012\012\020\013\016" +
    "\014\013\016\ufffe\001\002\000\022\005\uffff\007\uffff\010" +
    "\uffff\011\012\012\020\013\016\014\013\016\uffff\001\002" +
    "\000\022\005\ufffa\007\ufffa\010\ufffa\011\ufffa\012\ufffa\013" +
    "\ufffa\014\ufffa\016\ufffa\001\002\000\022\005\ufffd\007\ufffd" +
    "\010\ufffd\011\ufffd\012\ufffd\013\016\014\013\016\ufffd\001" +
    "\002\000\004\002\000\001\002\000\004\002\001\001\002" +
    "" });

  /** Access to parse-action table. */
  public short[][] action_table() {return _action_table;}

  /** <code>reduce_goto</code> table. */
  protected static final short[][] _reduce_table = 
    unpackFromStrings(new String[] {
    "\000\026\000\004\002\003\001\001\000\002\001\001\000" +
    "\004\003\006\001\001\000\002\001\001\000\002\001\001" +
    "\000\004\003\010\001\001\000\002\001\001\000\004\003" +
    "\025\001\001\000\004\003\024\001\001\000\004\003\023" +
    "\001\001\000\004\003\022\001\001\000\004\003\021\001" +
    "\001\000\002\001\001\000\004\003\020\001\001\000\002" +
    "\001\001\000\002\001\001\000\002\001\001\000\002\001" +
    "\001\000\002\001\001\000\002\001\001\000\002\001\001" +
    "\000\002\001\001" });

  /** Access to <code>reduce_goto</code> table. */
  public short[][] reduce_table() {return _reduce_table;}

  /** Instance of action encapsulation class. */
  protected CUP$Analizador_Sintactico$actions action_obj;

  /** Action encapsulation object initializer. */
  protected void init_actions()
    {
      action_obj = new CUP$Analizador_Sintactico$actions(this);
    }

  /** Invoke a user supplied parse action. */
  public java_cup.runtime.Symbol do_action(
    int                        act_num,
    java_cup.runtime.lr_parser parser,
    java.util.Stack            stack,
    int                        top)
    throws java.lang.Exception
  {
    /* call code in generated class */
    return action_obj.CUP$Analizador_Sintactico$do_action(act_num, parser, stack, top);
  }

  /** Indicates start state. */
  public int start_state() {return 0;}
  /** Indicates start production. */
  public int start_production() {return 0;}

  /** <code>EOF</code> Symbol index. */
  public int EOF_sym() {return 0;}

  /** <code>error</code> Symbol index. */
  public int error_sym() {return 1;}



    // varible que guarda los tokens correctos
    public LinkedList<Instruccion> ListaTokens;
    public LinkedList<TError> ListaErresSintacticos;

    public void add_Token(String name, String Lexema){
        ListaTokens.add(new Instruccion(name,Lexema));
    }
    public void syntax_error(Symbol s){
                System.err.println("Error Sintáctico en la Línea " + (s.left) +" Columna "+s.right+ ". No se esperaba este componente: " +s.value+".");
        }
    public void unrecovered_syntax_error(Symbol s) throws java.lang.Exception{
        System.err.println("Error síntactico irrecuperable en la Línea " + (s.left)+ " Columna "+s.right+". Componente " + s.value + " no reconocido.");
    }


/** Cup generated class to encapsulate user supplied action code.*/
@SuppressWarnings({"rawtypes", "unchecked", "unused"})
class CUP$Analizador_Sintactico$actions {
  private final Analizador_Sintactico parser;

  /** Constructor */
  CUP$Analizador_Sintactico$actions(Analizador_Sintactico parser) {
    this.parser = parser;
  }

  /** Method 0 with the actual generated action code for actions 0 to 300. */
  public final java_cup.runtime.Symbol CUP$Analizador_Sintactico$do_action_part00000000(
    int                        CUP$Analizador_Sintactico$act_num,
    java_cup.runtime.lr_parser CUP$Analizador_Sintactico$parser,
    java.util.Stack            CUP$Analizador_Sintactico$stack,
    int                        CUP$Analizador_Sintactico$top)
    throws java.lang.Exception
    {
      /* Symbol object for return from actions */
      java_cup.runtime.Symbol CUP$Analizador_Sintactico$result;

      /* select the action based on the action number */
      switch (CUP$Analizador_Sintactico$act_num)
        {
          /*. . . . . . . . . . . . . . . . . . . .*/
          case 0: // $START ::= INICIO EOF 
            {
              Object RESULT =null;
		int start_valleft = ((java_cup.runtime.Symbol)CUP$Analizador_Sintactico$stack.elementAt(CUP$Analizador_Sintactico$top-1)).left;
		int start_valright = ((java_cup.runtime.Symbol)CUP$Analizador_Sintactico$stack.elementAt(CUP$Analizador_Sintactico$top-1)).right;
		Object start_val = (Object)((java_cup.runtime.Symbol) CUP$Analizador_Sintactico$stack.elementAt(CUP$Analizador_Sintactico$top-1)).value;
		RESULT = start_val;
              CUP$Analizador_Sintactico$result = parser.getSymbolFactory().newSymbol("$START",0, ((java_cup.runtime.Symbol)CUP$Analizador_Sintactico$stack.elementAt(CUP$Analizador_Sintactico$top-1)), ((java_cup.runtime.Symbol)CUP$Analizador_Sintactico$stack.peek()), RESULT);
            }
          /* ACCEPT */
          CUP$Analizador_Sintactico$parser.done_parsing();
          return CUP$Analizador_Sintactico$result;

          /*. . . . . . . . . . . . . . . . . . . .*/
          case 1: // INICIO ::= inicio ENUMERICA fin 
            {
              Object RESULT =null;

              CUP$Analizador_Sintactico$result = parser.getSymbolFactory().newSymbol("INICIO",0, ((java_cup.runtime.Symbol)CUP$Analizador_Sintactico$stack.elementAt(CUP$Analizador_Sintactico$top-2)), ((java_cup.runtime.Symbol)CUP$Analizador_Sintactico$stack.peek()), RESULT);
            }
          return CUP$Analizador_Sintactico$result;

          /*. . . . . . . . . . . . . . . . . . . .*/
          case 2: // ENUMERICA ::= ENUMERICA mas ENUMERICA 
            {
              Object RESULT =null;

              CUP$Analizador_Sintactico$result = parser.getSymbolFactory().newSymbol("ENUMERICA",1, ((java_cup.runtime.Symbol)CUP$Analizador_Sintactico$stack.elementAt(CUP$Analizador_Sintactico$top-2)), ((java_cup.runtime.Symbol)CUP$Analizador_Sintactico$stack.peek()), RESULT);
            }
          return CUP$Analizador_Sintactico$result;

          /*. . . . . . . . . . . . . . . . . . . .*/
          case 3: // ENUMERICA ::= ENUMERICA menos ENUMERICA 
            {
              Object RESULT =null;

              CUP$Analizador_Sintactico$result = parser.getSymbolFactory().newSymbol("ENUMERICA",1, ((java_cup.runtime.Symbol)CUP$Analizador_Sintactico$stack.elementAt(CUP$Analizador_Sintactico$top-2)), ((java_cup.runtime.Symbol)CUP$Analizador_Sintactico$stack.peek()), RESULT);
            }
          return CUP$Analizador_Sintactico$result;

          /*. . . . . . . . . . . . . . . . . . . .*/
          case 4: // ENUMERICA ::= ENUMERICA por ENUMERICA 
            {
              Object RESULT =null;

              CUP$Analizador_Sintactico$result = parser.getSymbolFactory().newSymbol("ENUMERICA",1, ((java_cup.runtime.Symbol)CUP$Analizador_Sintactico$stack.elementAt(CUP$Analizador_Sintactico$top-2)), ((java_cup.runtime.Symbol)CUP$Analizador_Sintactico$stack.peek()), RESULT);
            }
          return CUP$Analizador_Sintactico$result;

          /*. . . . . . . . . . . . . . . . . . . .*/
          case 5: // ENUMERICA ::= ENUMERICA division ENUMERICA 
            {
              Object RESULT =null;

              CUP$Analizador_Sintactico$result = parser.getSymbolFactory().newSymbol("ENUMERICA",1, ((java_cup.runtime.Symbol)CUP$Analizador_Sintactico$stack.elementAt(CUP$Analizador_Sintactico$top-2)), ((java_cup.runtime.Symbol)CUP$Analizador_Sintactico$stack.peek()), RESULT);
            }
          return CUP$Analizador_Sintactico$result;

          /*. . . . . . . . . . . . . . . . . . . .*/
          case 6: // ENUMERICA ::= ENUMERICA potencia ENUMERICA 
            {
              Object RESULT =null;

              CUP$Analizador_Sintactico$result = parser.getSymbolFactory().newSymbol("ENUMERICA",1, ((java_cup.runtime.Symbol)CUP$Analizador_Sintactico$stack.elementAt(CUP$Analizador_Sintactico$top-2)), ((java_cup.runtime.Symbol)CUP$Analizador_Sintactico$stack.peek()), RESULT);
            }
          return CUP$Analizador_Sintactico$result;

          /*. . . . . . . . . . . . . . . . . . . .*/
          case 7: // ENUMERICA ::= ENUMERICA mod ENUMERICA 
            {
              Object RESULT =null;

              CUP$Analizador_Sintactico$result = parser.getSymbolFactory().newSymbol("ENUMERICA",1, ((java_cup.runtime.Symbol)CUP$Analizador_Sintactico$stack.elementAt(CUP$Analizador_Sintactico$top-2)), ((java_cup.runtime.Symbol)CUP$Analizador_Sintactico$stack.peek()), RESULT);
            }
          return CUP$Analizador_Sintactico$result;

          /*. . . . . . . . . . . . . . . . . . . .*/
          case 8: // ENUMERICA ::= parA ENUMERICA parC 
            {
              Object RESULT =null;

              CUP$Analizador_Sintactico$result = parser.getSymbolFactory().newSymbol("ENUMERICA",1, ((java_cup.runtime.Symbol)CUP$Analizador_Sintactico$stack.elementAt(CUP$Analizador_Sintactico$top-2)), ((java_cup.runtime.Symbol)CUP$Analizador_Sintactico$stack.peek()), RESULT);
            }
          return CUP$Analizador_Sintactico$result;

          /*. . . . . . . . . . . . . . . . . . . .*/
          case 9: // ENUMERICA ::= numero 
            {
              Object RESULT =null;

              CUP$Analizador_Sintactico$result = parser.getSymbolFactory().newSymbol("ENUMERICA",1, ((java_cup.runtime.Symbol)CUP$Analizador_Sintactico$stack.peek()), ((java_cup.runtime.Symbol)CUP$Analizador_Sintactico$stack.peek()), RESULT);
            }
          return CUP$Analizador_Sintactico$result;

          /* . . . . . .*/
          default:
            throw new Exception(
               "Invalid action number "+CUP$Analizador_Sintactico$act_num+"found in internal parse table");

        }
    } /* end of method */

  /** Method splitting the generated action code into several parts. */
  public final java_cup.runtime.Symbol CUP$Analizador_Sintactico$do_action(
    int                        CUP$Analizador_Sintactico$act_num,
    java_cup.runtime.lr_parser CUP$Analizador_Sintactico$parser,
    java.util.Stack            CUP$Analizador_Sintactico$stack,
    int                        CUP$Analizador_Sintactico$top)
    throws java.lang.Exception
    {
              return CUP$Analizador_Sintactico$do_action_part00000000(
                               CUP$Analizador_Sintactico$act_num,
                               CUP$Analizador_Sintactico$parser,
                               CUP$Analizador_Sintactico$stack,
                               CUP$Analizador_Sintactico$top);
    }
}

}