const db = require("../../models");

module.exports = function(req,res){
    db.Class.findAll({})
        .then(function(data){
            res.json(data);
        }).catch(err => console.log(err));    
};