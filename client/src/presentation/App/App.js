import React from 'react';
import HomeContainer from '../../containers/HomeContainer';
import Dashboard from '../Dashboard/Dashboard'; // temporary
import Form from '../Form/Form'; // temporary
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = (props) => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={HomeContainer}/>
          <Route exact={false} path="/dashboard" component={Dashboard}/>
          <Route exact={true} path="/tutor-signup" component={Form}/>
        </Switch>
      </BrowserRouter>
    );
}

export default App;
