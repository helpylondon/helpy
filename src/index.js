import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './App';
import Home from './Home';
import Support from './Support';
import Help from './Help';
import NoMatch from './NoMatch';

import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/helpy" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/" component={Home}/>
      <Route path="support" component={Support}/>
      <Route path="help" component={Help}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
