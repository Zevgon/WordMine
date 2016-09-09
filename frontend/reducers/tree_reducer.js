import { TreeConstants } from '../actions/tree_actions';

const TreeReducer = (state = {}, action) => {
  switch (action.type) {
    case TreeConstants.RECEIVE_NODES:
      return action.tree;
    case TreeConstants.RECEIVE_LANGUAGE_CHOICES:
      return {choices: action.languageChoices};
    default:
      return state;
  }
};

export default TreeReducer;
