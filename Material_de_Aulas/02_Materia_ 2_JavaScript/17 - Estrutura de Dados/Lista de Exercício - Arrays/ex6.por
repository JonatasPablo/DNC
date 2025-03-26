//Escreva um algoritmo que leia 10 números e os armazene em um array. Em seguida, encontre e imprima o menor número armazenado.
programa{	
	funcao inicio(){
		inteiro numeros[10], i, menor
		menor = 0
		para(i=0;i<10;i++){
			escreva("Digite um número: ")
			leia(numeros[i])
		}
		menor = numeros[0]
		para(i=1;i<10;i++){
			se(numeros[i] < menor)
			menor = numeros[i]
		}
		escreva("O menor número digitado é: ", menor)
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 428; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */