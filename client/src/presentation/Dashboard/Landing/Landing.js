import React, {Component} from "react";
import ProfileInfoContainer from '../../../containers/ProfileContainers/ProfileInfoContainer';
import {Link} from 'react-router-dom';
import './Landing.css'; 

class Landing extends Component{

  componentDidMount(){

  }

  render(){
    return(
      <div id="landing">
        <div className="landingComponent">
          <ProfileInfoContainer/>
        </div>
        <div className="landingComponent">
          <p>Quizzes are a great way to learn.</p>
          <Link to="/dashboard/quiz"><button>{this.props.title === "tutor"? "Review" : "Take"} a Quiz</button></Link>
        </div>
      </div>
    )
  }
}

export default Landing;