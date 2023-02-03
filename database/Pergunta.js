const Sequelize = require('sequelize');
const connection = require('./database')

//criando model da tabela perguntas
const Pergunta = connection.define('perguntas',{
    titulo: {
        type: Sequelize.STRING,
        allowNull: false //para não receber campo nulo
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

//sincroniza com o banco, não força ficar recriando tabelas e usa o then para confirmar a conexão
Pergunta.sync({force: false}).then(() => {})