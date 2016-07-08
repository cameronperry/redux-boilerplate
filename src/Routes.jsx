import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import {CountContainer} from './components/Count/Count';

export default (
  <Route component={App}>
    <Route path='/' component={CountContainer}/>
  </Route>
);
