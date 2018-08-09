import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = (props) => {
  return(
    <div className="dash">
      <img src="" alt="thing" />
      <Link to="/dashboard">Link 1</Link>
      <Link to="/">Link 2</Link>
    </div>
  )
}

export default Dashboard;