import React, {Component} from 'react';
import './EditOneQuestion.css';
import findOneQuestion from '../../../../../actionCreators/async/quiz/findOneQuestion';
import editOneQuestion from '../../../../../actionCreators/async/quiz/editOneQuestion';

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
    let title = this.props.match.params.name;
    let qNum = this.props.match.params.num;
    findOneQuestion(title, qNum).then((result) => {
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
  }

  editQuestion = (e) => {
    e.preventDefault();
    editOneQuestion(this.props.match.params.name, this.props.match.params.num, this.state).then((result) => {
      if(result.data.length){
        let url = this.props.match.url.split("/").slice(0,5).join("/");
        this.props.history.push(url);
      }
    }).catch((err) => console.log(err))
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
      <div className="editForm block">
        <h2>Question {this.state.question_number}</h2>
        <div className="editInput">
          <p>Question:</p>
          <input value={this.state.question} onChange={this.handleInputChange} name="question"/>
        </div>
        <div className="editInput">
          <p>Answer:</p>
          <input value={this.state.answer} onChange={this.handleInputChange} name="answer"/>
        </div>
        <div className="editInput">
          <p>Option 1:</p>
          <input value={this.state.opt1} onChange={this.handleInputChange} name="opt1"/>
        </div>
        <div className="editInput">
          <p>Option 2:</p>
          <input value={this.state.opt2} onChange={this.handleInputChange} name="opt2"/>
        </div>
        <div className="editInput">
          <p>Option 3:</p>
          <input value={this.state.opt3} onChange={this.handleInputChange} name="opt3"/>
        </div>
        <div className="editInput">
          <p>Option 4: </p>
          <input value={this.state.opt4} onChange={this.handleInputChange} name="opt4"/>
        </div>
        <button className="green-btn" onClick={this.editQuestion}>Save</button>
        <button className="blue-btn">Cancel</button>
      </div>
    )
  }
};

export default EditOneQuestion;