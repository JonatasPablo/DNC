//Escreva um algoritmo que leia uma sequência de 8 números e empilhe-os. Em seguida, verifique se um número fornecido pelo usuário está na pilha.
programa{	
	funcao inicio(){
		inteiro pilha[8], topo, i, numero, encontrado
		topo = 0

		para(i=0;i<8;i++){
			escreva("Digite um número: ")
			leia(pilha[topo])
			topo = topo +1
		}

		escreva("Digite um número para verificar: ")
		leia(numero)
		encontrado = 0
		
		para(i=0;i<8;i++){
			se(pilha[i] == numero){
				encontrado = 1
			}
		}
		se(encontrado == 1){
			escreva("O número ",numero, " esta na pilha.")
		}senao{
			escreva("O número ",numero, " não está na pilha.")
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 481; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */