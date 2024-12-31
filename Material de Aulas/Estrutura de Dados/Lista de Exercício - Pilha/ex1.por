//Escreva um algoritmo que crie uma pilha, empilhe 5 números e, em seguida, desempilhe e imprima todos os números.
programa
{
	
	funcao inicio()
	{
		inteiro pilha[5], topo, i
		topo = 0

		para(i=0; i<5 ;i++){
			escreva("Digite um número: ")
			leia(pilha[topo])
			topo = topo + 1
		}
		enquanto (topo > 0){
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
 * @POSICAO-CURSOR = 374; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */