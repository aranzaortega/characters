import React, { useReducer, useEffect } from 'react';
import Login from './routes/Login';
import { AuthContext } from './contexts/AuthContext';
import { AuthReducer } from './reducers/AuthReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('log')) || {log: false}
}

const App = () => {
  const [log, dispatch] = useReducer(AuthReducer, {}, init);

  useEffect(() => {
    localStorage.setItem('log', JSON.stringify(log))
  }, [log])
  

  return (
    <AuthContext.Provider value={{log, dispatch}}>
      <Login/>
    </AuthContext.Provider>
  );
};

export default App;
