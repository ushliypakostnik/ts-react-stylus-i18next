import { Action } from 'redux';

import { INITIAL_STATE } from '../../constants';
import { StoreType } from '../../types';
import {
  SET_LANGUAGE,
  ACCEPT_STORAGE_MESSAGE,
  RESIZE,
} from './actions';

const utils = (state : StoreType, action: Action & any) => {
  if (typeof state === 'undefined') {
    return INITIAL_STATE;
  }

  switch (action.type) {
    case SET_LANGUAGE:
      return Object.assign({}, state, {
        language: action.language,
      });
    case ACCEPT_STORAGE_MESSAGE:
      return Object.assign({}, state, {
        isAcceptStorageMessage: true,
      });
    case RESIZE:
      return Object.assign({}, state, {
        deviceType: action.deviceType,
      });
    default:
      return state;
  };
};

export default utils;
