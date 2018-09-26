import React, {Component} from "react";
import './Landing.css'; 

class Landing extends Component{

  componentDidMount(){
    this.props.fetchAllClassesAsync();
  }

  render(){
    return(
      <div id="landing">
        <div className="landingComponent">
          <h1>Profile Info</h1>
        </div>
        <div className="landingActions">
          <div className="landingComponent">
            <h2>Find Friends</h2>
          </div>
          <div className="landingComponent">
            <h2>Schedule Class</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;