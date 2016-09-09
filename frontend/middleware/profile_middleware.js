import { ProfileConstants } from '../actions/profile_actions';
import { receiveTreeNames } from '../actions/profile_actions';
import { fetchTreeNames } from '../util/api_tree_util';
import { unLoading } from '../actions/loading_actions';

const ProfileMiddleware = ({dispatch}) => next => action => {
  switch (action.type) {
    case ProfileConstants.REQUEST_TREE_NAMES:
      const success = data => {
        dispatch(receiveTreeNames(data));
        dispatch(unLoading());
      };
      fetchTreeNames(action.userId, success);
      return next(action);
    default:
      return next(action);
  }
};

export default ProfileMiddleware;
