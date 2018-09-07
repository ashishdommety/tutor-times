/* All of these controller functions are placeholders and are meant to be used for the Tutor View */

module.exports = {
  nextClass: function(req,res){
    let data = {
      "home": {
        "nextStudent":{
          "name": "Jane Doe",
          "date": "August 30th, 2018",
          "day": "Thursday",
          "time": "4:30pm",
          "photoURL": "https://via.placeholder.com/200x200"
        }
      }
    }

    res.send(data);
  },
  allStudents: function(req,res){
    let data = {
      "students": [
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
          "name": "alien",
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
  },
  getOneStudent: function(req,res){
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
  res.send(data);
  },
  getStudentNotes: function(req,res){
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
    res.send(data);
  }
}