const tamanho = document.querySelector(".tamanho");
const result = document.querySelector("#result");
const checkbox = document.querySelector("#check");
const btnCopy = document.querySelector("#icon");
let arrayOP = [];

btnCopy.addEventListener("click", function () {
  const clipBoard = document.querySelector("#result");
  clipBoard.select();
  document.execCommand("copy");
});

checkbox.addEventListener("click", function () {
  result.value = exec(tamanho.value);
});

// gera uma senha ao abrir a pagina
document.addEventListener("DOMContentLoaded", function (e) {
  document.getElementById("result").value = exec(tamanho.value);
});

// passa o tamanho da senha como parametro
tamanho.addEventListener("keypress", function (e) {
  if (e.which == 13) {
    if (!tamanho.value) return;
    // pass.innerHTML = exec(tamanho.value);
    document.getElementById("result").value = exec(tamanho.value);
  }
});

function exec(num) {
  let maiuscula = document.getElementById("letraMaiuscula").checked;
  let minuscula = document.getElementById("letraMinuscula").checked;
  let simbolos = document.getElementById("simbolos").checked;
  let numero = document.getElementById("numeros").checked;

  if (minuscula) {
    arrayOP.push(getMinuscula);
  }
  if (maiuscula) {
    arrayOP.push(getMaiuscula);
  }
  if (simbolos) {
    arrayOP.push(getSimbolos);
  }
  if (numero) {
    arrayOP.push(getNumeros);
  }

  let pass = "";
  for (let i = 0; i < num; i++) {
    let j = Math.floor(Math.random() * arrayOP.length);
    pass += arrayOP[j]();
  }

  verifica(pass);
  arrayOP = [];
  return pass;
}

function getMaiuscula() {
  let ascii = [[65, 90]];
  return getRandomChar(ascii);
}

function getMinuscula() {
  let ascii = [[97, 122]];
  return getRandomChar(ascii);
}

function getSimbolos() {
  let ascii = [
    [33, 42],
    [63, 64],
  ];
  return getRandomChar(ascii);
}

function getNumeros() {
  let ascii = [[48, 57]];
  return getRandomChar(ascii);
}

function getRandomChar(ascii) {
  let i = Math.floor(Math.random() * ascii.length);
  return String.fromCharCode(
    Math.floor(Math.random() * (ascii[i][1] - ascii[i][0])) + ascii[i][0]
  );
}

function remove(el) {
  if (el.classList.contains("bg-danger")) {
    el.classList.remove("bg-danger");
  } else if (el.classList.contains("bg-warning")) {
    el.classList.remove("bg-warning");
  } else if (el.classList.contains("bg-info")) {
    el.classList.remove("bg-info");
  } else if (el.classList.contains("bg-success")) {
    el.classList.remove("bg-success");
  }
}

function strength(forca) {
  const bar = document.querySelector("#progress");
  remove(bar);
  if (forca < 30) {
    bar.setAttribute("style", "width:20%");
    bar.classList.add("bg-danger");
  } else if (forca >= 30 && forca < 60) {
    bar.setAttribute("style", "width:50%");
    bar.classList.add("bg-warning");
  } else if (forca >= 60 && forca < 80) {
    bar.setAttribute("style", "width:80%");
    bar.classList.add("bg-info");
  } else if (forca >= 80) {
    bar.setAttribute("style", "width:100%");
    bar.classList.add("bg-success");
  }
}

function verifica(senha) {
  let forca = 0;

  if (senha.length >= 4 && senha.length <= 7) {
    forca += 10;
  } else if (senha.length > 7) {
    forca += 25;
  }

  if (senha.length >= 5 && senha.match(/[a-z]+/)) {
    forca += 10;
  }

  if (senha.length >= 6 && senha.match(/[A-Z]+/)) {
    forca += 20;
  }

  if (senha.length >= 7 && senha.match(/[@#$%&;*]/)) {
    forca += 25;
  }

  if (senha.length >= 7 && senha.match(/[0-9]/)) {
    forca += 25;
  }
  if (senha.length > 15) {
    forca += 30;
  }
  strength(forca);
}
