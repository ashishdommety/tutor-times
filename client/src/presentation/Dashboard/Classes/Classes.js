import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Classes.css';

class Classes extends Component{

  componentDidMount(){
    this.props.fetchAllClassesAsync();
  }

  render(){
    return(
      <div id="allClasses">
        <Link to="/dashboard/schedule-class"><button>+</button></Link>
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