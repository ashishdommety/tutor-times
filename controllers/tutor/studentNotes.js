module.exports = function (req,res){
  let id = req.params.id;
  console.log("the id entered is: " + id);
  let data = {
    "name": "alien",
    "photoURL": "https://via.placeholder.com/100x100",
    "subject": "space science",
    "notes": [
      {
        "date": "01/01/2018",
        "note": "I learned a lot about space science today - enough already!"
      },
      {
        "date": "01/01/2018",
        "note": "I learned a lot about space science today too"
      },
      {
        "date": "01/01/2018",
        "note": "I learned a lot about space science today"
      },
    ]
  }
  res.json(data);
}