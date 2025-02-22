programa
{	
	funcao inicio(){
		real chico = 1.5
		real ze = 1.1
		inteiro anos = 0

		enquanto (ze < chico){
			chico = chico + 0.02
			ze = ze + 0.03
			anos++
		}
		escreva(anos,"\n")
		escreva(ze,"\n")
		escreva(chico,"\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 239; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */