const express = require('express')
const app = express()
const port = 3000

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


app.post('/api/addproduto', (req, res) => {
    
    var produto = {
            nome : "",
            qtd  : 1.0,
            un   : "",
            vencimento : new Date(), // vencimento é uma representação da classe Date que ta dentro do js
            local : "",
            foto : "",
            classificacao : "",
            subclassificacao : "",
            freqNumero : 1.0,
            freqTempo : ""
    }

    var dadosRecebidos = req.body
    produto.nome = dadosRecebidos.nome
    produto.qtd = dadosRecebidos.qtd
    produto.un = dadosRecebidos.un
    produto.vencimento = dadosRecebidos.vencimento
    produto.local = dadosRecebidos.local
    produto.foto = dadosRecebidos.foto
    produto.classificacao = dadosRecebidos.classificacao
    produto.subclassificacao = dadosRecebidos.subclassificacao
    produto.freqNumero = dadosRecebidos.freqNumero
    produto.freqTempo = dadosRecebidos.freqTempo

    console.log(produto)
    res.send('inserido')

    // if (resultado == true){
    //     res.send(`Produto inserido com sucesso.`)
    // }else{
    //     res.send(`Erro na inserção. Verifique todos os campos requisitados`)
    // }
    
})

app.listen(port, () => {
    console.log(`Escutando porta ${port}`) // console.log é tipo um send que só mostra no terminal
})

