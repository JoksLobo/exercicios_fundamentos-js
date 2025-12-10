const investimentos = [5000, 2000, 15000];
const nome = "Joks";

function gerarListaInvestimentos(investimentos, nome) {
  if (investimentos.length === 0) {
    return "Vazio";
  }

  const lista = [];
  for (let investimento of investimentos) {
    lista.push({ investimento: investimento, nome: nome });
  }
  lista.sort((a, b) => (a.investimento > b.investimento ? 1 : -1));

  return lista;
}

console.log(gerarListaInvestimentos(investimentos, nome));
