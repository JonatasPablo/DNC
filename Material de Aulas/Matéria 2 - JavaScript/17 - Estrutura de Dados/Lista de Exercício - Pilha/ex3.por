//Escreva um algoritmo que leia uma sequência de 8 caracteres e empilhe-os. Em seguida, desempilhe e imprima os caracteres na ordem inversa.
programa{	
	funcao inicio(){
		inteiro pilha[8], topo, i
		topo = 0

		para(i=0;i<8;i++){
			escreva("Digite um número: ")
			leia(pilha[topo])
			topo = topo + 1
		}
		enquanto(topo > 0){
			topo = topo - 1
			escreva(pilha[topo], " ")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 386; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */