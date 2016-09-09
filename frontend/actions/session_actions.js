export const SessionConstants = {
  SIGN_UP: 'SIGN_UP',
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT',
  RECEIVE_USER: 'RECEIVE_USER'
};

export const signUp = (username, password) => {
  return {
    type: SessionConstants.SIGN_UP,
    username,
    password
  };
};

export const signIn = (username, password) => {
  return {
    type: SessionConstants.SIGN_IN,
    username,
    password
  };
};

export const signOut = () => {
  return {
    type: SessionConstants.SIGN_OUT,
  };
};

export const receiveUser = user => {
  return {
    type: SessionConstants.RECEIVE_USER,
    user
  };
};
