import { Action, ActionCreator } from 'redux';

// Actions Types
////////////////////////////////////////////////////////////

export const ACTION_TEST = 'ACTION_TEST';

// Action Creators
////////////////////////////////////////////////////////////

export const actionTest : ActionCreator<Action> = () => {
  return {
    type: ACTION_TEST,
  };
};
