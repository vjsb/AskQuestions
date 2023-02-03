const Sequelize = require ('sequelize');

//nome do banco - usuario - senha
const connection = new Sequelize('askquestions', 'root', 'coriolano01', {
    host: 'localhost', //servidor
    dialect: 'mysql' //gerenciador de banco usado
})

module.exports = connection;