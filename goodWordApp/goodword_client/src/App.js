import React from 'react';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/screens/Home'
import NewYork from './components/screens/NewYork'
import Opinion from './components/screens/Opinion'
import Politics from './components/screens/Politics'
import Recipes from './components/screens/Recipes'
import Science from './components/screens/Science'
import Article from './components/screens/Article'
import From from './components/screens/Form'

function App() {
  return (

      <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route exact path= '/NewYork' component={NewYork}/>
        <Route exact path='/Opinion' component={Opinion}/>
        <Route exact path='/Politics' component={Politics}/>
        <Route exact path='/Recipes' component={Recipes}/>
        <Route exact path='/Science' component={Science}/>
        <Route exact path='/Form' component={From}/>

        <Route exact path='/Article' component={Article}/>
      </BrowserRouter>
      
  );
}

export default App;
