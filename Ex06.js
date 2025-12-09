// Requisito 6: Crie uma função que receba o número de vitórias e empates de um time e
// retorne a quantidade total de pontos, sabendo que cada vitória vale 3 pontos e cada empate
// vale 1 ponto.
// Função: calcularPontos
// Exemplo Entrada: // calcularPontos(5, 2);
// Exemplo Saída: // 17

function calcularPontos(vitorias, empates) {
  let totalPontos = vitorias * 3 + empates;
  return totalPontos;
}

console.log(calcularPontos(9, 3));
