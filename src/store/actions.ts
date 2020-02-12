import { Action, ActionCreator } from 'redux';

// Actions Types
////////////////////////////////////////////////////////////

export const ACTION_EXAMPLE = 'ACTION_EXAMPLE';

// Action Creators
////////////////////////////////////////////////////////////

export const actionExample : ActionCreator<Action> = () => {
  return {
    type: ACTION_EXAMPLE,
  };
};
