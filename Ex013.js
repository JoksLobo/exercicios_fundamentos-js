function calcularDistancia(distancia1, distancia2) {
  if (distancia1 < distancia2) {
    return "Pessoa 1";
  } else if (distancia1 > distancia2) {
    return "Pessoa 2";
  } else {
    return "Ambos estão na mesma distância.";
  }
}

console.log(calcularDistancia(10, 15));
console.log(calcularDistancia(20, 15));
console.log(calcularDistancia(30, 30));
