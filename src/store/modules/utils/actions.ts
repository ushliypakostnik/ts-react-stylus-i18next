import { Action, ActionCreator } from 'redux';

// Actions Types
////////////////////////////////////////////////////////////

export const SET_LANGUAGE = 'SET_LANGUAGE';
export const ACCEPT_STORAGE_MESSAGE = 'ACCEPT_STORAGE_MESSAGE';
export const RESIZE = 'RESIZE';

// Action Creators
////////////////////////////////////////////////////////////

export const setLanguage : ActionCreator<Action> = (language : string) => ({
  type: SET_LANGUAGE,
  language,
});

export const acceptStorageMessage : ActionCreator<Action> = () => ({
  type: ACCEPT_STORAGE_MESSAGE,
});

export const resize : ActionCreator<Action> = (deviceType : string) => ({
  type: RESIZE,
  deviceType,
});

