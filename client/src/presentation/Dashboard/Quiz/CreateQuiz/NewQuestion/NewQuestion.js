import React, {Component} from 'react';
import './NewQuestion.css';
import createQuestion from '../../../../../actionCreators/async/quiz/createQuestion';

class NewQuestion extends Component{
  constructor(props){
    super(props);
    this.state = {
      google_id: localStorage.google_id,
      quiz_id: "9430",
      question_number: 1,
      image: "",
      title: this.props.quiz.title,
      grade: this.props.quiz.grade,
      difficulty: this.props.quiz.difficulty,
      score: "",
      question: "",
      answer: "",
      opt1: "",
      opt2: "",
      opt3: "",
      opt4: ""
    }
  }

  submitQuestion = (e) => {
    e.preventDefault();
    // send ajax request
    createQuestion(this.state)
      .then(result => {
        console.log(result.data);
        this.props.incrementQuestionNumber();
        this.setState({
          question_number: this.props.count + 1
        });
        console.log("written to db")
      }).catch(err => console.log(err));
    // once it's returned
    // clear input fields
    // increment question number
  }
  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  render(){
    return(
      <div>
        {this.state.question_number > this.props.quiz.questionAmount ? <p>You've completed creating your test!</p> :
        <div className="newQuestionForm">
          <h3>Enter Question Details</h3>
          <form>
            <input placeholder="question" className="questionInput" name="question" value={this.state.question} onChange={this.handleInputChange}/>
            <input placeholder="answer" className="questionInput" name="answer" value={this.state.answer} onChange={this.handleInputChange}/>
            <input placeholder="score" className="questionInput" name="score" value={this.state.score} onChange={this.handleInputChange}/>
            <input placeholder="opt1" className="questionInput" name="opt1" value={this.state.opt1} onChange={this.handleInputChange}/>
            <input placeholder="opt2" className="questionInput" name="opt2" valuue={this.state.opt2} onChange={this.handleInputChange}/>
            <input placeholder="opt3" className="questionInput" name="opt3" value={this.state.opt3} onChange={this.handleInputChange}/>
            <input placeholder="opt4" className="questionInput" name="opt4" value={this.state.opt4} onChange={this.handleInputChange}/>
            <button onClick={this.submitQuestion}>Add Questions</button>
          </form>
        </div>
        }
        
      </div>
    )
  }
} 

export default NewQuestion;