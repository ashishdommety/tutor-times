import React, {Component} from 'react';
import './NewQuestion.css';
import createQuestion from '../../../../../actionCreators/async/quiz/createQuestion';

class NewQuestion extends Component{
  constructor(props, refs){
    super(props, refs);
    this.state = {
      google_id: localStorage.google_id,
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

  //Re-write this function to work with a lot of new questions and one new question
  submitQuestion = (e) => {
    e.preventDefault();
    // send ajax request
    let question_number;
    if(this.props.quiz.question_number){
      question_number = this.props.quiz.question_number;
      console.log(`the question number is ${question_number}`);
      // this.setState({
      //   question_number
      // });
      let copy = this.state;
      copy.question_number = question_number;
      createQuestion(copy)
        .then(result => {
          this.props.history.push(`/dashboard/quiz/review/${this.props.quiz.title}`);
        }).catch(err => console.log(err));
    }else{
      question_number = this.props.count;
      createQuestion(this.state)
      .then(result => {
        this.props.incrementQuestionNumber();
        this.setState({
          question_number,
          score: "",
          question: "",
          answer: "",
          opt1: "",
          opt2: "",
          opt3: "",
          opt4: ""
        });
        console.log("written to db");
      }).catch(err => console.log(err));
    }
    
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
    if(!this.props.quiz.questionAmount){
      return(
        <div className="newQuestionForm">
          <h3>Add Question {this.props.quiz.question_number}</h3>
          <form>
            <input placeholder="question" className="questionInput" ref="qInput" name="question" value={this.state.question} onChange={this.handleInputChange}/>
            <input placeholder="answer" className="questionInput" ref="qInput" name="answer" value={this.state.answer} onChange={this.handleInputChange}/>
            <input placeholder="score" className="questionInput" ref="qInput" name="score" value={this.state.score} onChange={this.handleInputChange}/>
            <input placeholder="opt1" className="questionInput" ref="qInput" name="opt1" value={this.state.opt1} onChange={this.handleInputChange}/>
            <input placeholder="opt2" className="questionInput" ref="qInput" name="opt2" value={this.state.opt2} onChange={this.handleInputChange}/>
            <input placeholder="opt3" className="questionInput" ref="qInput" name="opt3" value={this.state.opt3} onChange={this.handleInputChange}/>
            <input placeholder="opt4" className="questionInput" ref="qInput" name="opt4" value={this.state.opt4} onChange={this.handleInputChange}/>
            <button onClick={this.submitQuestion}>Add Question</button>
          </form>
        </div>
      )
    }else{
      return(
        <div>
          {this.state.question_number > this.props.quiz.questionAmount ? <p>You've completed creating your test!</p> :
          <div className="newQuestionForm">
            <h3>Add A Question</h3>
            <form>
              <input placeholder="question" className="questionInput" ref="qInput" name="question" value={this.state.question} onChange={this.handleInputChange}/>
              <input placeholder="answer" className="questionInput" ref="qInput" name="answer" value={this.state.answer} onChange={this.handleInputChange}/>
              <input placeholder="score" className="questionInput" ref="qInput" name="score" value={this.state.score} onChange={this.handleInputChange}/>
              <input placeholder="opt1" className="questionInput" ref="qInput" name="opt1" value={this.state.opt1} onChange={this.handleInputChange}/>
              <input placeholder="opt2" className="questionInput" ref="qInput" name="opt2" value={this.state.opt2} onChange={this.handleInputChange}/>
              <input placeholder="opt3" className="questionInput" ref="qInput" name="opt3" value={this.state.opt3} onChange={this.handleInputChange}/>
              <input placeholder="opt4" className="questionInput" ref="qInput" name="opt4" value={this.state.opt4} onChange={this.handleInputChange}/>
              <button onClick={this.submitQuestion}>Add Question</button>
            </form>
          </div>
          }
          
        </div>
      )
    }
  }
} 

export default NewQuestion;