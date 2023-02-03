const bodyParser = require('body-parser');
const express = require('express');
const connection = require('./database/database');
const app = express();
const perguntaModel = require('./database/Pergunta')

//database
//authenticate para realizar autenticação no banco e then para caso de certo
connection.authenticate()
    .then(() => {
        console.log("Conexão realizada com sucesso!")
    })
    .catch((msgError) => {
        console.log(msgError);
    })

//Dizendo para o Express usar o EJS como View Engine
app.set('view engine', 'ejs');
app.use(express.static('public'))

//BodyParser
//traduz os dados enviados do formulario em uma estrutura javascript que consiga usar no back-end
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Rotas
app.get("/perguntar", function(req, res){
    res.render("perguntar")
})

app.get("/", function(req, res){

    res.render("index") 
})

app.post("/salvarformulario", function(req, res){
    //conseguimos usar o body aqui por conta do BodyParser, que busca do que enviamos no HTML do formulario
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send("Formulário salvo! Titulo: " + titulo + " " + " Descricao: " + descricao)
})

app.listen(8080, ()=> {console.log("App executado com sucesso!")})