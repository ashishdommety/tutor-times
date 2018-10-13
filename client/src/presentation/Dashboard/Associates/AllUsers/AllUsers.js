import React, {Component} from 'react';
import './AllUsers.css';

class AllUsers extends Component{

  componentDidMount(){
    this.props.fetchAllUsersAsync();
  }

  render(){
    return(
      <div id="allUsers">
        
      </div>
    )
  }
};

export default AllUsers;