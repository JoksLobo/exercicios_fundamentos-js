function ehNumeroPrimo(numero) {
  if (numero <= 1) return false;
  for (i = 2; i < numero; i++) {
    if (numero % i === 0) return false;
  }
  return true;
}

console.log(ehNumeroPrimo(3));
console.log(ehNumeroPrimo(9));
console.log(ehNumeroPrimo(7));
console.log(ehNumeroPrimo(11));
console.log(ehNumeroPrimo(85));
