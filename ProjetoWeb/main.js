(() => {
    /*
    var cards = document.getElementById("cards")

    for(let i=0; i<10; i++){
        card1 = document.createElement("div")
        card1.classList.add("card")
        card1.innerText = i.toString()
        cards.appendChild(card1)
    }*/

    /*
    var form = document.forms[0]
    var cards = document.getElementById("cards")

    form.addEventListener("click", e => {
        card1 = document.createElement("div")
        card1.classList.add("card")
        card1.innerText = "Foi enviado"
        cards.appendChild(card1)
    })*/

    var form = document.forms[0],
        cards = document.getElementById("cards"),
        texto = document.querySelector(".form__caixa")
    
    form.addEventListener("submit", e => {
        var card1 = document.createElement("div")
    
        card1.classList.add("card")
        card1.innerText = texto.value
        cards.appendChild(card1)
    
        texto.value = ""  
    })()

})()