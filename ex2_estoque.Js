const estoque = [
  { codigoProduto: 101, descricaoProduto: "Caneta Azul", estoque: 150 },
  { codigoProduto: 102, descricaoProduto: "Caderno Universitário", estoque: 75 },
  { codigoProduto: 103, descricaoProduto: "Borracha Branca", estoque: 200 },
  { codigoProduto: 104, descricaoProduto: "Lápis Preto HB", estoque: 320 },
  { codigoProduto: 105, descricaoProduto: "Marcador de Texto Amarelo", estoque: 90 },
];

const movimentacoes = [];
let proximoId = 1;

function movimentar(codigoProduto, tipo, quantidade) {
  const produto = estoque.find(p => p.codigoProduto === codigoProduto);
  if (!produto) return { erro: "Produto não encontrado" };
  if (tipo !== "entrada" && tipo !== "saida") return { erro: "Tipo deve ser 'entrada' ou 'saida'" };
  if (quantidade <= 0) return { erro: "Quantidade deve ser maior que zero" };
  if (tipo === "saida" && quantidade > produto.estoque) {
    return { erro: `Estoque insuficiente (disponível: ${produto.estoque})` };
  }

  produto.estoque += tipo === "entrada" ? quantidade : -quantidade;

  const mov = {
    id: proximoId++,
    codigoProduto,
    descricao: tipo === "entrada" ? "Entrada de mercadoria" : "Saída de mercadoria",
    quantidade,
  };
  movimentacoes.push(mov);

  return { ...mov, estoqueFinal: produto.estoque };
}

console.log(movimentar(101, "saida", 20));
console.log(movimentar(101, "entrada", 50));
console.log(movimentar(102, "saida", 100));
console.log(movimentar(999, "entrada", 10));
