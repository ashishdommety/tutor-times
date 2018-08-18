import React from "react";
import './DisplayStudents.css'


const DisplayStudents = (props) =>{

  let arr = [1,2,3,4,5];

  return(
    <div id="display-students">
      {arr.map(x => <div className="student">
          <h4>John Doe</h4>
          <img src="https://via.placeholder.com/100x100" alt="profile"/>
          <h5>Subjects:</h5>
        </div>  )}
        
    </div>
  )
}

export default DisplayStudents;