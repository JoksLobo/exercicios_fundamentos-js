let entrada = [
  47, 12, 89, 5, 63, 27, 94, 38, 71, 56, 8, 99, 42, 15, 77, 3, 64, 28, 50, 91,
];

function calcularMedia(numeros) {
  let soma = 0;

  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }

  return soma / numeros.length;
}

console.log(calcularMedia(entrada));
