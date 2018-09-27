import React, {Component} from 'react';
import './Dashboard.css';
import {Switch, Route} from 'react-router-dom';
import NavigationContainer from '../../containers/NavigationContainer';
import LandingContainer from '../../containers/LandingContainer';
import AssociatesContainer from '../../containers/AssociatesContainer';
import NotesContainer from '../../containers/NotesContainer';
import AllUsersContainer from '../../containers/AllUsersContainer';
// import AllUsers from './Associates/AllUsers/AllUsers';

class Dashboard extends Component{

  componentDidMount(){
    this.props.fetchUserAsync(localStorage.google_id);
  }
  
  determineOpposite(title){
    return title === "tutor" ? "students" : "tutors";
  }

  render(){
    return (
        <div className="dash">
        <NavigationContainer title={this.determineOpposite(this.props.title)}/>
        {!localStorage.length ? 
          <h1 className="error-message">Please log in</h1>:
          <Switch>
            <Route exact={true} path={this.props.match.path + "/"} component={LandingContainer}/>
            <Route exact={true} path={this.props.match.path + "/" + this.determineOpposite(this.props.title)} component={AssociatesContainer}/>
            <Route exact={true} path={this.props.match.path + "/notes"} component={NotesContainer}/>
            <Route exact={true} path={this.props.match.path + "/display-users"} component={AllUsersContainer}/>
          </Switch>
        }
        </div>
    )
  }
}


export default Dashboard;