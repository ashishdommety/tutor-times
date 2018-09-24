import React, {Component} from 'react';
import HomeContainer from '../../containers/HomeContainer';
import DashboardContainer from '../../containers/DashboardContainer';
import SignUpContainer from '../../containers/SignUpContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



class App extends Component {
    componentDidUpate(){
  
    }

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
