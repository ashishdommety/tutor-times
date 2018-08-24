import React from 'react';
import './Form.css';

const Form = (props) => {
  return(
    <div id="tutor-form">
      <input text="text" name="subjects" placeholder="subject"/>
      <input text="text" name="motto" placeholder="motto"/>
      <input text="text" name="calendarLink" placeholder="link"/>
      <input type="Submit" value="Confirm"></input>
    </div>
  )
};

export default Form;