//Escreva um algoritmo que leia 12 números e os armazene em um array. Em seguida, calcule e imprima a quantidade de números negativos armazenados.
programa{	
	funcao inicio(){
		inteiro numeros[12], i, qtdNegativos
		qtdNegativos = 0

		para(i=0;i<12;i++){
			escreva("Digite um número, positivo ou negativo: ")
			leia(numeros[i])
			se(numeros[i] < 0){
				qtdNegativos = qtdNegativos + 1
			}
		}
		escreva("A quantidade de números negativos é: ", qtdNegativos)		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 477; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */