//Escreva um algoritmo que leia 6 números e os armazene em uma array. Em seguida, imprima a média dos números armazenados.
programa{	
	funcao inicio(){
		inteiro numeros[6], i, soma
		real media
		soma = 0

		para(i=0;i<6;i++){
			escreva("Digite um número: ")
			leia(numeros[i])
			soma = soma + numeros[i]
		}
		media = soma/6
		escreva("A Média dos números digitados é: ", media)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 395; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */