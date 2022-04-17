import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import './App.css';
import { Security, SecureRoute, ImplicitCallBack } from '@okta/okta-react'

function onAuthRequired({history}){
  history.push('/login');
}

function App() {
  return (
    <Router>
      <Security issuer='https://dev-60590736.okta.com/oauth2/default'
                client_id=''
                redirect_url={window.location.origin + '/authorization-code/callback'}
                onAuthRequired={onAuthRequired}>

      <div>
        <Switch>
          {/* Example of the Route for the specific instance */}
          {/* <Route exact path="/trip/:id">
            <Trip />
          </Route> */}
          <Route path="/register">
            <Register />
          </Route>
          {/* Example for redirect */}
          <Route path="/home">
            <Redirect to="/" />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
      </Security>
    </Router>
  );
}

export default App;
