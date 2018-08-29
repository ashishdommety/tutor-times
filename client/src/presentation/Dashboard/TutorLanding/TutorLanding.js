import React from "react";
import './TutorLanding.css';
import {getStuff} from '../../../actionCreators/async'; 

let data = getStuff();
console.log(data);
const TutorLanding = () =>{
  return(
    <div id="tutor-landing">
      <h3>You have a class coming up with:</h3>
      <h2>John Doe</h2>
      <img src="https://via.placeholder.com/100x100" alt="profile"/>
      <h4>on Thursday, August 30th, 2018 @ 4:30 pm</h4>
    </div>
  )
}

export default TutorLanding;