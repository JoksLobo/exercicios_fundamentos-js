// Exercício 7: Crie uma função que receba uma frase e retorne a quantidade de vogais contidas
// nela.
// Função: contarVogais.
// Exemplo Entrada: // contarVogais("Olá, tudo bem?");
// Exemplo Saída: 5

function contarVogais(frase) {
  let contador = 0;

  for (let i = 0; i < frase.length; i++) {
    const letra = frase[i].toLowerCase();

    if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u"
    ) {
      contador++;
    }
  }

  return contador;
}

let frase1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis est libero, id sollicitudin ipsum scelerisque eget. Phasellus dictum lacus a risus consequat molestie. Aliquam ultrices ligula luctus aliquam semper. Maecenas porttitor ante mollis eros suscipit, eget venenatis risus porta. Vivamus egestas aliquet tempus. Aliquam dictum ornare ligula, in ullamcorper risus dapibus ac. Phasellus mattis odio sapien, vel euismod dolor varius non. Integer porta ligula ex, a tincidunt augue tempor egestas. Cras id rutrum ex. Sed ultricies commodo cursus. Duis sagittis tortor sed dapibus volutpat. Nam condimentum eget sapien quis imperdiet. Suspendisse posuere lorem massa, vel euismod diam scelerisque ac. Aliquam in suscipit est. Mauris convallis ante leo, et semper nisi congue a. Praesent tincidunt malesuada erat.";
let frase2 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis est libero, id sollicitudin ipsum scelerisque eget. Phasellus dictum lacus a risus consequat molestie. Aliquam ultrices ligula luctus aliquam semper. Maecenas porttitor ante mollis eros suscipit, eget venenatis risus porta. Vivamus egestas aliquet tempus. Aliquam dictum ornare ligula, in ullamcorper risus dapibus ac. Phasellus mattis odio sapien, vel euismod dolor varius non. Integer porta ligula ex, a tincidunt augue tempor egestas. Cras id rutrum ex. Sed ultricies commodo cursus. Duis sagittis tortor sed dapibus volutpat. Nam condimentum eget sapien quis imperdiet. Suspendisse posuere lorem massa, vel euismod diam scelerisque ac. Aliquam in suscipit est. Mauris convallis ante leo, et semper nisi congue a. Praesent tincidunt malesuada erat.Sed ultricies commodo cursus. Duis sagittis tortor sed dapibus volutpat. Nam condimentum eget sapien quis imperdiet. Suspendisse posuere lorem massa, vel euismod diam scelerisque ac. Aliquam in suscipit est. Mauris convallis ante leo, et semper nisi congue a. Praesent tincidunt malesuada erat.Sed ultricies commodo cursus. Duis sagittis tortor sed dapibus volutpat. Nam condimentum eget sapien quis imperdiet. Suspendisse posuere lorem massa, vel euismod diam scelerisque ac. Aliquam in suscipit est. Mauris convallis ante leo, et semper nisi congue a. Praesent tincidunt malesuada erat.Sed ultricies commodo cursus. Duis sagittis tortor sed dapibus volutpat. Nam condimentum eget sapien quis imperdiet. Suspendisse posuere lorem massa, vel euismod diam scelerisque ac. Aliquam in suscipit est. Mauris convallis ante leo, et semper nisi congue a. Praesent tincidunt malesuada erat.Sed ultricies commodo cursus. Duis sagittis tortor sed dapibus volutpat. Nam condimentum eget sapien quis imperdiet. Suspendisse posuere lorem massa, vel euismod diam scelerisque ac. Aliquam in suscipit est. Mauris convallis ante leo, et semper nisi congue a. Praesent tincidunt malesuada erat.Sed ultricies commodo cursus. Duis sagittis tortor sed dapibus volutpat. Nam condimentum eget sapien quis imperdiet. Suspendisse posuere lorem massa, vel euismod diam scelerisque ac. Aliquam in suscipit est. Mauris convallis ante leo, et semper nisi congue a. Praesent tincidunt malesuada erat.";

console.log(`Existem ${contarVogais(frase1)} vogais na frase.`);
console.log(`Existem ${contarVogais(frase2)} vogais na frase.`);
