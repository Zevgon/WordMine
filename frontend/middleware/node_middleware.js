import { NodeConstants } from '../actions/node_actions';
import { receiveNode } from '../actions/node_actions';
import { fetchNode, updateNode } from '../util/api_node_util';
import { unLoading } from '../actions/loading_actions';
import { receiveNodes } from '../actions/tree_actions';
import { hashHistory } from 'react-router';

const NodeMiddleware = ({getState, dispatch}) => next => action => {
  switch (action.type) {
    case NodeConstants.REQUEST_NODE:
      const success = data => {
        dispatch(receiveNode(data));
        dispatch(unLoading());
      };
      fetchNode(action.nodeId, success);
      return next(action);
    case NodeConstants.REQUEST_UPDATE:
      const updateSuccess = data => {
        dispatch(receiveNodes(data));
        hashHistory.push(`/tree/${data.id}`);
        dispatch(unLoading());
      };
      updateNode(action.nodeId, updateSuccess);
    default:
      return next(action);
  }
};

export default NodeMiddleware;
