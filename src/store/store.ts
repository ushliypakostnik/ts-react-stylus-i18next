import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory as createHistory } from 'history';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import {
  LOCALSTORAGE,
  SESSIONSTORAGE,
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
    if (getState().rootReducer.auth.isAuth) {
      localStorage.setItem(LOCAL.PROFILE, JSON.stringify(
          getState().rootReducer.user.profile,
      ));
    }*/
    return result;
  };
};
middlewares.push(localStorageMiddleware);

const reHydrateStore = (state: StoreType) => {
  /*if (localStorage.getItem(LOCAL.PROFILE) !== null) {
    const localData = JSON.parse(localStorage.getItem(LOCAL.PROFILE) || '{}');
    const _state = Object.assign({}, state, {
      rootReducer: {
        ...state.rootReducer,
        user: {
          ...state.rootReducer.user,
          profile: localData,
        },
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
    combineReducers({
      rootReducer,
      router: connectRouter(history),
    } as any),
    reHydrateStore(state),
    applyMiddleware(...middlewares)
  );
}

const store = configureStore(INITIAL_STATE);

// console.log('Store: ', store.getState());

export default store;
