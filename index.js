const express = require('express');
const app = express();

//Dizendo para o Express usar o EJS como View Engine
app.set('view engine', 'ejs');

app.get("/:nome/:lang", function(req, res){
    var nome = req.params.nome;
    var lang = req.params.lang;
    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "Ask Company",
        localizacao: "São Paulo"
    }) 
})

app.listen(8080, ()=> {console.log("App executado com sucesso!")})