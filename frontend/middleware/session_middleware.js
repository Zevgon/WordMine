import { SessionConstants, receiveUser } from '../actions/session_actions';
import { createUser, requestUser, signOut } from '../util/api_session_util.js';
import { hashHistory } from 'react-router';
import { unLoading } from '../actions/loading_actions';

const SessionMiddleware = ({getState, dispatch}) => next => action => {
  switch (action.type) {
    case SessionConstants.SIGN_UP:
      const success = data => {
        dispatch(receiveUser(data));
        dispatch(unLoading());
      };
      createUser(action.username, action.password, success);
      return next(action);
    case SessionConstants.SIGN_IN:
      const success2 = data => {
        dispatch(receiveUser(data));
        dispatch(unLoading());
      };
      requestUser(action.username, action.password, success2);
      return next(action);
    case SessionConstants.RECEIVE_USER:
      next(action);
      if (action.user.trees.length) {
        hashHistory.push('/users');
      } else {
        hashHistory.push('/chooseLanguage');
      }
      break;
    case SessionConstants.SIGN_OUT:
      signOut(() => {
        next(action);
        hashHistory.push('/auth');
        dispatch(unLoading());
      });
      break;
    default:
      return next(action);
  }
};

export default SessionMiddleware;
