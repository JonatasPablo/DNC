//Escreva um algoritmo que leia 10 números e os armazene em um array. Em seguida, calcule e imprima a soma dos números armazenados.
programa{	
	funcao inicio(){
		inteiro numeros[10], i
		inteiro soma = 0
		
		para(i=0; i<10; i++){
			escreva("Digite um número: ")
			leia(numeros[i])
			soma = soma + numeros[i]
		}
		escreva("A soma dos números é: ", soma)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 369; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {soma, 5, 10, 4};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */