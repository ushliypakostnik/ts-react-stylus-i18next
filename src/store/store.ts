import {
  createStore,
  combineReducers,
  applyMiddleware,
  Reducer,
} from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory as createHistory } from 'history';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import {
  // LOCALSTORAGE,
  // SESSIONSTORAGE,
  INITIAL_STATE,
} from './constants';
import { StoreType } from './types';
import rootReducer from './reducers';

const middlewares : any[] = [];
middlewares.push(thunkMiddleware)

if (process.env.NODE_ENV !== 'production') {
  const loggerMiddleware = createLogger();

  middlewares.push(loggerMiddleware);
}

const localStorageMiddleware = ({getState} : any) => {
  return (next : any) => (action: any) => {
    const result = next(action);
    /*
    if (getState().rootReducer.utils.isAcceptStorageMessage) {
      localStorage.setItem(LOCALSTORAGE.STORAGE_MESSAGE, JSON.stringify(
          getState().rootReducer.utils.isAcceptStorageMessage,
      ));

      /*
      sessionStorage.setItem(SESSIONSTORAGE.item, JSON.stringify(
          getState().rootReducer.module.item,
      ));
    }*/
    return result;
  };
};
middlewares.push(localStorageMiddleware);

const reHydrateStore = (state: StoreType) => {
  /*if (localStorage.getItem(LOCAL.PROFILE) !== null) {
    const localDataAccept = JSON.parse(localStorage.getItem(LOCALSTORAGE.STORAGE_MESSAGE) || '{}');

    // const localData = JSON.parse(sessionStorage.getItem(SESSIONSTORAGE.ITEM) || null);

    const _state = Object.assign({}, state, {
      rootReducer: {
        ...state.rootReducer,
        utils: {
          ...state.rootReducer.utils,
          isAcceptStorageMessage: localDataAccept,
        },
    });
    return _state;
  }*/
  return state;
};

export const history = createHistory();
middlewares.push(routerMiddleware(history));


function configureStore(state : StoreType) {
  return createStore(
    combineReducers<Reducer>({
      rootReducer,
      router: connectRouter(history),
    }),
    reHydrateStore(state),
    applyMiddleware(...middlewares)
  );
}

const store = configureStore(INITIAL_STATE);

// console.log('Store: ', store.getState());

export default store;
