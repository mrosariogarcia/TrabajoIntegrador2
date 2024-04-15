let db = require("../db/db")

let indexController= {

    home: function(req, res) {
        return res.render('index', {info:db})
    },
}

module.exports = indexController