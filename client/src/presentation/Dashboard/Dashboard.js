import React from 'react';
import './Dashboard.css';
import NavigationContainer from '../../containers/NavigationContainer';
import TutorLandingContainer from '../../containers/TutorLandingContainer';
import DisplayStudentsContainer from '../../containers/DisplayStudentsContainer';

const Dashboard = (props) => {
/* 
  Re-factor these paths to include a Route tag within a Route tag - Don't use window.location.pathname - something seems off about it.

  Maybe look something like:
    if(localStorage.length !== 0){
      <div className="dash">
        <NavigationContainer />
        <Route for tutor landing />
        <Route for students />
        <Route for calendar />
      </div>
    }
 */

  let path = window.location.pathname;
  if(localStorage.length!==0){
    if(path === "/dashboard"){
      return(
        <div className="dash">
          <NavigationContainer/>
          <TutorLandingContainer/>
        </div>
      )
    }else if(path === "/dashboard/students"){
      return(
        <div className="dash">
          <NavigationContainer/>
          <DisplayStudentsContainer/>
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