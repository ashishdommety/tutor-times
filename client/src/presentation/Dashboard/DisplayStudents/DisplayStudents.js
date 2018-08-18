import React from "react";
import './DisplayStudents.css'

const DisplayStudents = (props) =>{
  return(
    <div id="display-students">
      <div className="student">
          <h4>John Doe</h4>
          <img src="https://via.placeholder.com/100x100" alt="profile"/>
          <h5>Subjects:</h5>
        </div> 
    </div>
  )
}

export default DisplayStudents;