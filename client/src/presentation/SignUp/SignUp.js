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

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    console.log(value);
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  }

  render(){
    return(
      <div>
        <form>
          <label>First Name: </label>
            <input type="text" name="firstName" value={this.state.firstname} onChange={this.handleInputChange}/>
          <label>Last Name: </label>
            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleInputChange}/>
          <label>Middle Name: </label>
            <input type="text" name="middleName" value={this.state.middleName} onChange={this.handleInputChange}/>
          <label>Email: </label>
            <input type="text" name="email" value={this.state.email} onChange={this.handleInputChange}/>
          <label>Phone Number: </label>
            <input type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleInputChange}/>
          <label>I am here to:  </label>
            Study <input type="radio" value={false} name="isTutor" onChange={this.handleInputChange}/>
            Teach <input type="radio" value={true} name="isTutor" onChange={this.handleInputChange}/>
         
          <label>What do you hope to achieve from your classes? </label>
          <textarea type="text" name="goal" value={this.state.goal} onChange={this.handleInputChange}/>
          <label>What's your motto? </label>
          <textarea type="text" name="motto" value={this.state.motto} onChange={this.handleInputChange}/>
          <label>Tell us a little bit about yourself: </label>
          <textarea type="text" name="bio" value={this.state.bio} onChange={this.handleInputChange}/>
          <br/>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
};

export default SignUp;