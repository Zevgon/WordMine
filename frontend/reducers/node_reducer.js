import { NodeConstants } from '../actions/node_actions';

const NodeReducer = (state = {}, action) => {
  let that = NodeConstants;
  switch (action.type) {
    case NodeConstants.RECEIVE_NODE:
      return { words: action.node };
    default:
      return state;
  }
};

export default NodeReducer;
