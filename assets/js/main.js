const pass = document.querySelector(".geraSenha");
const tamanho = document.querySelector(".tamanho");

let maiuscula = true;
let minuscula = true;
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

  let teste = "";
  for (var i = 0; i < num; i++) {
    teste += arrayOP[i]();
  }
  console.log(teste);
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
