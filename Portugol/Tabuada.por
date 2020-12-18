//Função do Algoritmo: Executa uma tabuada conforme escolhas do usuário
//Autor: Renan Santana

programa
{
	
	funcao inicio()
	{
		inteiro contador,limite,resultado,tabuada

		contador = 0

		escreva("Qual tabuada você quer que eu resolva?:")
		leia(tabuada)
		escreva("A tabuada vai ser calculada até que número?:")
		leia(limite)

		faca{

			resultado = tabuada * contador
			escreva(tabuada + " x " + contador + " = " + resultado + "\n")
			contador ++
					
		}enquanto (contador<=limite)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 340; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */