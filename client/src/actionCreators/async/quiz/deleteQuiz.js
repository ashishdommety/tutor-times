import axios from 'axios';

const deleteQuiz = (title) => axios.post(`/delete-quiz/${title}`);

export default deleteQuiz;