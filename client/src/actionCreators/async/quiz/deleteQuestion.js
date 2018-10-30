import axios from 'axios';

const deleteOneQuestion = (title, question_number) => {
  return axios.post(`/delete-question/${title}/${question_number}`);
}

export default deleteOneQuestion;