export const createUser = (username, password, success) => {
  $.ajax({
    method: "POST",
    url: "/api/users",
    data: {
      user: {
        username,
        password
      }
    },
    success
  });
};

export const requestUser = (username, password, success) => {
  $.ajax({
    method: "POST",
    url: "/api/session",
    data: {
      user: {
        username,
        password
      }
    },
    success
  });
};

export const signOut = success => {
  $.ajax({
    method: "DELETE",
    url: "/api/session",
    success
  });
};
