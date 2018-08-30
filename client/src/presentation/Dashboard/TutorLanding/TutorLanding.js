import React, {Component} from "react";
import './TutorLanding.css'; 

class TutorLanding extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getTutorDataAsync();
  }

  render(){
    return(
      <div id="tutor-landing">
        <h3>You have a class coming up with:</h3>
        <h2>{this.props.name}</h2>
        <img src={this.props.picture} alt="profile"/>
        <h4>on {this.props.day}, {this.props.date} @ {this.props.time}</h4>
      </div>
    )
  }
}

export default TutorLanding;