module.exports = function (req,res){
  let id = req.params.id;
  console.log('the id is: '+ id);
  let data = {
      "name": "alien",
      "photoURL": "https://via.placeholder.com/100x100",
      "subjects":[
        "space science",
        "math",
        "history of astroids"
      ],
      "nextClass": "September 29th, 2018"
  }
res.json(data);
}