import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import CategoryScreen1 from '../pages/CategoryScreen1';
import CategoryScreen2 from '../pages/CategoryScreen2';
import SearchScreen from '../pages/SearchScreen';
import CharacterScreen from '../pages/CharacterScreen';
import NavBar from '../components/NavBar';

const App = () => {
  return <>
    <NavBar/>
    <Switch>
      <Route exact path='/earth' component={CategoryScreen1}/>
      <Route exact path='/mars' component={CategoryScreen2}/>
      <Route exact path='/search' component={SearchScreen}/>
      <Route exact path='/character/:id' component={CharacterScreen}/>
      <Redirect to='/search'/>
    </Switch>
  </>;
};

export default App;
