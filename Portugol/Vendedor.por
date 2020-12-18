//Função do Algoritmo: Calcula a média de vendas por vendedor
//Autor: Renan Santana

programa
{
	funcao inicio()
	{
		real jan,fev,mar,abr,total,media
		cadeia vendedor

		escreva("Digite o nome do vendedor:")
		leia(vendedor)
		escreva("Digite o valor da venda de Janeiro:")
		leia(jan)
		escreva("Digite o valor da venda  de Fevereiro:")
		leia(fev)
		escreva("Digite o valor da venda de Março:")
		leia(mar)
		escreva("Digite o valor da venda de Abril:")
		leia(abr)

		total = (jan+fev+mar+abr)
		media = (jan+fev+mar+abr)/4

		escreva("O vendedor: " + vendedor + " vendeu nesses quatro meses o total de: " + total + " e obteve a média de: " + media)
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 61; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */