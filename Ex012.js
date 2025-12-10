function contarPalavras(frase) {
  let contador = 0;
  const palavras = frase.trim().split(" ");

  for (let i = 0; i < palavras.length; i++) {
    if (palavras[i] !== "") {
      contador++;
    }
  }
  return contador;
}
let frase = "Olá, tudo bem?";

console.log(contarPalavras(frase));
