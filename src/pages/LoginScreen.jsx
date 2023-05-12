import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { authTypes } from '../types/AuthTypes';

const LoginScreen = () => {

  const history = useHistory();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    dispatch({ type: authTypes.login });
    history.push('/');
  }

  return (
  <div className='container mt-5 text-center' >
    <img src='/assets/logo.png' alt='logo'/>
    <h2>Meet The Expanse Series Characters</h2>
    <p>Login to find out everything</p>
    <button className='btn btn-primary m-5' onClick={handleLogin}>Login</button>
  </div>
  )};

export default LoginScreen;
