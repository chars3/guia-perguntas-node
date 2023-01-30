//Iporta o sequelize e connection
const Sequelize = require('sequelize')
const connection = require('./database')

//CRIA TABELA 'pergunta'
const Pergunta = connection.define('pergunta', {
    //nome do campo
    titulo: {
        //define tipo do campo 
        type: Sequelize.STRING,
        //impede que o campo receba valores nulos
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

//Sincroniza a criação da tabela com o banco
//"force: false" serve para que não seja forçado a criação de uma tabela caso ela já exista
Pergunta.sync({force: false}).then(() => {
    console.log('Tabela criada')
})

module.exports = Pergunta