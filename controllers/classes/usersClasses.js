const db = require("../../models");

module.exports = function(req,res){
  let g_id = "123abc"; //placeholder for req.body.g_id
    db.Class.findAll({
      where: {
        google_id: g_id
      }
    }).then(function(data){
        res.json(data);
    }).catch((err) => console.log(err));
};