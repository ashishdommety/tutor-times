import axios from 'axios';

const fetchQuizQuestions = function(id){
  return axios.get("/find-one-quiz/" + id)
}

export default fetchQuizQuestions;