import React, {Component} from 'react';
import './SignUp.css';

// google_id, firstName, lastName, middleName, email, photoURL, isTutor, bio, goal, motto,phoneNumber
class SignUp extends Component{
  constructor(props){
    super(props);
      this.state = {
        firstName: '',
        lastName: '',
        middleName: '',
        email: '',
        phoneNumber: '',
        isTutor: false,
        bio: '',
        goal: '',
        motto: ''
      };
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    })
  }

  submit = e => {
    e.preventDefault();
    console.log(this.state);
  }

  render(){
    return(
      <div>
        <form>
          <label>First Name: <input type="text" name="firstName" value={this.state.firstname}/></label>
          <label>Last Name: <input type="text" name="lastName" value={this.state.lastName}/></label>
          <label>Middle Name: <input type="text" name="middleName" value={this.state.middleName}/></label>
          <label>Email: <input type="text" name="email" value={this.state.email}/></label>
          <label>Phone Number: <input type="text" name="phoneNumber" value={this.state.phoneNumber}/></label>
          <label>I am here to 
            <select>
              <option>study</option>
              <option>teach</option>
            </select>
          </label>
          <label>What do you hope to achieve from your classes? </label>
          <textarea type="text" name="goal" value={this.state.goal}/>
          <label>What's your motto? </label>
          <textarea type="text" name="motto" value={this.state.motto}/>
          <label>What else are you interested in? </label>
          <textarea type="text" name="bio" value={this.state.bio}/>
          <button> Submit </button>
        </form>
      </div>
    )
  }
};

export default SignUp;