const db = require("../../models");

module.exports = function(req,res){
    let g_id = "123abc"; //placeholder for google id
    db.Note.findAll({
      where: {
        google_id: g_id
      }
    }).then(function(data){
        res.json(data);
    })    
};