import React, {Component} from "react";
import './NextClass.css'; 

class NextClass extends Component{
  
  lastIndex(){
    return this.props.classes[this.props.classes.length - 1];
  }
  componentDidMount(){
    this.props.fetchAllClassesAsync();
  }

  render(){
    return(
      <div id="next-class">
        <h3>You have a class coming up with:</h3>
        {!this.props.classes.length ? <p>loading...</p> : 
          <div>
            <h2>{this.lastIndex().name}</h2>
            <img src={this.lastIndex().photoURL} alt="profile"/>
            <h4>on {this.lastIndex().day}, {this.lastIndex().date} @ {this.lastIndex().time}</h4>
          </div>
        }
        <button>Re-schedule</button>
      </div>
    )
  }
}

export default NextClass;