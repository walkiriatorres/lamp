const btn = document.getElementById('botaoAcao')
const imagem = document.querySelector('img[alt="lampada"]')

let cont = 0

btn.addEventListener('click', function(){
  if(btn.innerHTML === "apagar"){
    imagem.src = "http://i.stack.imgur.com/b983w.jpg"
    btn.innerHTML = "acender"  
  } else if(btn.innerHTML === "acender") {
    cont++
    if (cont === 5) {
      imagem.src = "http://i.stack.imgur.com/MRjsF.jpg"
      btn.innerHTML = "trocar lâmpada"  
    } else {
      imagem.src = "http://i.stack.imgur.com/ybxlO.jpg"
      btn.innerHTML = "apagar"
    }
  } else {
    cont = 0
    imagem.src = "http://i.stack.imgur.com/b983w.jpg"
    btn.innerHTML = "acender" 
  }
})
