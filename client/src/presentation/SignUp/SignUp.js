import React, {Component} from 'react';
import './SignUp.css';

// google_id, firstName, lastName, middleName, email, photoURL, isTutor, bio, goal, motto,phoneNumber
class SignUp extends Component{
  render(){
    return(
      <div>
        {/* <p>SignUp Form</p> */}
        <form>
          <label>First Name: <input type="text" name="fName"/></label>
          <label>Last Name: <input type="text" name="lName"/></label>
          <label>Middle Name: <input type="text" name="mName"/></label>
          <label>Email: <input type="text" name="email"/></label>
          <label>Phone: <input type="text" name="phone"/></label>
          <label>I am here to 
            <select>
              <option>study</option>
              <option>teach</option>
            </select>
          </label>
          <label>What do you hope to achieve from your classes? </label>
          <textarea type="text" name="goal"/>
          <label>What's your motto? </label>
          <textarea type="text" name="motto"/>

          <input type="submit"/>
        </form>
      </div>
    )
  }
};

export default SignUp;