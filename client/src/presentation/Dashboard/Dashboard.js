import React, {Component} from 'react';
import './Dashboard.css';
import {Switch, Route} from 'react-router-dom';
import NavigationContainer from '../../containers/NavigationContainer';
import LandingContainer from '../../containers/LandingContainer';
import DisplayAssociatesContainer from '../../containers/DisplayAssociatesContainer';
import ClassesContainer from '../../containers/ClassesContainer';
import NotesContainer from '../../containers/NotesContainer';

class Dashboard extends Component{

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
            <Route exact={true} path={this.props.match.path + "/" + this.determineOpposite(this.props.title)} component={DisplayAssociatesContainer}/>
            <Route exact={true} path={this.props.match.path + "/classes"} component={ClassesContainer}/>
            <Route exact={true} path={this.props.match.path + "/notes"} component={NotesContainer}/>
          </Switch>
        }
        </div>
    )
  }
}


export default Dashboard;