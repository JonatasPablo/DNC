//Escreva um algoritmo que leia uma sequência de 7 números, empilhe-os e encontre o maior número empilhado.
programa{	
	funcao inicio(){
		inteiro pilha[7], topo, i, maior
		topo = 0
		maior = 0

		para(i=0;i<7;i++){
			escreva("Digite um número: ")
			leia(pilha[topo])
			topo = topo +1
		}

		enquanto(topo > 0){
			topo = topo -1
			se(pilha[topo] > maior){
				maior = pilha[topo]
			}
		}
		escreva("O maior número empilhado é: ",maior)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 447; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */