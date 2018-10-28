import axios from 'axios';

const findOneQuestion = function(title, question_number){
  return axios.get(`/find-question/${title}/${question_number}`)
}

export default findOneQuestion;