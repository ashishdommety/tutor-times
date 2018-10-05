import React, {Component} from 'react';

class QuizQuestion extends Component{
  render(){
    return(
      <div>
        <h3>Question</h3>
        <input type="checkbox" name="opt1" value=""> </input>
        <input type="checkbox" name="opt2" value=""> </input>
        <input type="checkbox" name="opt3" value=""> </input>
        <input type="checkbox" name="opt4" value=""> </input>
      </div>
    )
  }
};

export default QuizQuestion;