//importa módulo
const Sequelize = require('sequelize')

//conecta o sequelize com o banco "guiaperguntas"
//com user "root" e senha ""
const connection = new Sequelize('guiaperguntas', 'root', '', {
    //servidor
    host: 'localhost',
    //qual o tipo de banco
    dialect: 'mysql'
})

module.exports = connection