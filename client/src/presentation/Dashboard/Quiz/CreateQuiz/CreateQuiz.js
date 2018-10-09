import React, {Component} from 'react';
import NewQuestion from './NewQuestion/NewQuestion';

class CreateQuiz extends Component{
  constructor(props){
    super(props);
    this.state = {
      title: "",
      grade: "",
      difficulty: "",
      questionAmount: "",
      imageUrl: "",
      totalScore: "",
      questions: [],
      quizBase: false
    }
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    console.log(this.state.quizBase)
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.createQuizAction(this.state);

    let arr = [];
    let arrLength = parseInt(this.state.questionAmount);
    /*
     *  Thinking through question addition:-
     *    create a dummy array that 
     */
    this.setState({
      quizBase: true,
      
    })
    // this.props.history.push(this.props.match.path + "/new-question");
    // console.log(this.state);
  }

  render(){
    return(
      <div>
        <form>
          <input placeholder="Title" name="title" type="text" value={this.state.title} onChange={this.handleChange}/>
          <input placeholder="Grade" name="grade" type="text" value={this.state.grade} onChange={this.handleChange}/>
          <input placeholder="Difficulty (easy, medium, hard)" name="difficulty" type="text" value={this.state.difficulty} onChange={this.handleChange}/>
          <input placeholder="No. Of Questions" name="questionAmount" type="text" value={this.state.questionAmount} onChange={this.handleChange}/>
          <input placeholder="Image" name="imageUrl" type="text" value={this.state.imageUrl} onChange={this.handleChange}/>
          <input placeholder="Total Score" name="totalScore" type="text" value={this.state.totalScore} onChange={this.handleChange}/>
        </form>
        <button onClick={this.handleSubmit}>Create Quiz</button>
        {!this.state.quizBase ? '' : <NewQuestion amount={this.state.questionAmount}/>}
      </div>
    )
  }
}

export default CreateQuiz;