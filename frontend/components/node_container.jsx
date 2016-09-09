import Node from './node';
import { connect } from 'react-redux';
import { requestNode, requestUpdate } from '../actions/node_actions';
import { loading } from '../actions/loading_actions';

const mapStateToProps = state => {
  return {
    words: state.node.words,
    nodes: state.tree.nodes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestNode: nodeId => {
      dispatch(requestNode(nodeId));
    },
    requestUpdate: nodeId => dispatch(requestUpdate(nodeId)),
    loading: () => dispatch(loading())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Node);
