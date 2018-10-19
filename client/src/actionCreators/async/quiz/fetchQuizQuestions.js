import axios from 'axios';

const fetchQuizQuestions = function(title){
  return axios.get("/find-one-quiz/" + title)
}

export default fetchQuizQuestions;