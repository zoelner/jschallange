import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Movie from './pages/Movie';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie/:movie" component={Movie} />
      </Switch>
    </BrowserRouter>
  );
}
