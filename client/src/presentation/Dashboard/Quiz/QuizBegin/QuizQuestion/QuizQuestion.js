import React, {Component} from 'react';

class QuizQuestion extends Component{
  render(){
    return(
      <div>
        <h3>{this.props.question}</h3>
        <div>
          <div>
            <input type="checkbox" name="opt1" value="opt1"/>{this.props.opt1}</div>
          <div>
            <input type="checkbox" name="opt2" value="opt2"/>{this.props.opt2}</div>
        </div>
        <div>
          <div>
            <input type="checkbox" name="opt3" value="opt3"/>{this.props.opt3}</div>
          <div>
            <input type="checkbox" name="opt4" value="opt4"/>{this.props.opt4}
          </div>
        </div>
      </div>
    )
  }
};

export default QuizQuestion;