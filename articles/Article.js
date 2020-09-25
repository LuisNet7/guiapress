const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");

const Article = connection.define('articles',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull:false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Category.hasMany(Article);//Uma Categoria tem muitos artigos 1-p-m hasMany()
Article.belongsTo(Category);//Um artigo pertence a uma categoria 1-p-1 belongsTo()

//Article.sync({force: true}); //executado somente uma vez para criar as tabelas e suas relações

module.exports = Article;
