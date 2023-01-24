const express = require('express');
const app = express();

//Dizendo para o Express usar o EJS como View Engine
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    res.render("principal/perfil.ejs")
})

app.listen(8080, ()=> {console.log("App executado com sucesso!")})