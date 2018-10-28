import axios from 'axios';

const editOneQuestion = function(title, qNum, updates){
  return axios.post(`/edit-question/${title}/${qNum}`, updates)
}

export default editOneQuestion;