import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation/index';
import Routes from './route.config';

const App = () => (
  <Router>
    <div id="root">
      <Navigation />
      {Routes.map(route => (
        <Route
          key={route.path}
          exact={route.exact}
          path={route.path}
          component={route.component}
        />
      ))}
    </div>
  </Router>
);

export default App;
