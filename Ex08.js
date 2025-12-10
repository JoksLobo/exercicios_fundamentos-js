let entrada = [
  47, 12, 89, 5, 63, 27, 94, 38, 71, 56, 8, 99, 42, 15, 77, 3, 64, 28, 50, 91,
];

function maiorGasto(gastos) {
  //variavel controle - que armazene qtd de vezes que aparece o maior gasto
  let contador = 0;
  //iniciar o maior gasto como primeiro valor
  let maiorGastoAtual = gastos[0];
  //encontrar o maior gasto
  for (let i = 0; i < gastos.length; i++) {
    if (gastos[i] > maiorGastoAtual) {
      maiorGastoAtual = gastos[i];
    }
  }
  //loop para contar quantas vezes o maior gasto aparece
  for (let i = 0; i < gastos.length; i++) {
    if (gastos[i] === maiorGastoAtual) {
      contador++;
    }
  }
  return `O maior gasto é de ${maiorGastoAtual} que aparece ${contador} vez(es) na lista.`;
}

console.log(maiorGasto(entrada));
