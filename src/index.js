import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

import App from './App';
import Home from './Home';
import About from './About';
import NoMatch from './NoMatch';

import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
