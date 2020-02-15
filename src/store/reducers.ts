import { combineReducers, Reducer } from 'redux';

import utils from './modules/utils/reducer';
import test from './modules/test/reducer';

const rootReducer = combineReducers<Reducer>({
  utils,
  test,
});

export default rootReducer;
