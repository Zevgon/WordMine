import { connect } from 'react-redux';
import App from './app';

const mapStateToProps = state => {
  return {
    loading: state.loading
  };
};

export default connect(
  mapStateToProps
)(App);
