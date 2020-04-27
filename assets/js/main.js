const pass = document.querySelector('.geraSenha')
const tamanho = document.querySelector('.tamanho')

tamanho.addEventListener('keypress', function (e) {
  if (e.which == 13) {
    if (!tamanho.value) return
    pass.innerHTML = makePass(tamanho.value)
  }
})

// pega todos os clickes no checkbox
document.addEventListener('click', function (e) {
  const elemento = e.target
  if (elemento.classList.contains('minuscula')) {
    console.log('clicou ')
  }
})

function makePass(num) {
  let result = ''
  for (var i = 0; i < num; i++) {
    result += getRandomChar()
  }
  return result
}
console.log(makePass(10))

function getRandomChar() {
  /*
 *    array contendo indices  da tabela ascii para retornar caracteres selecionados
 *    [48, 57] = numeros
 *    [64, 90] = @ e letras maiusculas
 *    [97, 122] = letras minusculas
 */
  let asciiMinusculas = [[97, 122]]
  let i = Math.floor(Math.random() * asciiMinusculas.length);
  return String.fromCharCode(Math.floor(Math.random() * (asciiMinusculas[i][1]
    - asciiMinusculas[i][0])) + asciiMinusculas[i][0])
}
