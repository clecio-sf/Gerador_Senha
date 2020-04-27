const pass = document.querySelector('.geraSenha')
const tamanho = document.querySelector('.tamanho')
let letras = 'abcdefghijklmnopqrtuwxyz'


// pega todos os clicks
document.addEventListener('keypress', function (e) {
  const elemento = e.target
  if (e.which == 13) {
    if (elemento.classList.contains('tamanho')) {
      function makePass(num) {
        var result = '';
        for (var i = 0; i < num; i++) {
          result += letras.charAt(Math.floor(Math.random() * letras.length));
        }
        return result;
      }
      pass.innerHTML = makePass(tamanho.value)
    }
  }
  if (elemento.classList.contains('minuscula')) {
    console.log('clicou')
  }

  if (elemento.classList.contains('numero')) {
    console.log('clicou')
  }

  if (elemento.classList.contains('simbolo')) {
    console.log('clicou')
  }
})

