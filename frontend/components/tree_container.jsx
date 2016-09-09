import { connect } from 'react-redux';
import Tree from './tree';
import { fetchNodes } from '../actions/tree_actions';
import { loading } from '../actions/loading_actions';

const mapStateToProps = ({tree}) => {
  return {
    name: tree.name,
    nodes: tree.nodes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNodes: treeId => {
      dispatch(fetchNodes(treeId));
    },
    loading: () => dispatch(loading())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tree);
