import React from 'react';
import './Dashboard.css';
import NavigationContainer from '../../containers/NavigationContainer';
import TutorLanding from './TutorLanding/TutorLanding';
import DisplayStudents from './DisplayStudents/DisplayStudents';

const Dashboard = (props) => {
  let path = window.location.pathname;
  if(localStorage.length!==0){
    if(path === "/dashboard"){
      return(
        <div className="dash">
        <NavigationContainer/>
            <TutorLanding/>
        </div>
      )
    }else if(path === "/dashboard/students"){
      return(
        <div className="dash">
        <NavigationContainer/>
            <DisplayStudents count='10'/>
        </div>
      )
    }else if(path === "/dashboard/calendar"){
      return(
        <div className="dash">
        <NavigationContainer/>
          <h3>This is the calendar page</h3>
        </div>
      )
    }
  }else{
    return(
      <h1>Sorry, you need to log-in</h1>
    )
  }
}

export default Dashboard;