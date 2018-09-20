const db = require("../../models");
console.log(db);
module.exports = function(req,res){
    db.User.findAll({}).then(function(data){
        res.json(data);
    })    
};