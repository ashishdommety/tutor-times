import axios from "axios";

const createNewQuestion = function(questionData){
  return axios.post("/create-question", questionData)
}

export default createNewQuestion;