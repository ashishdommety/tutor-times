import React, {Component} from 'react';
import './NewQuestion.css';
import createQuestion from '../../../../../actionCreators/async/quiz/createQuestion';

class NewQuestion extends Component{
  constructor(props, refs){
    super(props, refs);
    this.state = {
      google_id: localStorage.google_id,
      quiz_id: "4567", // how do we make this flexible and so that it never overwrites each other?
      /* Perhaps set them to numbers, a.k.a 1,2,3....
      To update this every time we create a quiz, we fetch the last number and add 1 to it to create the next quiz. But what happens if two users start creating a quiz at the same time? 
      Should we even have quiz ids? What if instead, we make sure the title can't be repeated. So, we fetch all the titles, remove duplicates, and make sure nothing is repeated, and that way, the title of the quiz is it's unique factor.  */
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

  componentDidUpdate(){
    // console.log(this.refs.qInput.innerText)
  }

  submitQuestion = (e) => {
    e.preventDefault();
    // send ajax request
    createQuestion(this.state)
      .then(result => {
        console.log(result.data);
        this.props.incrementQuestionNumber();
        this.setState({
          question_number: this.props.count
        });
        console.log("written to db");
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
          <h3>Question {this.props.count}</h3>
          <form>
            <input placeholder="question" className="questionInput" ref="qInput" name="question" value={this.state.question} onChange={this.handleInputChange}/>
            <input placeholder="answer" className="questionInput" ref="qInput" name="answer" value={this.state.answer} onChange={this.handleInputChange}/>
            <input placeholder="score" className="questionInput" ref="qInput" name="score" value={this.state.score} onChange={this.handleInputChange}/>
            <input placeholder="opt1" className="questionInput" ref="qInput" name="opt1" value={this.state.opt1} onChange={this.handleInputChange}/>
            <input placeholder="opt2" className="questionInput" ref="qInput" name="opt2" valuue={this.state.opt2} onChange={this.handleInputChange}/>
            <input placeholder="opt3" className="questionInput" ref="qInput" name="opt3" value={this.state.opt3} onChange={this.handleInputChange}/>
            <input placeholder="opt4" className="questionInput" ref="qInput" name="opt4" value={this.state.opt4} onChange={this.handleInputChange}/>
            <button onClick={this.submitQuestion}>Add Questions</button>
          </form>
        </div>
        }
        
      </div>
    )
  }
} 

export default NewQuestion;