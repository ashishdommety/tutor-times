import React, { Component } from "react";
import { Link } from "react-router-dom";

// Note:- This should probably be a link?
class EditButton extends Component {

  render() {
    return (
      <Link
        className="modify-question-btn edit-question-btn blue-btn"
        to={`${this.props.path}/edit/${this.props.qNum}`}
        onClick={this.EditQuestions}
      >
        Edit
      </Link>
    );
  }
}

export default EditButton;
