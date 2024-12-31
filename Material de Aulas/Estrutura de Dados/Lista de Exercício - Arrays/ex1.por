//Escreva um algoritmo que leia 5 números e os armazene em um array. Em seguida, imprima os números na ordem inversa.
programa{	
	funcao inicio(){
	
		inteiro numeros[5], i

		para( i = 0; i < 5; i++){
			escreva("Digite um número: ")
			leia(numeros[i])
		}
		para( i = 4; i >= 0; i--){
			escreva(numeros[i], " ")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 331; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */