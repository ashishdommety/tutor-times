import React from 'react';
import HomeContainer from '../../containers/HomeContainer';
import DashboardContainer from '../../containers/DashboardContainer'; // temporary
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = (props) => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={HomeContainer}/>
          <Route exact={false} path="/dashboard" component={DashboardContainer}/>
        </Switch>
      </BrowserRouter>
    );
}

export default App;
