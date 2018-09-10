import React, {Component} from 'react';
import './Dashboard.css';
import {Switch, Route} from 'react-router-dom';
import NavigationContainer from '../../containers/NavigationContainer';
import LandingContainer from '../../containers/LandingContainer';
import DisplayStudentsContainer from '../../containers/DisplayStudentsContainer';

class Dashboard extends Component{
  render(){
    return (
        <div className="dash">
        <NavigationContainer/>
        {!localStorage.length ? 
          <h1 class="error-message">Please log in</h1>:
          <Switch>
            <Route exact={true} path={this.props.match.path + "/"} component={LandingContainer}/>
            <Route exact={true} path={this.props.match.path + "/students"} component={DisplayStudentsContainer}/>       
          </Switch>
        }
        </div>
    )
  }
}


export default Dashboard;