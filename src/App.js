import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from './components/About';
import Data from './components/Data';
import Landing from './components/Landing';
import './static/styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Landing} />
        <Route exact={true} path="/data" component={Data} />
        <Route exact={true} path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
