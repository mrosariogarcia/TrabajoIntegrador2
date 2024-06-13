let db = require("../database/models/index")

let indexController= {

    home: function(req, res) {
        return res.render('index', {info:db})
    },
}

module.exports = indexController