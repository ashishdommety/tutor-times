const initialState = {
  "isTutor": true,
  // do we really need this? What about the last object on the classes array.
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
      "date": "19-25-2018",
      "day": "Tuesday",
      "time": "10:40am",
      "name": "Ash",
      "photoURL": "https://via.placeholder.com/100x100"
    }
  ],
  "notes":[
    {
      "title": "",
      "date": "",
      "content": ""
    }
  ],
  "students": ["person"], // wouldn't it be easier to use associates?
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