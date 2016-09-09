export const ProfileConstants = {
  REQUEST_TREE_NAMES: 'REQUEST_TREE_NAMES',
  RECEIVE_TREE_NAMES: 'RECEIVE_TREE_NAMES'
};

export const requestTreeNames = userId => {
  return {
    type: ProfileConstants.REQUEST_TREE_NAMES,
    userId
  };
};

export const receiveTreeNames = trees => {
  return {
    type: ProfileConstants.RECEIVE_TREE_NAMES,
    trees
  };
};
