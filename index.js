const express = require('express');
const app = express();

//Dizendo para o Express usar o EJS como View Engine
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get("/perguntar", function(req, res){
    res.render("perguntar")
})

app.get("/", function(req, res){

    res.render("index") 
})

app.post("/salvarformulario", function(req, res){
    res.send("Formulário salvo!")
})

app.listen(8080, ()=> {console.log("App executado com sucesso!")})