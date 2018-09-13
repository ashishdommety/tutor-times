module.exports = function (req,res){
  let data = {
        "name": "Jane Doe II",
        "date": "August 30th, 2018",
        "day": "Thursday",
        "time": "4:30pm",
        "photoURL": "https://via.placeholder.com/200x200"
  }

  res.json(data);
}