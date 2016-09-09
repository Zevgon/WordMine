export const fetchNodes = (treeId, success) => {
  $.ajax({
    method: "GET",
    url: `/api/trees/${treeId}`,
    data: {
      tree: {
        id: treeId
      }
    },
    success
  });
};

export const fetchTreeNames = (userId, success) => {
  $.ajax({
    method: "GET",
    url: '/api/trees',
    data: {tree: {user_id: userId}},
    success
  });
};

export const fetchLanguageChoices = (success) => {
  $.ajax({
    method: "GET",
    url: '/api/choices/',
    success
  });
};

export const createTreesUser = (treeId, success) => {
  $.ajax({
    method: 'POST',
    url: '/api/trees_users',
    data: {trees_users: {
        tree_id: treeId
      }
    },
    success
  });
};
