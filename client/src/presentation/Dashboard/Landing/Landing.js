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
          <h3>Check out our fun quizzes</h3>
          <Link to="/dashboard/quiz"><button>Take a Quiz</button></Link>
        </div>
      </div>
    )
  }
}

export default Landing;