import React, {Component} from 'react';

class DeleteQuizButton extends Component {
  constructor(props){
    super(props);
  }

  deleteOneQuiz = () => {
    console.log(this.props.title);
  }

  render(){
    return(
      <button onClick={this.deleteOneQuiz}>Delete Quiz</button>
    )
  }
};

export default DeleteQuizButton;
