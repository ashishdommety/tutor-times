import React from 'react';
import './Dashboard.css';
import NavigationContainer from '../../containers/NavigationContainer';

const Dashboard = (props) => {
  return(
    <div className="dash">
    <NavigationContainer/>
    <div className="main-body">
      <h3>Content goes here</h3>
    </div>
    </div>
  )
}

export default Dashboard;