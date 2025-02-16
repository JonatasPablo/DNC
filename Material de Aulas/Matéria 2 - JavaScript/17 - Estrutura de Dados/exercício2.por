//Sabendo-se que a média de aprovação em uma disciplina é 6, escreva um algoritmo que
//leia uma lista de 10 médias de alunos. Logo a seguir, apresente na tela a quantidade de alunos que obtiveram
//aprovação e a quantidade de alunos que ficaram em recuperação na disciplina.
programa{	
	funcao inicio(){
		real media[10]
		inteiro x
		inteiro aprovado = 0
		inteiro reprovado = 0

		para(x=0;x<10;x++){

			escreva("\nEscreva a média do aluno de numero ", x+1,": ")
			leia(media[x])

			se(media[x] >=6){
				aprovado++
			} senao{
				reprovado++
			}
		}
		escreva("\n Qtd aprovado: ", aprovado)
		escreva("\n Qtd reprovado: ", reprovado)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 653; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */