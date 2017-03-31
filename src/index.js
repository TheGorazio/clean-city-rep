import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// import css
require('./stylesheets/main.sass');

// import components
import Main from './components/Main';
import App from './components/App';

import Account from './components/Account';
import UrnMap from './components/UrnMap';

import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={UrnMap}></IndexRoute>
        <Route path="/account" component={Account}></Route>
      </Route>
    </Router>
  </Provider>
);

render(
  router,
  document.getElementById('root')
);
