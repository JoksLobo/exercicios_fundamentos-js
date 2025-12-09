function calcularRendimento(investimento, juros) {
  let rendimento = investimento * (juros / 100);
  return rendimento;
}

console.log(calcularRendimento(1000, 5));
