import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './pages/Home'
import Product from './pages/Product'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product/:id" component={Product} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
