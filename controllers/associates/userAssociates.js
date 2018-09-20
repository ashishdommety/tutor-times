const db = require("../../models");

module.exports = function(req,res){
    let g_id = "123abc"; //placeholder for google id
    db.Associate.findAll({
      where: {
        google_id: g_id
      }
    }).then(async function(data){
        let allAssociates = [];
        for(let i=0; i<data.length; i++){
          await db.User.find({
            where: {
              google_id: data[i].associate_google_id
            }
          }).then(function(data){
            allAssociates.push(data);
          })
        }
        res.json(allAssociates);
    })    
};