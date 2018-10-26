import React, {Component} from 'react';

class EditOneQuestion extends Component {
  componentDidMount(){
    // make ajax call to fetch particular question
    // use the input to re-write state values
    // allow input to have value from fetched
    // send post request once user hits save
    // re-route to quiz questions list
  }

  render(){
    return(
      <div>
        <p>Editing a question here</p>
        <button>Save</button>
        <button>Cancel</button>
      </div>
    )
  }
};

export default EditOneQuestion;