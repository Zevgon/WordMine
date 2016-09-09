export const fetchNode = (nodeId, success) => {
  $.ajax({
    method: "GET",
    url: `/api/nodes/${nodeId}`,
    data: {
      node: {
        id: nodeId
      }
    },
    success
  });
};

export const updateNode = (nodeId, success) => {
  $.ajax({
    method: "PATCH",
    url: `/api/nodes/${nodeId}`,
    data: {
      node: {
        id: nodeId
      }
    },
    success
  });
};
