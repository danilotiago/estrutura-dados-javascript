function criacaoArrays()
{
    /**
     * Tipo 1
     *
     * vetor = new Array(1,2,3,4);
     * vetor = new Array("A","B","C","D");
     */

    /**
     * Tipo 2
     *
     * vetor = Array(1,2,3,4);
     * vetor = Array("A","B","C","D");
     */

    /**
     * Tipo 3
     *
     * vetor = [1,2,3,4];
     * vetor = ["A","B","C","D"];
     */

    // melhor forma
    vetor = [1,2,3,4];

    document.write(vetor);
}

function tamanhoArray(vetor)
{
    document.write(vetor.length);


}

function removeUltimosValoresArray(vetor, novoTamanho)
{
    document.write("Tamanho inicial: " + vetor.length);
    document.write("<br>");
    document.write("Elementos: " + vetor);

    // define um novo tamanho para remover os ultimos elementos ate o indice de novo tamanho inclusive
    vetor.length = novoTamanho

    document.write("<br>");
    document.write("Tamanho final: " + vetor.length);
    document.write("<br>");
    document.write("Elementos: " + vetor);
}

function concatenaArrays(vetor1, vetor2)
{
    // concatena os valores do primeiro e em seguida do segundo
    vetor = vetor1.concat(vetor2);

    document.write("Novo vetor: " + vetor);
}