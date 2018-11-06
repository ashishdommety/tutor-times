import React, { Component } from "react";
import { Link } from "react-router-dom";

// Note:- This should probably be a link?
class EditButton extends Component {
  constructor(props) {
    super(props);
  }
  EditQuestions = () => {
    this.props.history.push(this.props.path + "/edit/" + this.props.qNum);
  };

  render() {
    return (
      <button
        className="modify-question-btn edit-question-btn blue-btn"
        onClick={this.EditQuestions}
      >
        Edit
      </button>
    );
  }
}

export default EditButton;
