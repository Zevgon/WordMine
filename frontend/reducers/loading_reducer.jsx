import merge from 'lodash/merge';
import { LoadingConstants } from '../actions/loading_actions';

const LoadingReducer = (state = false, action) => {
  switch (action.type) {
    case LoadingConstants.LOADING:
      return true;
    case LoadingConstants.NOT_LOADING:
      return false;
    default:
      return state;
  }
};

export default LoadingReducer;
