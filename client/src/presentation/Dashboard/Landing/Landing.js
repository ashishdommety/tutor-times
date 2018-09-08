import React, {Component} from "react";
import './Landing.css'; 

/* 
  Make Landing into 'GeneralLanding' so that a student can see when their next class is also.
*/

class Landing extends Component{

  componentDidMount(){
    this.props.fetchNextClassAsync();
  }

  render(){
    return(
      <div id="tutor-landing">
        <h3>You have a class coming up with:</h3>
        {this.props === undefined ? <p>loading...</p> : 
          <div>
            <h2>{this.props.name}</h2>
            <img src={this.props.picture} alt="profile"/>
            <h4>on {this.props.day}, {this.props.date} @ {this.props.time}</h4>
          </div>
        }
      </div>
    )
  }
}

export default Landing;