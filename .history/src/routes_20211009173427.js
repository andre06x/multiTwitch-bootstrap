import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Stream from './Pages/Stream';


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/" exact component={Home}/> */}
        <Route path="/stream/:stream1/:stream2" component={Stream}/>
      </Switch>
    </BrowserRouter>
  )
};

export default Routes;