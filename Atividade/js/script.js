const exercicio1 = () => {
  document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade</h2>";
  for (let i = 1; i < 11; i++) {
    document.getElementById("resposta").innerHTML += `#${i} `;
  }
};

const exercicio2 = () => {
  let num = document.getElementById("num").value;

  resultado.innerHTML = "";
  for (let i = 0; i < num; i += 2) {
    document.getElementById("resultado").innerHTML += `${i} `;
  }
};

const exercicio3 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");

  if (num <= 1) {
    error.innerHTML = `O número ${num} não é primo`;
    result.innerHTML = "";
  } else {
    error.innerHTML = "";
    result.innerHTML = "";
    let primo = true;

    for (let i = 2; i < num; i++) {
      if (num % i == 0) primo = false;
    }

    primo
      ? (result.innerHTML = `O número ${num} é primo`)
      : (error.innerHTML = `O número ${num} não é primo`);
  }
};

const exercicio4 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");

  if (num <= 0) {
    error.innerHTML = `O número ${num} não é válido`;
    result.innerHTML = "";
  } else {
    error.innerHTML = "";
    result.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
      result.innerHTML += `${i} x ${num} = ${num * i} </br>`;
    }
  }
};

const exercicio5 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");

  if (num <= 0) {
    error.innerHTML = `O número ${num} não é válido`;
    result.innerHTML = "";
  } else {
    error.innerHTML = "";
    result.innerHTML = "";
  }
  let contador = 1;

  while (contador < num) {
    result.innerHTML += ` ${contador} `;
    contador += 2;
  }
};

const exercicio6 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");

  if (num < 0) {
    error.innerHTML = `O número ${num} não é válido`;
    result.innerHTML = "";
  } else {
    error.innerHTML = "";
    result.innerHTML = "";
  }

  let contador = 0;
  let soma = 0;

  while (contador <= num) {
    if (contador % 2 == 0) {
      soma += contador;
    }
    contador++;
  }
  result.innerText = `A soma dos números pares é ${soma}`;
};

const exercicio7 = () => {
  document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade</h2>";
  let contador = 10;

  while (contador > 0) {
    resposta.innerHTML += ` #${contador} `;
    contador -= 1;
  }
};

const exercicio8 = () => {
  let palavra = document.getElementById("palavra").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  error.innerText = "";
  result.innerText = "";

  let inversa = "";

  for (let i = 1; i <= palavra.length; i++) {
    inversa += palavra.charAt(palavra.length - i);
  }

  palavra.toLowerCase() == inversa.toLowerCase()
    ? (result.innerText = "A palavra é um palíndromo!")
    : (error.innerText = "A palavra não é um palíndromo!");
};

const exercicio9 = () => {
  let soma = 0;

  for (let contador = 1; contador < 101; contador++) {
    if (contador % 1 == 0) {
      soma += contador;
    }
  }
  resposta.innerHTML = `<h2>Resposta da Atividade</h2> <br> A soma dos números é ${soma}`;
};

const exercicio10 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");

  if (num < 0) {
    error.innerHTML = `O número ${num} não é válido`;
    result.innerHTML = "";
  } else {
    error.innerHTML = "";
    result.innerHTML = "";
  }
  let soma = 0;
  let contador = 0;
  while (contador <= num) {
    soma += contador;
    contador++;
  }
  let media = soma / contador;
  result.innerHTML = `A soma é ${contador} </br> A média é ${media}`;
};

const exercicio11 = () => {
  document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade</h2>";

  for (let contador = 3; contador < 100; contador += 4) {
    resposta.innerHTML += ` #${contador} `;
    contador--;
  }
};

const exercicio12 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let soma = 0;

  result.innerText = "";

  if (num <= 9) {
    error.innerHTML = `Informe um número válido`;
  } else {
    for (let i = 1; i <= num.length; i++) {
      soma += parseInt(num.charAt(num.length - i));
    }
    result.innerHTML = soma;
  }
};

const exercicio13 = () => {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");

  result.innerText = "";
  error.innerText = "";
  if (num1 >= num2 || num1 < 1) {
    error.innerHTML = `Informe números válidos`;
  } else {
    for (let i = num1; i <= num2; i++) {
      let teste = verificarPrimo(i);
      if (teste) {
        result.innerText += ` ${i}`;
      }
    }
  }
};

const verificarPrimo = (num) => {
  let primo = true;

  for (let i = 2; i < num; i++) {
    if (num % i == 0) primo = false;
  }

  return primo;
};

const exercicio14 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  if (num1 <= 0 || num2 <= 0) {
    document.getElementById("erro").innerText = "Digite um valor maior que 0";
    document.getElementById("resultado").innerText = ``;
  } else {
    document.getElementById("resultado").innerText = `A área do retângulo é ${
      num1 * num2
    }`;
    document.getElementById("erro").innerText = "";
  }
};

const exercicio15 = () => {
  let palavra = document.getElementById("palavra").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");

  let vogais = "";
  let consoantes = "";
  let nrLetras = palavra.length;

  palavra = palavra.toLowerCase();
  for (let i = 0; i < nrLetras; i++) {
    if (
      palavra[i] == "a" ||
      palavra[i] == "e" ||
      palavra[i] == "i" ||
      palavra[i] == "o" ||
      palavra[i] == "u"
    ) {
      vogais += ` ${palavra[i]}`;
    } else {
      consoantes += ` ${palavra[i]}`;
    }
  }
  result.innerText = `Vogais: ${vogais} - Consoantes: ${consoantes} `;
};

const exercicio16 = () => {
  let num1 = document.getElementById("num1").value;
  if (num1 <= 0) {
    document.getElementById("erro").innerText = "Digite um valor maior que 0";
    document.getElementById("resultado").innerText = ``;
  } else {
    document.getElementById("resultado").innerText = `A área do círculo é ${
      3.14 * num1 ** 2
    }`;
    document.getElementById("erro").innerText = "";
  }
};

const exercicio17 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  if (num1 <= 0 || num2 <= 0) {
    document.getElementById("erro").innerText = "Digite um valor maior que 0";
    document.getElementById("resultado").innerText = ``;
  } else {
    document.getElementById("resultado").innerText = `A área do retângulo é ${
      (num1 * num2) / 2
    }`;
    document.getElementById("erro").innerText = "";
  }
};

const exercicio18 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let num3 = document.getElementById("num3").value;
  if (num1 <= 0 || num2 <= 0 || num3 <= 0) {
    document.getElementById("erro").innerText = "Digite um valor maior que 0";
    document.getElementById("resultado").innerText = ``;
  } else {
    document.getElementById("resultado").innerText = `A área do trapézio é ${
      ((parseInt(num1) + parseInt(num2)) * parseInt(num3)) / 2
    }`;
    document.getElementById("erro").innerText = "";
  }
};

const exercicio19 = () => {
  let data = document.getElementById("data").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  let dataNasc = new Date(data);
  let dataAtual = new Date();
  let diferenca = dataAtual.getTime() - dataNasc.getTime();
  const idade = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));

  if (data == "") {
    error.innerText = `Digite uma data válida`;
  } else {
    error.innerText = "";
    result.innerText = `A idade é de ${idade}`;
  }
};

const inverterFrase = (frase) => {
  const palavras = frase.split(" ");
  return palavras.reverse().join(" ");
};

const exercicio20 = () => {
  let frase = document.getElementById("frase").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");

  result.innerText = "";
  error.innerText = "";
  let palavras = frase.split(" ");

  if (frase == "") {
    error.innerText = `Digite uma frase válida`;
  } else {
    result.innerHTML = `${palavras.reverse().join(" ")}`;
  }
};

const exercicio21 = () => {
  let frase = document.getElementById("frase").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");

  result.innerText = "";
  error.innerText = "";
  let novoTexto = frase.split(" ");

  if (frase == "") {
    error.innerText = `Informe uma frase válida`;
  } else {
    result.innerText = `${novoTexto.join(" ")}`;
  }
};

var soma = 0;
const exercicio22 = () => {
  let error = document.getElementById("erro");
  let resultado = document.getElementById("resultado");
  let valor = parseInt(document.getElementById("num").value);

  error.innerText = "";
  resultado.innerText = "";

  if (valor <= 0) {
    error.innerText = "Insira um número válido";
  } else if (soma <= 100) {
    error.innerText = "";
    soma += valor;
    resultado.innerText = `#${soma}`;
  } else {
    error.innerText = `Soma total: ${soma}`;
  }
};

const exercicio23 = () => {
  let resultado = document.getElementById("resultado");
  let error = document.getElementById("erro");

  resultado.innerHTML = "";

  let frase = document.getElementById("frase").value;
  let palavra = document.getElementById("palavra").value;
  let palavras = frase.split(" ");

  let contar = 0;

  if (frase == "" || palavra == "") {
    error.innerText = `Preencha os campos corretamente`;
  } else {
    for (let i = 0; i <= palavras.length; i++) {
      if (palavras[i] == palavra) {
        contar++;
      }
      error.innerHTML = "";
      resultado.innerText = `A palavra ${palavra} aparece ${contar} vezes`;
    }
  }
};

const exercicio24 = () => {
  let frase = document.getElementById("frase").value.trim();
  let resultado = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let palavras = frase.split(" ");

  let fraseTitleCase = palavras
    .map((palavra) => {
      return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
    })
    .join(" ");

  if (frase == "") {
    error.innerText = `Escreva uma frase`;
  } else {
    error.innerHTML = "";
    resultado.innerText = fraseTitleCase;
  }
};

const exercicio25 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let num3 = document.getElementById("num3").value;
  let resultado = document.getElementById("resultado");
  let error = document.getElementById("erro");

  resultado.innerText = "";
  error.innerText = "";

  let numeros = [num1, num2, num3];

  numeros.sort((a, b) => a - b);

  if (num1 == "" || num2 == "" || num3 == "") {
    error.innerText = `Escreva números válidos`;
  } else {
    error.innerText = "";
    resultado.innerText = numeros;
  }
};
