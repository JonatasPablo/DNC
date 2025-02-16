//Escreva um algoritmo que leia 10 números e empilhe apenas os números pares. Em seguida, desempilhe e imprima os números empilhados.
programa
{
	
	funcao inicio()
	{
		inteiro pilha[10], topo, i, numero
		topo = 0

		para(i=0;i<10;i++){
			escreva("Digite um número: ")
			leia(numero)
			se(numero % 2 == 0){
				pilha[topo] = numero
				topo = topo + 1
			}
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
 * @POSICAO-CURSOR = 450; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */