export const LoadingConstants = {
  LOADING: 'LOADING',
  NOT_LOADING: 'NOT_LOADING'
};

export const loading = () => {
  return {
    type: LoadingConstants.LOADING
  };
};

export const unLoading = () => {
  return {
    type: LoadingConstants.NOT_LOADING
  };
};
