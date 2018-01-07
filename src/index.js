import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import App from './containers/App';
import './index.scss';
import configureStore from './store/store';

const rootEl = document.getElementById('root');
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default;
    ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <NextApp/>
        </BrowserRouter>
      </Provider>,
      rootEl
    );
  });
}
