export const NodeConstants = {
  REQUEST_NODE: 'REQUEST_NODE',
  RECEIVE_NODE: 'RECEIVE_NODE',
  REQUEST_UPDATE: 'REQUEST_UPDATE'
};

export const requestNode = nodeId => {
  return {
    type: NodeConstants.REQUEST_NODE,
    nodeId
  };
};

export const receiveNode = node => {
  return {
    type: NodeConstants.RECEIVE_NODE,
    node
  };
};

export const requestUpdate = nodeId => {
  return {
    type: NodeConstants.REQUEST_UPDATE,
    nodeId
  };
};
