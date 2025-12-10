const fraseCodificar =
  "Se esse amor, ficar entre nos dois, vai ser tao pobre amor, vai se gastar";
const resultado = codificar(fraseCodificar);
const fraseDecodificar =
  "S2 2ss2 1m4r, f3c1r 2ntr2 n4s d43s, v13 s2r t14 p4br2 1m4r, v13 s2 g1st1r";
const resultado2 = decodificar(fraseDecodificar);

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function codificar(frase) {
  let resultado = frase;

  // resultado = resultado.replace("a", "1");
  while (resultado.includes("a")) {
    resultado = resultado.replace("a", "1");
  }
  while (resultado.includes("e")) {
    resultado = resultado.replace("e", "2");
  }
  while (resultado.includes("i")) {
    resultado = resultado.replace("i", "3");
  }
  while (resultado.includes("o")) {
    resultado = resultado.replace("o", "4");
  }
  while (resultado.includes("u")) {
    resultado = resultado.replace("u", "5");
  }
  return resultado;
}

function decodificar(frase) {
  let resultado = frase;

  while (resultado.includes("1")) {
    resultado = resultado.replace("1", "a");
  }
  while (resultado.includes("2")) {
    resultado = resultado.replace("2", "e");
  }
  while (resultado.includes("3")) {
    resultado = resultado.replace("3", "i");
  }
  while (resultado.includes("4")) {
    resultado = resultado.replace("4", "o");
  }
  while (resultado.includes("5")) {
    resultado = resultado.replace("5", "u");
  }
  return resultado;
}

function codificarRegex(frase) {
  let resultado = frase
    .replace(/a/g, "1")
    .replace(/e/g, "2")
    .replace(/i/g, "3")
    .replace(/o/g, "4")
    .replace(/u/g, "5");
  return resultado;
}

console.log(codificar(fraseCodificar));
console.log(decodificar(fraseDecodificar));
console.log(codificarRegex(lorem));
