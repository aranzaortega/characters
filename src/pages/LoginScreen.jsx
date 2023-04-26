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
    <h1 className='my-3'>Login screen</h1>
    <button className='btn btn-primary' onClick={handleLogin}>Login</button>
  </div>
  )};

export default LoginScreen;
