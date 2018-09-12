module.exports = function (req,res){
  let data = {
    "associates": [
      {
        "name": "person",
        "photoURL": "https://via.placeholder.com/100x100",
        "subjects":[
          "physics",
          "math",
          "english"
        ],
        "nextClass": "August 29th, 2018"
      },
      {
        "name": "human",
        "photoURL": "https://via.placeholder.com/100x100",
        "subjects":[
          "chemistry",
          "math",
          "french"
        ],
        "nextClass": "August 27th, 2018"
      },
      {
        "name": "alien II",
        "photoURL": "https://via.placeholder.com/100x100",
        "subjects":[
          "space science",
          "math",
          "history of astroids"
        ],
        "nextClass": "September 29th, 2018"
      }
    ]
  }

  res.json(data);
}