import { configureStore } from '@reduxjs/toolkit';
import {
  AnyAction,
  Store,
} from 'redux';
import { createLogger } from 'redux-logger';

import createSagaMiddleware, { SagaMiddleware } from 'redux-saga'

import spotifyReducer from '../app/spotify/spotifyReducer';
import coreReducer from '../app/core/coreReducer';
import coreSagas from '../sagas/coreSagas';

export default class ReduxStore {
  public static store: Store<any, AnyAction>;
  public static sagaMiddleware: SagaMiddleware;

  public static dispatch(action: AnyAction) {
    ReduxStore.store?.dispatch(action);
  }

  public static getState() {
    return ReduxStore.store?.getState() || {};
  }

  public static initialize() {
    const extensions = [];
    const middleware = ReduxStore.getMiddleware();
    if (middleware.length) {
      extensions.push({ middleware });
    }

    ReduxStore.store = configureStore({
      reducer: {
        spotify: spotifyReducer,
        core: coreReducer,
      },
      middleware,
    })

    ReduxStore.sagaMiddleware.run(coreSagas)
  }

  private static getMiddleware = () => {
    const middleware = [];
    const logger = createLogger({
      collapsed: true,
      level: 'info',
      predicate: () => {
        return true;
      },
    });
    middleware.push(logger);

    ReduxStore.sagaMiddleware = createSagaMiddleware()

    middleware.push(ReduxStore.sagaMiddleware)

    return middleware;
  };
}