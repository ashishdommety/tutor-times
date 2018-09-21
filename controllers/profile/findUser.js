const db = require("../../models");

module.exports = function(req,res){
    let g_id = "123"; // to be replaced by req.body.g_id
    db.User.findOne({
      where: {
        google_id: g_id
      }
    }).then(function(data){
        data === null ? res.json({path:"/sign-up"}) : res.json(data);
    })    
};