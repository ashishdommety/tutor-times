module.exports = function(req,res){
  let data =  [
      {
        "title": "Java",
        "date": "9-12-2018",
        "content": "Learned the basics of Java today. It was very insightful. Now I know the different data types and how object oriented programming works."
      },
      {
        "title": "Discrete Maths",
        "date": "9-11-2018",
        "content": "Still confused and don't know what all of this means... Hoping to learn soon."
      },
      {
        "title": "Random",
        "date": "9-10-2018",
        "content": "Hoping to learn more soon."
      }
  ];

  res.json(data);
}