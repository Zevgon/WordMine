import { TreeConstants } from '../actions/tree_actions';
import merge from 'lodash/merge';

const ProfileReducer = (state = [], action) => {
  switch (action.type) {
    case TreeConstants.RECEIVE_TREE_NAMES:
      return action.trees;
    default:
      return state;
  }
};

export default ProfileReducer;
