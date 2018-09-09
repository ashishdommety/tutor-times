import React, {Component} from "react";
import './Landing.css'; 

/* 
  Make Landing into 'GeneralLanding' so that a student can see when their next class is also.
*/

class Landing extends Component{
  lastIndex(){
    return this.props.classes[this.props.classes.length - 1];
  }
  componentDidMount(){
    this.props.fetchNextClassAsync();
  }

  render(){
    return(
      <div id="tutor-landing">
        <h3>You have a class coming up with:</h3>
        {!this.props.classes.length ? <p>loading...</p> : 
          <div>
            <h2>{this.lastIndex().name}</h2>
            <img src={this.lastIndex().photoURL} alt="profile"/>
            <h4>on {this.lastIndex().day}, {this.lastIndex().date} @ {this.lastIndex().time}</h4>
          </div>
        }
      </div>
    )
  }
}

export default Landing;