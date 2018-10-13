import axios from 'axios';

const fetchAllQuizzes = function(){
  return axios.get("/all-quizzes")
}

export default fetchAllQuizzes;