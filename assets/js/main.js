const pass = document.querySelector('.geraSenha')
const tamanho = document.querySelector('.tamanho')
let letras = 'abcdefghijklmnopqrtuwxyz'


// tamanho.addEventListener('keypress', function (e) {
//   if (e.keycode === 13) {
//     if (!tamanho.value) return
//     makePass(tamanho.value)
//   }
// })

// pega todos os clicks
tamanho.addEventListener('keypress', function (e) {
  if (e.which == 13) {
    console.log(tamanho.value)
  }
})


function makePass(num) {
  var result = '';
  for (var i = 0; i < num; i++) {
    result += letras.charAt(Math.floor(Math.random() * letras.length));
  }
  return result; pass.innerHTML = makePass(tamanho.value)
}
