import { requestNodes, receiveNodes } from '../actions/tree_actions';
import { TreeConstants } from '../actions/tree_actions';
import { fetchNodes } from '../util/api_tree_util';
import { receiveLanguageChoices } from '../actions/tree_actions';
import { fetchLanguageChoices, createTreesUser } from '../util/api_tree_util';
import { hashHistory } from 'react-router';
import { unLoading } from '../actions/loading_actions';

const TreeMiddleware = ({getState, dispatch}) => next => action => {
  switch (action.type) {
    case TreeConstants.FETCH_NODES:
      const success = data => {
        dispatch(receiveNodes(data));
      };
      fetchNodes(action.treeId, success);
      return next(action);
    case TreeConstants.REQUEST_LANGUAGE_CHOICES:
      let success2 = data => {
        dispatch(receiveLanguageChoices(data));
        dispatch(unLoading());
      };
      fetchLanguageChoices(success2);
      return next(action);
    case TreeConstants.ADD_TREE:
      const createSuccess = data => {
        dispatch(receiveNodes(data));
        dispatch(unLoading());
      };
      createTreesUser(action.treeId, createSuccess);
      hashHistory.push(`/tree/${action.treeId}`);
      return next(action);
    default:
      return next(action);
  }
};

export default TreeMiddleware;
