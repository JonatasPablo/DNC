//Escreva um algoritmo que leia uma sequência de 5 números e os empilhe. em seguida, desempilhe-os e armazene em um array. Imprima o array resultante.
programa{	
	funcao inicio(){
		inteiro pilha[5], array[5], topo, i, j
		topo = 0

		para(i=0;i<5;i++){
			escreva("Digite um número: ")
			leia(pilha[topo])
			topo = topo +1
		}
		j = 0
		enquanto(topo > 0){
			topo = topo -1
			array[j] = pilha[topo]
			j = j +1
		}
		para(i=0;i<5;i++){
			escreva(array[i], " ")
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 478; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */