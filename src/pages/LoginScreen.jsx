import React from 'react';

const LoginScreen = ({ history }) => {

  const handleLogin = () => {
    history.push('/earth')
  }

  return (
  <div className='container mt-5 text-center' >
    <img src='/assets/logo.png' alt='logo'/>
    <h1 className='my-3'>Login screen</h1>
    <button className='btn btn-primary' onClick={handleLogin}>Login</button>
  </div>
  )};

export default LoginScreen;
