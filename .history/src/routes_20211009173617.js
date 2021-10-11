import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Stream from './Pages/Stream';


const Routes = () => {
  return (
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/stream/:stream1/:stream2" component={Stream}/>
      </Switch>
  )
};

export default Routes;