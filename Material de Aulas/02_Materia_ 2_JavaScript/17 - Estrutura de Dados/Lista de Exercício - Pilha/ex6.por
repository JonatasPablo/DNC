//Escreva um algoritmo que leia uma sequência de 6 números, empilhe-os e encontre o menor número empilhado.
programa{	
	funcao inicio(){
		inteiro pilha[6], topo, i, menor
		topo = 0
		menor = 0

		para(i=0;i<6;i++){
			escreva("Digite um número: ")
			leia(pilha[topo])
			topo = topo +1
		}
		menor = pilha[0]
		enquanto(topo > 0){
			topo = topo -1
			se(pilha[topo] < menor){
				menor = pilha[topo]
			}			
		}
		escreva("O menor número empilhado é: ",menor)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 468; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */