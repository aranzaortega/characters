import React from 'react'
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const Private = ({ auth, component: Component, ...rest }) => {
  return (
    <Route {...rest} component={(props) => auth.log ? <Component {...props}/> : <Redirect to='/login' /> }/>
  )
}

export default Private