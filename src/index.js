import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import Route from './routes';
import store from './store';

const render = Component => {
  ReactDOM.render(
    //绑定redux、热加载
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root'),
  )
}

render(Route);
serviceWorker.unregister();
