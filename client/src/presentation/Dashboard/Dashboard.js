import React from 'react';
import './Dashboard.css';
import NavigationContainer from '../../containers/NavigationContainer';

const Dashboard = (props) => {
  let path = window.location.pathname;

  if(path === "/dashboard"){
    return(
      <div className="dash">
      <NavigationContainer/>
        <div className="main-body">
          <h3>This is the dashboard</h3>
        </div>
      </div>
    )
  }else if(path === "/dashboard/students"){
    return(
      <div className="dash">
      <NavigationContainer/>
        <div className="main-body">
        <h3>This is the students section</h3>
        </div>
      </div>
    )
  }else if(path === "/dashboard/calendar"){
    return(
      <div className="dash">
      <NavigationContainer/>
        <div className="main-body">
        <h3>This is the calendar page</h3>
        </div>
      </div>
    )
  }
}

export default Dashboard;