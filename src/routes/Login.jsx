import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import LoginScreen from '../pages/LoginScreen';
import App from './App';
import { AuthContext } from '../contexts/AuthContext';
import Public from './Public';
import Private from './Private';

const Login = () => {
  const {log} = useContext(AuthContext);
  return <Router>
    <Switch>
      <Public path="/login" auth={log} component={LoginScreen}/>
      <Private path="/" auth={log} component={App}/>
    </Switch>
  </Router>;
};

export default Login;
