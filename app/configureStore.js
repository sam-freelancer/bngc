/* eslint-disable no-undef */
/**
 * Create the store with asynchronously loaded reducers
 */
/* eslint-disable no-underscore-dangle */

import { createStore, applyMiddleware, compose } from 'redux';

import createSagaMiddleware from 'redux-saga';

// import locationSagas from 'containers/Location/sagas';
// import localConfigurationSagas from 'containers/LocalConfiguration/sagas';
// import remoteConfigurationSagas from 'containers/RemoteConfiguration/sagas';
// import networkHandlerSagas from 'containers/NetworkHandler/sagas';

import createReducer from './reducers';

export default function configureStore(initialState = {}) {
  let composeEnhancers = compose;
  // Create the store with sagaMiddleware middlewares
  // - sagaMiddleware: Makes redux-sagas work

  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  if (__DEV__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  // const composeEnhancers =
  //     // eslint-disable-next-line no-undef
  //     __DEV__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  //         ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  //         : compose;

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers),
  );

  // Extensions
  store.runSaga = sagaMiddleware.run;
  // store.asyncReducers = {}; // Async reducer registry
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}
