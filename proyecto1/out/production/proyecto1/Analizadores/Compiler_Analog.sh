#! /bin/zsh
java -jar jflex-full-1.7.0.jar Analizado_Lexico.jflex
java -jar java-cup-11b.jar -parser Analizador_Sintactico -symbols Simbolos Analizador_Sintactico.cup

