// Exercício 1 – Comissão dos vendedores
// Para rodar: node ex1_comissao.js

const dados = {
  vendas: [
    { vendedor: "João Silva", valor: 1200.50 },
    { vendedor: "João Silva", valor: 950.75 },
    { vendedor: "João Silva", valor: 1800.00 },
    { vendedor: "João Silva", valor: 1400.30 },
    { vendedor: "João Silva", valor: 1100.90 },
    { vendedor: "João Silva", valor: 1550.00 },
    { vendedor: "João Silva", valor: 1700.80 },
    { vendedor: "João Silva", valor: 250.30 },
    { vendedor: "João Silva", valor: 480.75 },
    { vendedor: "João Silva", valor: 320.40 },

    { vendedor: "Maria Souza", valor: 2100.40 },
    { vendedor: "Maria Souza", valor: 1350.60 },
    { vendedor: "Maria Souza", valor: 950.20 },
    { vendedor: "Maria Souza", valor: 1600.75 },
    { vendedor: "Maria Souza", valor: 1750.00 },
    { vendedor: "Maria Souza", valor: 1450.90 },
    { vendedor: "Maria Souza", valor: 400.50 },
    { vendedor: "Maria Souza", valor: 180.20 },
    { vendedor: "Maria Souza", valor: 90.75 },

    { vendedor: "Carlos Oliveira", valor: 800.50 },
    { vendedor: "Carlos Oliveira", valor: 1200.00 },
    { vendedor: "Carlos Oliveira", valor: 1950.30 },
    { vendedor: "Carlos Oliveira", valor: 1750.80 },
    { vendedor: "Carlos Oliveira", valor: 1300.60 },
    { vendedor: "Carlos Oliveira", valor: 300.40 },
    { vendedor: "Carlos Oliveira", valor: 500.00 },
    { vendedor: "Carlos Oliveira", valor: 125.75 },

    { vendedor: "Ana Lima", valor: 1000.00 },
    { vendedor: "Ana Lima", valor: 1100.50 },
    { vendedor: "Ana Lima", valor: 1250.75 },
    { vendedor: "Ana Lima", valor: 1400.20 },
    { vendedor: "Ana Lima", valor: 1550.90 },
    { vendedor: "Ana Lima", valor: 1650.00 },
    { vendedor: "Ana Lima", valor: 75.30 },
    { vendedor: "Ana Lima", valor: 420.90 },
    { vendedor: "Ana Lima", valor: 315.40 }
  ]
};

// Devolve a comissão de UMA venda, de acordo com a regra do enunciado.
function calcularComissao(valor) {
  if (valor < 100) return 0;              // abaixo de 100: sem comissão
  if (valor < 500) return valor * 0.01;   // de 100 até 499,99: 1%
  return valor * 0.05;                    // a partir de 500: 5%
}

// Soma a comissão de todas as vendas de cada vendedor.
function comissaoPorVendedor(vendas) {
  const totais = {};

  for (const venda of vendas) {
    const atual = totais[venda.vendedor] || 0;
    totais[venda.vendedor] = atual + calcularComissao(venda.valor);
  }

  // arredonda para 2 casas decimais no final
  for (const nome in totais) {
    totais[nome] = Math.round(totais[nome] * 100) / 100;
  }
  return totais;
}

const resultado = comissaoPorVendedor(dados.vendas);

for (const nome in resultado) {
  const valorFormatado = resultado[nome].toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
  console.log(nome + ": " + valorFormatado);
}
