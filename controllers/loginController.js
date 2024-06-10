const db = require('../database/models');
const users = db.User
const op = db.Sequelize.Op;

let loginController={
    
    index:function(req,res){
        return res.render('login')
    }

}

module.exports= loginController