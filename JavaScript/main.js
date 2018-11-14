var img = document.getElementsByClassName("foto")
img[0].addEventListener("mouseout", e => {
    img[0].src='LA.jpg'
})

var img2 = document.querySelector(".foto")
img2.addEventListener("mouseenter", e => {
    img2.src='Udi.jpg'
})

function clickLink(){
    alert('Voce nao sera redirecioando')
    return false
}

function clickBotao(){
    alert('Voce abertou o botao Add')
}