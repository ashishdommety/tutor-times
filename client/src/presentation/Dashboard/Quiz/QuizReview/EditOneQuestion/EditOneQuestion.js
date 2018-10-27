import React, {Component} from 'react';
import './EditOneQuestion.css';
import findOneQuestion from '../../../../../actionCreators/async/quiz/findOneQuestion';

class EditOneQuestion extends Component {
  constructor(props){
    super(props);
    this.state = {
      question_number: '',
      question: '',
      answer: '',
      opt1: '',
      opt2: '',
      opt3: '',
      opt4: ''
    }
  }
  componentDidMount(){
    // make ajax call to fetch particular question
      // let title = 
      // let qNum = 
    findOneQuestion('Simple Math', '2').then((result) => {
      console.log(result.data);
      this.setState({
        question_number: result.data.question_number,
        question: result.data.question,
        answer: result.data.answer,
        opt1: result.data.opt1,
        opt2: result.data.opt2,
        opt3: result.data.opt3,
        opt4: result.data.opt4
      })
    }).catch((err) => console.log(err));
    // use the input to re-write state values
    // allow input to have value from fetched
    // send post request once user hits save
    // re-route to quiz questions list
  }

  render(){
    return(
      <div className="editForm">
        <h2>Question {this.state.question_number}</h2>
        <div className="editInput">
          <p>Question:</p>
          <input value={this.state.question} />
        </div>
        <div className="editInput">
          <p>Answer:</p>
          <input value={this.state.answer}/>
        </div>
        <div className="editInput">
          <p>Option 1:</p>
          <input value={this.state.opt1} />
        </div>
        <div className="editInput">
          <p>Option 2:</p>
          <input value={this.state.opt2} />
        </div>
        <div className="editInput">
          <p>Option 3:</p>
          <input value={this.state.opt3} />
        </div>
        <div className="editInput">
          <p>Option 4: </p>
          <input value={this.state.opt4} />
        </div>
        <button>Save</button>
        <button>Cancel</button>
      </div>
    )
  }
};

export default EditOneQuestion;