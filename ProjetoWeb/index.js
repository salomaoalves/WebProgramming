/*const ANO = 2018
class Pessoa {
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade || 18
    }

    dizOi(){
        console.log("Oi Sou " + this.nome)
    }

    set anoNascimento(x){
        this.idade = ANO - x
    }

    get anoNascimento(){
        return ANO - this.idade;
    }
}
let jorge  = new Pessoa("Jorge")
jorge.dizOi()
console.log(jorge.anoNascimento)
*/

const http = require("http")

function onConnection(req,res){
    res.writeHead(200)
    res.write("Ola :)")
    res.end()
}

var app = http.createServer(onConnection)
app.listen(8080)
