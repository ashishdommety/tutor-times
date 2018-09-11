import React, {Component} from 'react';
import './Dashboard.css';
import {Switch, Route} from 'react-router-dom';
import NavigationContainer from '../../containers/NavigationContainer';
import LandingContainer from '../../containers/LandingContainer';
import DisplayAssociatesContainer from '../../containers/DisplayAssociatesContainer';

class Dashboard extends Component{
  render(){
    return (
        <div className="dash">
        <NavigationContainer/>
        {!localStorage.length ? 
          <h1 className="error-message">Please log in</h1>:
          <Switch>
            <Route exact={true} path={this.props.match.path + "/"} component={LandingContainer}/>
            {/* make the /students path flexible to use either students or tutors depending on the user*/}
            <Route exact={true} path={this.props.match.path + "/students"} component={DisplayAssociatesContainer}/>       
          </Switch>
        }
        </div>
    )
  }
}


export default Dashboard;