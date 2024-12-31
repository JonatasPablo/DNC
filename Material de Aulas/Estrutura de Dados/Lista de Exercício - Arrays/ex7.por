//Escreva um algoritmo que leia 9 numeros e os armazene em um array. Em seguida, imprima apenas os números que estão nas posições ímpares do array.
programa{	
	funcao inicio(){
		inteiro numeros[9], i

		para(i=0;i<9;i++){
			escreva("Digite um número: ")
			leia(numeros[i])			
		}
		escreva("Números ímpares: ")
		para(i=0; i<8;i++){
			se(numeros[i] % 2 != 0){
				escreva(numeros[i])
			}
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 401; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */