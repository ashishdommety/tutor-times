import React, {Component} from 'react';

class ScheduleClass extends Component{
  render(){
    return(
      <form>
        <p>I would like to schedule a class with: 
          {/* This list is to render from users associates who are opposite than their title */}
          <select>
            <option>Tutor1</option>
            <option>Tutor1</option>
          </select>
        </p>
        <p>On:</p>
        <input placholder="MM/DD/YYYY"/>
        <p>At:</p>
        <input placeholder="6:00"></input>
        <select>
          <option>a.m.</option>
          <option>p.m.</option>
        </select>
      </form>
    )
  }
}

export default ScheduleClass;