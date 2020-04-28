const pass = document.querySelector(".geraSenha");
const tamanho = document.querySelector(".tamanho");

let maiuscula = true;
let minuscula = true;
let simbolos = true;
let arrayOP = [];

// passa o tamanho da senha como parametro
tamanho.addEventListener("keypress", function (e) {
  if (e.which == 13) {
    if (!tamanho.value) return;
    pass.innerHTML = exec(tamanho.value);
  }
});

function exec(num) {
  if (minuscula) {
    arrayOP.push(getMinuscula);
  }
  if (maiuscula) {
    arrayOP.push(getMaiuscula);
  }
  if (simbolos) {
    arrayOP.push(getSimbolos);
  }
  if (getNumeros) {
    arrayOP.push(getNumeros);
  }

  let teste = "";
  for (var i = 0; i < num; i++) {
    teste += arrayOP[i]();
  }
  console.log(teste);
  verifica(teste);
  return teste;
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
function changeClass(el, antiga, nova) {
  el.classList.remove(antiga);
  el.classList.add(nova);
}

function strength(forca) {
  const bar = document.querySelector(".t");
  console.log(bar);
  if (forca < 30) {
    bar.setAttribute("style", "width:20%");
    bar.setAttribute("aria-valuenow", "20");
    bar.classList.add("bg-danger");
  } else if (forca >= 30 && forca < 60) {
    bar.setAttribute("style", "width:50%");
    bar.setAttribute("aria-valuenow", "50");
    changeClass(bar, "bg-danger", "bg-warning");
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

  if (senha.match(/([1-9]+)\1{1,}/)) {
    forca += -25;
  }
  console.log(forca);
  strength(forca);
}
