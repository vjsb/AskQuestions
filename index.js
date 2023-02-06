const bodyParser = require('body-parser');
const express = require('express');
const connection = require('./database/database');
const app = express();
const Pergunta = require('./database/Pergunta')

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
//render aponta para a pag que possui o arquivo criado em views
app.get("/perguntar", function(req, res){
    res.render("perguntar")
})

app.get("/", function(req, res){
    //findAll para buscar todas as perguntas, raw=true para só trazer infos importantes e then gerando a lista
    Pergunta.findAll({raw: true, order: [
        ['id', 'DESC'] //ordenando id por ordem decrescente
    ]}).then(perguntas => {
        res.render("index",{
            perguntas: perguntas
        })
    })
})

app.post("/salvarformulario", function(req, res){
    //conseguimos usar o body aqui por conta do BodyParser, que busca do que enviamos no HTML do formulario
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    //método create usado para salvar no banco
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() =>{
        res.redirect('/');
    })
})

app.get("/pergunta/:id", function(req, res){
    //método para buscar a pergunta pelo id usando findOne
    var id = req.params.id;
    Pergunta.findOne({
        where: {id: id}
    }).then(pergunta => {
        if(pergunta != undefined){
            res.render("pergunta", {
                pergunta: pergunta
            })
        }else{
            res.redirect('/')
        }
    })
})

app.listen(8080, ()=> {console.log("App executado com sucesso!")})