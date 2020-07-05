import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore, { history } from './store/configureStore';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'

import App from './containers/app';
import Photo from './components/photo';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#app')
);
