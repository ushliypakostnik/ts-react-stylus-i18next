import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from "connected-react-router";

import './utils/i18n';

import { DESIGN } from './store/constants';

import Layout from './components/layout/Layout';
import Loading from './components/utils/Loading';

import * as serviceWorker from './serviceWorker';

import store, { history } from './store/store';

import './stylus/app.css';

ReactDOM.render((
  <Provider store={store}>
    <Suspense fallback={<Loading className="loading--base" size={DESIGN.SPINNER_SIZE} />}>
      <ConnectedRouter history={history}>
        <Layout />
      </ConnectedRouter>
    </Suspense>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
