import React, {Component} from 'react';

class CreateQuiz extends Component{
  constructor(props){
    super(props);
    this.state = {
      title: "",
      grade: 0,
      difficulty: 0,
      questionAmount: 0,
      image: "",
      totalScore: 0
    }
  }

  handleChange = () => {
    
  }

  render(){
    return(
      <div>
        <form>
          <input placeholder="Title" name="title" type="text" value={this.state.title}/>
          <input placeholder="Grade" name="grade" type="text" value={this.state.grade}/>
          <input placeholder="Difficulty" name="difficulty" type="text" value={this.state.difficulty}/>
          <input placeholder="No. of Questions" name="questionAmount" type="text" value={this.state.questionAmount}/>
          <input placeholder="Image" name="imageUrl" type="text" value={this.state.image}/>
          <input placeholder="totalScore" name="totalScore" type="text" value={this.state.totalScore}/>
        </form>
        <button>Create Quiz</button>
      </div>
    )
  }
}

export default CreateQuiz;