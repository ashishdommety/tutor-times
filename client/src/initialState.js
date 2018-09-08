const initialState = {
  "isTutor": false,
  "home": {
    "nextStudent":{
      "name": "",
      "date": "",
      "day": "",
      "time": "",
      "photoURL": ""
    }
  },
  "classes": [
    {
      "date": "",
      "day": "",
      "time": "",
      "name": "",
      "photoURL": ""
    }
  ],
  "notes":[
    {
      "title": "",
      "date": "",
      "content": ""
    }
  ],
  "students": ["person"],
  "associates":[
    {
      "name": "",
      "photoURL": "",
      "subjects": [],
      "notes": [{
        "title": "",
        "date": "",
        "content": ""
      }]
    }
  ]
};

export default initialState;