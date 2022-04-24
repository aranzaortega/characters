import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginScreen from '../pages/LoginScreen';
import App from '../routes/App';

const Login = () => {
  return <Router>
    <App/>
    <Switch>
      <Route exact path="/login" component={LoginScreen}/>
    </Switch>
  </Router>;
};

export default Login;
