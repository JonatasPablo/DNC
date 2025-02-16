programa{
	const inteiro TAM = 10
	inteiro pilha[TAM]
	inteiro topo
	
	funcao inicializa(){
		topo = -1
	}
	funcao inteiro verificaCheia(){
		se(topo == TAM -1){
			retorne 1
		}senao{
			retorne 0
		}
	}
	funcao inteiro verificaVazia(){
		se(topo == -1){
			retorne 1
		}senao{
			retorne 0
		}
	}
	funcao empilha(){
		inteiro valor = 0
		inteiro pilhaCheia = verificaCheia()
		se(pilhaCheia == 1){
			escreva("\n\n Pilha Cheia! \n")
		}senao{
			escreva("\n Digite o valor: ")
			leia(valor)
			topo++
			pilha[topo] = valor
		}
	}
	funcao desempilha(){
		inteiro pilhaVazia = verificaVazia()
		se(pilhaVazia == 1){
			escreva("\n Pilha Vazia")
		}senao{
			topo--
		}
	}
	funcao imprimir(){
		escreva("\n----- PILHA -----\n")
		para(inteiro cont = 0; cont <= topo; cont++){
			escreva(" ", pilha[cont])
		}
	}
	funcao inicio(){
		inicializa()
		verificaVazia()
		verificaCheia()
		empilha()
		empilha()
		empilha()
		imprimir()
		desempilha()
		imprimir()
		empilha()
		imprimir()
		desempilha()
		imprimir()
		empilha()
		imprimir()				
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 893; 
 * @DOBRAMENTO-CODIGO = [5, 8, 15, 34, 42];
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */