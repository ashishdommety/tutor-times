import React, {Component} from 'react';
import HomeContainer from '../../containers/HomeContainer';
import DashboardContainer from '../../containers/DashboardContainer';
import SignUpContainer from '../../containers/ProfileContainers/SignUpContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faPencilAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
library.add(faHome, faPencilAlt, faSignOutAlt);

class App extends Component {

    render(){
      return (
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={HomeContainer}/>
            <Route exact={false} path="/dashboard" component={DashboardContainer}/>
            <Route exact={true} path="/sign-up" component={SignUpContainer}/>
          </Switch>
        </BrowserRouter>
      );
    }
}

export default App;
