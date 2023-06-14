let operacao = "";
let valor1 = null;
let valor2 = null;
let resultado = null;

function adicionarNumero(botao) {
  const valor = botao.value;
  const display = document.getElementById("resultado");

  if (resultado !== null) {
    limpar();
  }

  if (display.value === "0") {
    display.value = valor;
  } else {
    display.value += valor;
  }

  if (operacao === "") {
    valor1 = Number(display.value);
  } else {
    valor2 = Number(display.value);
  }
}

function adicionarDecimal(botao) {
  const display = document.getElementById("resultado");

  if (resultado !== null) {
    limpar();
  }

  if (display.value.indexOf(".") === -1) {
    display.value += ".";
  }
}

function adicionarOperador(botao) {
  const display = document.getElementById("resultado");

  if (resultado !== null) {
    valor1 = resultado;
    resultado = null;
  } else if (operacao !== "" && valor2 !== null) {
    calcular();
  }

  operacao = botao.value;
  display.value = "0";
}

function calcular() {
  const display = document.getElementById("resultado");

  if (operacao === "+") {
    resultado = valor1 + valor2;
  } else if (operacao === "-") {
    resultado = valor1 - valor2;
  } else if (operacao === "*") {
    resultado = valor1 * valor2;
  } else if (operacao === "/") {
    resultado = valor1 / valor2;
  }

  display.value = resultado.toFixed(2);
  operacao = "";
  valor1 = resultado;
  valor2 = null;
}

function limpar() {
  const display = document.getElementById("resultado");

  operacao = "";
  valor1 = null;
  valor2 = null;
  resultado = null;
  display.value = "0";
}
