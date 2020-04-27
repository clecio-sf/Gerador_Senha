let ascii = [48, 57]
var char = Math.floor(Math.random() * ascii.length)
let pass
function a(num) {
  for (var i = 0; i < num; i++) {
    pass += String.fromCharCode(Math.floor(Math.random() * (ascii[char][1] - ascii[char][0])) + ascii[char][0])
  }
  return this.pass;
}

console.log(pass)