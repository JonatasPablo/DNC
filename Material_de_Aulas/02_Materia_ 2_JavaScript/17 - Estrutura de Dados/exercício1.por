//Elabore um algoritmo que leia uma lista de 10 valores numéricos inteiros quaisquer.
//Feito isso, escreva na tela o maior e menor valor informado.

programa{	
	funcao inicio(){
		inteiro num[10] // 0 ao 9
		inteiro x
		inteiro maior = 0
		inteiro menor = 0

		escreva("Digite os 10 valores: \n")

		para(x=0; x<10; x++){ // executa do 0 ao 9 => 10 vezes
			leia(num[x])

			se(num[x] > maior){
				maior = num[x]
			}

			se(num[x] < menor){
				menor = num[x]
			}
		}
		escreva("O maior valor é: ", maior)
		escreva(" E o menor valor é: ", menor)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 561; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */