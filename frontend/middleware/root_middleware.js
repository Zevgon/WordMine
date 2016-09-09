import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import NodeMiddleware from './node_middleware';
import TreeMiddleware from './tree_middleware';
import ProfileMiddleware from './profile_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  TreeMiddleware,
  NodeMiddleware,
  ProfileMiddleware
);

export default RootMiddleware;
