// Exercício 3 – Juros por atraso
// Para rodar: node ex3_juros.js

// vencimento no formato "AAAA-MM-DD". Juros simples de 2,5% ao dia.
function calcularJuros(valor, vencimento, hoje = new Date()) {
  const umDia = 24 * 60 * 60 * 1000;

  // compara só as datas (dia, mês e ano), sem se importar com a hora
  const [ano, mes, dia] = vencimento.split("-").map(Number);
  const dataVenc = Date.UTC(ano, mes - 1, dia);
  const dataHoje = Date.UTC(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());

  // se ainda não venceu, os dias de atraso são 0
  const diasAtraso = Math.max(0, Math.round((dataHoje - dataVenc) / umDia));

  const juros = Math.round(valor * 0.025 * diasAtraso * 100) / 100;
  const total = Math.round((valor + juros) * 100) / 100;
  return { diasAtraso, juros, total };
}

function reais(numero) {
  return numero.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// Calcula e mostra o resultado na tela.
function mostrar(valor, vencimento) {
  const r = calcularJuros(valor, vencimento);

  console.log("Valor: " + reais(valor) + " | Vencimento: " + vencimento);
  if (r.diasAtraso === 0) {
    console.log("Sem atraso, então não há juros. Total: " + reais(valor));
  } else {
    console.log(
      r.diasAtraso + " dia(s) de atraso | Juros: " + reais(r.juros) +
      " | Total: " + reais(r.total)
    );
  }
  console.log("");
}

// ---- Exemplos de uso (pode trocar os valores e as datas para testar) ----
mostrar(1000, "2026-10-01");     // conta vencida
mostrar(250.50, "2026-09-20");   // conta vencida
mostrar(500, "2099-01-01");      // ainda não venceu
