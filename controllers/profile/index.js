/* 
Controllers include:
    - users public profile - READ (This could evolve depending on what info we want to display)
*/

module.exports = function(req,res){
    let data = {
            "name": "John Dow",
            "image": "via.placeholder.com/100x100",
            "subjects": ["english","physics","computer science"],
            "motto": "Keep on learning",
            "goal": "To build the next amazon"
          };
    
    res.json(data);
}