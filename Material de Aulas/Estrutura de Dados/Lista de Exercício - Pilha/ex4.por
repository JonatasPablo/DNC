//Escreva um algoritmo que leia uma sequência de 10 números, empilhe-os e calcule a soma dos números empilhados.
programa{
	funcao inicio(){
		inteiro pilha[10], topo, i, soma
		topo = 0
		soma = 0

		para(i=0;i<10;i++){
			escreva("Digite um número: ")
			leia(pilha[topo])
			topo = topo + 1
		}
		enquanto(topo > 0){
			topo = topo -1
			soma = soma + pilha[topo]
		}
		escreva("A soma dos números empilhados é: ",soma)
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