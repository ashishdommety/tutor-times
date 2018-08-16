import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = (props) => {
  return(
    <div className="dash">
      <img src="https://via.placeholder.com/100x100" alt="thing" id="profile_pic" />
      <Link to="/dashboard">Link 1</Link>
      <Link to="/">Link 2</Link>
    </div>
  )
}

export default Dashboard;