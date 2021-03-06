// store.js

import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

  export function configureStore() {
    const store = createStore(reducers, compose(
      applyMiddleware(thunk),
      
      window.devToolsExtension ? window.devToolsExtension() : f => f // add support for Redux dev tools
    ));
    return store;
  };
  export const store = configureStore();
