import React, {Component} from "react";
import ProfileInfoContainer from '../../../containers/ProfileInfoContainer';
import {Link} from 'react-router-dom';
import './Landing.css'; 

class Landing extends Component{

  componentDidMount(){
    this.props.fetchAllClassesAsync();
  }

  render(){
    return(
      <div id="landing">
        <div className="landingComponent">
          <ProfileInfoContainer/>
        </div>
        <div className="landingActions">
          <div className="landingComponent">
            <h3>Make new friends!</h3>
            <Link to="/dashboard/all-users"><button>View Users</button></Link>
          </div>
          <div className="landingComponent">
            <h3>Schedule a class with one of your tutors today!</h3>
            <Link to="/dashboard/schedule-class"><button>Schedule Class</button></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;