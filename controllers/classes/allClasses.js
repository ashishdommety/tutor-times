module.exports = function(req,res){
  let data = [
    {
      "name": "Jane Doe I",
      "date": "08-29-2018",
      "day": "Thursday",
      "time": "4:30pm",
      "photoURL": "https://via.placeholder.com/200x200"
    },
    {
      "name": "Jane Doe II",
      "date": "08-30-2018",
      "day": "Thursday",
      "time": "4:30pm",
      "photoURL": "https://via.placeholder.com/200x200"
    },
    {
      "name": "Jane Doe III",
      "date": "08-31-2018",
      "day": "Thursday",
      "time": "4:30pm",
      "photoURL": "https://via.placeholder.com/200x200"
    }
  ]

  res.json(data);
}