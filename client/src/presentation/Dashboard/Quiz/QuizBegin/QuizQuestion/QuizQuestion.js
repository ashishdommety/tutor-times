import React, {Component} from 'react';

class QuizQuestion extends Component{
  render(){
    return(
      <div>
        <h3>{this.props.question}</h3>
        <div>
          <input type="checkbox" name="opt1" value="opt1"/>
          <input type="checkbox" name="opt2" value="opt2"/>
        </div>
        <div>
          <input type="checkbox" name="opt3" value="opt3"/> 
          <input type="checkbox" name="opt4" value="opt4"/>
        </div>
      </div>
    )
  }
};

export default QuizQuestion;