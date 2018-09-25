import React, {Component} from 'react';
import './Classes.css';

class Classes extends Component{

  componentDidMount(){
    this.props.fetchAllClassesAsync();
  }

  render(){
    return(
      <div id="allClasses">
        {!this.props.classes.length ? 
          "Loading..." : this.props.classes.map((x,i) => 
            <div className="class" key={i}>
              <p>{x.name}</p>
              <p>{x.date}</p>
              <p>{x.time}</p>
              <button>Re-schedule</button>
            </div>) 
          }  
      </div>
    )
  }
}

export default Classes;