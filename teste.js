
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
  let char = Math.floor(Math.random() * asciiMinusculas.length)
  return String.fromCharCode(Math.floor(Math.random() * (asciiMinusculas[char][1]
    - asciiMinusculas[char][0])) + asciiMinusculas[char][0])
}
