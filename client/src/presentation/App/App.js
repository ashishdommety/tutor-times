import React from 'react';
import HomeContainer from '../../containers/HomeContainer';
import Dashboard from '../Dashboard/Dashboard'; // temporary
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = (props) => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={HomeContainer}/>
          <Route exact={false} path="/dashboard" component={Dashboard}/>
        </Switch>
      </BrowserRouter>
    );
}

export default App;
