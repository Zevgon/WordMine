import { SessionConstants } from '../actions/session_actions';
import merge from 'lodash/merge';
import { hashHistory } from 'react-router';

const _defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _defaultState, action) => {
  switch (action.type) {
    case SessionConstants.RECEIVE_USER:
      let newState;
      if (action.user.errors) {
        newState = merge({}, state, action.user);
      } else {
        newState = merge({}, state, {currentUser: action.user});
        window.currentUser = action.user;
      }
      return newState;
    case SessionConstants.SIGN_OUT:
      window.currentUser = undefined;
      return _defaultState;
    default:
      return state;
  }
};

export default SessionReducer;
