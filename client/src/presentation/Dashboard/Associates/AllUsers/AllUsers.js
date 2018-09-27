import React, {Component} from 'react';
import fetchAllUsersAsync from '../../../../actionCreators/async/fetchAllUsersAsync';
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