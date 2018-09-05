import React, {Component} from "react";
import './DisplayStudents.css'

class DisplayStudents extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllStudentsAsync();
    // var arr = [1,2,3,4,5,1,2,3,4,5];
  }
  
  render(){
    return(
      <div id="display-students">
        {this.props.students.map((x,i) =>
          <div className="student" key={i}>
            <h4>{x.name}</h4>
            <img src={x.photoURL} alt="profile"/>
            <h5>Subjects: </h5>
              {/* {x.subjects.map((y) => <p>{y}</p>)} */}
            
          </div>  
        )}
          
      </div>
    )
  }
}

export default DisplayStudents;