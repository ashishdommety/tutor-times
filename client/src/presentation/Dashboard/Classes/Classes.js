import React, {Component} from 'react';
import './Classes.css';

class Classes extends Component{
  render(){
    return(
      <div id="allClasses">
        {!this.props.classes.length ? 
          "Loading..." : this.props.classes.map(x => 
            <div className="class">
              <p>{x.name}</p>
              <p>{x.date}</p>
              <p>{x.time}</p>
            </div>) 
          }
      </div>
    )
  }
}

export default Classes;