const TAXA_DIA = 0.025;

function calcularJuros(valor, dataVencimento, hoje = new Date()) {
  const [ano, mes, dia] = dataVencimento.split("-").map(Number);
  const vencimento = new Date(ano, mes - 1, dia);

  const hojeSemHora = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());

  const MS_POR_DIA = 1000 * 60 * 60 * 24;
  const diasAtraso = Math.round((hojeSemHora - vencimento) / MS_POR_DIA);

  if (diasAtraso <= 0) return { diasAtraso: 0, juros: 0 };
  return { diasAtraso, juros: valor * TAXA_DIA * diasAtraso };
}

const r = calcularJuros(1000, "2026-09-28");
console.log(`Dias de atraso: ${r.diasAtraso}`);
console.log(`Juros: R$ ${r.juros.toFixed(2)}`);
console.log(`Total a pagar: R$ ${(1000 + r.juros).toFixed(2)}`);
