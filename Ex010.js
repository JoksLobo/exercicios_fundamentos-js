function ehPalindromo(palavra) {
  let palavraInvertida = "";

  for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i];
  }

  return palavra === palavraInvertida;
}

console.log(ehPalindromo("arara"));
