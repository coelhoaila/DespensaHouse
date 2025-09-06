const express = require('express')
const app = express()
const port = 3000

class Pessoa {
    constructor (n, i) {
        this.nome = n;
        this.idade = i;
    }

    falar() {
        return `Meu nome é ${this.nome} e eu tenho ${this.idade} anos.` // "return" é pra função retornar a frase depois que execultar
    }
}

class Produto {
    constructor(
        nome, qtd
    ){
        this.nome = nome;
        this.qtd  = qtd;
    }

    adicionar(){
        // enviaria para o banco de dados...
        if (this.nome != undefined)
            if (this.qtd != undefined)
                return true;
            
        return false
    }
}

app.use(express.json())

app.get('/cu', (req, res) =>{
    res.send(`Vá se lascar`)
})

app.post('/cu', (req, res) => {
    var nomeRecebido = req.body
    const declaracaoNome = new Pessoa (nomeRecebido, undefined) //criação do objeto

    // console.log(req)
    res.send(`Voce enviou ${nomeRecebido}, então ${declaracaoNome.falar()}`)
})

app.post('/inserirProduto', (req, res) => {
    console.log(req.body)
    // const [ nome, qtd ] = req.body;
    const nome = req.body.nome
    const qtd = req.body.qtd

    console.log('> Entrou na função inserir produto')
    console.log(req.body)
    console.log(req.body.nome)
    const produto = new Produto(nome, qtd);

    resultado = produto.adicionar();

    if (resultado == true){
        res.send(`Produto inserido com sucesso.`)
    }else{
        res.send(`Erro na inserção. Verifique todos os campos requisitados`)
    }
    
})

app.listen(port, () => {
    console.log(`Escutando porta ${port}`) // console.log é tipo um send que só mostra no terminal
})

// const pessoa = {
//     nome : "Brenio",
//     idade : 21,
//     "falar" : () => { /* comandos da função */ },
// }

