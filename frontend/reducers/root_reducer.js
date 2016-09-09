import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import NodeReducer from './node_reducer';
import TreeReducer from './tree_reducer';
import ProfileReducer from './profile_reducer';
import LoadingReducer from './loading_reducer';

const RootReducer = combineReducers({
  loading: LoadingReducer,
  session: SessionReducer,
  node: NodeReducer,
  tree: TreeReducer,
  trees: ProfileReducer
});

export default RootReducer;
