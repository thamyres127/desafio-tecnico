// Exercício 2 – Movimentação de estoque
// Para rodar: node ex2_estoque.js

const dados = {
  estoque: [
    { codigoProduto: 101, descricaoProduto: "Caneta Azul", estoque: 150 },
    { codigoProduto: 102, descricaoProduto: "Caderno Universitário", estoque: 75 },
    { codigoProduto: 103, descricaoProduto: "Borracha Branca", estoque: 200 },
    { codigoProduto: 104, descricaoProduto: "Lápis Preto HB", estoque: 320 },
    { codigoProduto: 105, descricaoProduto: "Marcador de Texto Amarelo", estoque: 90 }
  ]
};

let proximoId = 1;
// contador: garante o número único de cada movimentação
const movimentacoes = [];
// histórico de tudo que foi lançado

// tipo: "ENTRADA" ou "SAIDA".
// Devolve a movimentação, com a quantidade final do estoque do produto.
function movimentarEstoque(estoque, codigo, tipo, quantidade) {
  const produto = estoque.find(p => p.codigoProduto === codigo);
  if (!produto) {
    throw new Error("Produto não encontrado.");
  }

  if (tipo !== "ENTRADA" && tipo !== "SAIDA") {
    throw new Error('O tipo precisa ser "ENTRADA" ou "SAIDA".');
  }

  if (!Number.isInteger(quantidade) || quantidade <= 0) {
    throw new Error("A quantidade precisa ser um número inteiro maior que zero.");
  }

  if (tipo === "SAIDA" && quantidade > produto.estoque) {
    throw new Error("Estoque insuficiente. Disponível: " + produto.estoque + ".");
  }

  produto.estoque += tipo === "ENTRADA" ? quantidade : -quantidade;

  const movimentacao = {
    id: proximoId++,
    descricao: tipo === "ENTRADA" ? "Entrada de mercadoria" : "Saída de mercadoria",
    codigoProduto: produto.codigoProduto,
    produto: produto.descricaoProduto,
    quantidade: quantidade,
    estoqueFinal: produto.estoque
  };

  movimentacoes.push(movimentacao);
  return movimentacao;
}

// Lança uma movimentação e mostra o resultado na tela.
function lancar(codigo, tipo, quantidade) {
  try {
    const m = movimentarEstoque(dados.estoque, codigo, tipo, quantidade);
    console.log(
      "Movimentação nº " + m.id + " - " + m.descricao + " - " + m.produto +
      " - " + m.quantidade + " un. - Estoque final: " + m.estoqueFinal
    );
  } catch (erro) {
