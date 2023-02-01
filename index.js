const express = require('express');
const app = express();

//Dizendo para o Express usar o EJS como View Engine
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get("/:nome/:lang", function(req, res){
    var nome = req.params.nome;
    var lang = req.params.lang;
    exibirMsg = true;

    var produtos = [
        {nome: "Coca-Cola", preco: 4.5},
        {nome: "Doritos", preco: 3},
        {nome: "Leite", preco: 4.3},
        {nome: "Nescau", preco: 5},
        {nome: "Açucar", preco: 7.3},
    ]

    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "Ask Company",
        localizacao: "São Paulo",
        msg: exibirMsg,
        produtos: produtos
    }) 
})

app.listen(8080, ()=> {console.log("App executado com sucesso!")})