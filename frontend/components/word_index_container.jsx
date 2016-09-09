import { connect } from 'react-redux';
import WordIndex from './word_index';
import { requestNode } from '../actions/node_actions';
import { loading } from '../actions/loading_actions';

const mapStateToProps = state => {
  return {words: state.node.words};
};

const mapDispatchToProps = dispatch => {
  return {
    requestNode: nodeId => {
      dispatch(requestNode(nodeId));
      // dispatch(loading());
    },
    loading: () => dispatch(loading())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WordIndex);
