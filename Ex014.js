const despesas = [150, 80, 200, 60, 120];

function controleDeDespesas(despesas) {
  const resultado = [];

  for (let despesa of despesas) {
    if (despesa > 100) {
      resultado.push("Alto Gasto");
    } else {
      resultado.push("Gasto controlado");
    }
  }
  return resultado;
}

console.log(controleDeDespesas(despesas));
