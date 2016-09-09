export const TreeConstants = {
  REQUEST_NODES: 'REQUEST_NODES',
  RECEIVE_NODES: 'RECEIVE_NODES',
  FETCH_NODES: 'FETCH_NODES',
  RECEIVE_TREE_NAMES: 'RECEIVE_TREE_NAMES',
  REQUEST_LANGUAGE_CHOICES: 'REQUEST_LANGUAGE_CHOICES',
  RECEIVE_LANGUAGE_CHOICES: 'RECEIVE_LANGUAGE_CHOICES',
  ADD_TREE: 'ADD_TREE'
};

export const fetchNodes = treeId => {
  return {
    type: TreeConstants.FETCH_NODES,
    treeId
  };
};

export const receiveNodes = tree => {
  return {
    type: TreeConstants.RECEIVE_NODES,
    tree
  };
};

export const requestLanguageChoices = userId => {
  return {
    type: TreeConstants.REQUEST_LANGUAGE_CHOICES,
    userId
  };
};

export const receiveLanguageChoices = languageChoices => {
  return {
    type: TreeConstants.RECEIVE_LANGUAGE_CHOICES,
    languageChoices: languageChoices
  };
};

export const addTree = (treeId) => {
  return {
    type: TreeConstants.ADD_TREE,
    treeId
  };
};
