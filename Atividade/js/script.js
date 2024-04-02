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
  
};

const exercicio11 = () => {
  document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade</h2>";

  for (let contador = 3; contador < 100; contador += 4) {
    resposta.innerHTML += ` #${contador} `;
    contador--;
  }
};
