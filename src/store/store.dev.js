import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import createLogger from 'redux-logger';

import DevTools from '../containers/DevTools';
import rootReducer from '../reducers';


export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const loggerMiddlware = createLogger({
    level: 'info',
    collapsed: false,
  });
  const enhancer = compose(
    applyMiddleware(
      sagaMiddleware,
      loggerMiddlware,
    ),
    DevTools.instrument(),
  );
  const store = createStore(
    rootReducer,
    initialState,
    enhancer,
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = rootReducer.default;
      store.replaceReducer(nextRootReducer);
    });
  }

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
}
