import React from 'react';
import {HashRouter, Route} from 'react-router-dom'

import Home from './pages/Home'


function App() {
  return (
    <HashRouter basename='/'>
      <Route exact path="/" component={Home} />
    </HashRouter>
  );
}

export default App;
