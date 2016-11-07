import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Layout from './components/Layout';
import store from './store';
import Gifs from './components/Gifs'

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component = {Gifs} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
