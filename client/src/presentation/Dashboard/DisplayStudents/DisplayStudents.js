import React, {Component} from "react";
import './DisplayStudents.css';

class DisplayStudents extends Component{
  constructor(props){
    super(props);
    
  }

  componentWillMount(){
    this.props.fetchAllStudentsAsync();
  }
  
  render(){
    return(
      <div id="display-students">
        {this.props.students.map((x,i) =>{
          return (
            <div className="student" key={i}>
              <h2>{x.name}</h2>
              <img src={x.photoURL} alt="profile"/>
              <h3>Subjects: </h3>
              <ul>
                  {x.subjects === undefined ? "loading..." : x.subjects.map((y, j) => <li key={j}>{y}</li>)}
              </ul>
            </div>  
          )
        })} 
      </div>
    )
  }
}

export default DisplayStudents;