//Escreva um algoritmo que leia 7 números e os armazene em um array. Em seguida, encontre e imprima o maior número armazenado.
programa{	
	funcao inicio(){
		inteiro numeros[7], i, maior
		maior = 0
		para(i=0;i<7;i++){
			escreva("Digite um número: ")
			leia(numeros[i])
		}
		maior = numeros[0]
		para(i=1;i<7;i++){
			se(numeros[i] > maior)
			maior = numeros[i]
		}
		escreva("O maior número digitado é: ", maior)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 429; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */