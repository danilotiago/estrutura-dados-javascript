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
    vetor.length = novoTamanho;

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

function alteraSeparadorArray(vetor1)
{
    // troca o separador dos valores do array, o novo separador deve ser passado por string para join()
    vetor = vetor1.join(" - ");

    document.write("Novo separador: " + vetor);
}

function adicionaNovoElementoFinalArray(vetor1, novoValor)
{
    document.write("Antigo array: " + vetor1.join(" - "));

    // adiciona um novo valor ao final do array com push()
    vetor1.push(novoValor);

    document.write("<br>");
    document.write("Novo array: " + vetor1.join(" - "));
}

function removeElementoFinalArray(vetor1)
{
    document.write("Antigo array: " + vetor1.join(" - "));

    // remove valor ao final do array com pop()
    vetor1.pop();

    document.write("<br>");
    document.write("Novo array: " + vetor1.join(" - "));
}

function removeElementoInicioArray(vetor1)
{
    document.write("Antigo array: " + vetor1.join(" - "));

    // remove valor ao inicio do array com shift()
    vetor1.shift();

    document.write("<br>");
    document.write("Novo array: " + vetor1.join(" - "));
}

function adicionaNovoElementoInicioArray(vetor1, novoValor)
{
    document.write("Antigo array: " + vetor1.join(" - "));

    // adiciona um novo valor ao inicio do array com push()
    vetor1.unshift(novoValor);

    document.write("<br>");
    document.write("Novo array: " + vetor1.join(" - "));
}

function pegaParteArray(vetor1, inicio, fim)
{
    document.write("Antigo array: " + vetor1.join(" - "));

    // pega intervalo de valores do array do inicio (inclusive) e fim (exclusive)
    vetor = vetor1.slice(inicio, fim);

    document.write("<br>");
    document.write("Novo array recortado: " + vetor.join(" - "));
}

/**
 * Adiciona elemento no meio do vetor e trata caso primeira ou ultima posicao
 * A posicao inicial é exclusiva, ou seja, será inserido os valores após ela.
 * @param vetor1
 * @param vetorEntrada
 * @param inicio
 * @param fim
 */
function adicionaMeioArray(vetor1, vetorEntrada, posicaoInicial, posicaoFinal)
{
    if(posicaoInicial === 0 && posicaoFinal === 0) return adicionaNovoElementoInicioArray(vetor1, vetorEntrada);
    else if(posicaoInicial === vetor1.length && posicaoFinal === vetor1.length) return adicionaNovoElementoFinalArray(vetor1, vetorEntrada);

    document.write("Antigo array: " + vetor1);
    document.write("<br>");

    /**
     *  Example
     At position 2, remove 2 items:

     var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
     fruits.splice(2, 2);
     The result of fruits will be:
     Banana,Orange,Kiwi
     */
    // na posicao posicao+1, nao remove ninguem (0) e adiciona o vetorEntrada
    vetor1.splice(posicaoInicial+1, 0, vetorEntrada);

    document.write("Novo array completo: " + vetor1.join(","));
}

function reverteOrdem(vetor1)
{
    vetor = vetor1.reverse();

    document.write("Novo array completo: " + vetor.join(","));
}

function ordenaCrescente(vetor1)
{
    vetor = vetor1.sort(function(a, b) {
        if (a < b) return -1;  // joga os menores a esquerda
        if (a > b) return  1;  // joga os maiores a direita
                   return  0;  // mantem posicao
    });

    document.write("Novo array ordenado: " + vetor.join(","));
}

function ordenaDecrescente(vetor1)
{
    vetor = vetor1.sort(function(a, b) {
        if (a < b) return  1;  // joga os menores a direita
        if (a > b) return -1; // joga os maiores a esquerda
                   return  0;  // mantem posicao
    });

    document.write("Novo array ordenado: " + vetor.join(","));
}

function buscaValor(vetor1, valorBusca)
{
    // retorna o indice do valor e se não achar retorna -1
    var indice = vetor1.indexOf(5);

    document.write("índice localizado: " + indice);
}

function buscaValorAPartirDe(vetor1, valorBusca, partida)
{
    // retorna o indice do valor a partir do indice do parametro "partida" e se não achar retorna -1
    var indice = vetor1.indexOf(valorBusca, partida);

    document.write("índice localizado: " + indice);
}

function buscaValorDeTrasPraFrente(vetor1, valorBusca)
{
    // retorna o indice do valor e se não achar retorna -1 de tras pra frente
    var indice = vetor1.lastIndexOf(valorBusca);

    document.write("índice localizado: " + indice);
}

function buscaValorDeTrasPraFrenteAPartirDe(vetor1, valorBusca, partida)
{
    // retorna o indice do valor a partir do indice do parametro "partida" e se não achar retorna -1
    var indice = vetor1.lastIndexOf(valorBusca,partida);

    document.write("índice localizado: " + indice);
}

function usandoForEach(vetor1)
{
    // funcao anonima que recebe indice e valor e executa algo no iteração deste laço
    vetor1.forEach(function(valor, indice) {

        document.write("índice: " + indice + " valor: " + valor);
        document.write("<br>");

    });
}

function usandoSwitch(numero)
{
    switch (numero)
    {
        case 10:
            document.write("Selecionado 10");
            break;
        case 20:
            document.write("Selecionado 20");
            break;
        case 30:
            document.write("Selecionado 30");
            break;

    }
}



























