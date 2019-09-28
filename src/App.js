import React from 'react';
import './App.css';
import {Deck} from './components/deck';
import {Ficha} from './components/ficha'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/ficha/:id" render={(props)=><Ficha {...props} />}></Route>
          <Route path="/" exact component={Deck}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
