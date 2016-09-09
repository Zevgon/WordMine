import { connect } from 'react-redux';
import Router from './router';

const mapStateToProps = state => {
  return {
    loading: state.loading,
    currentUser: state.session.currentUser,
    loggedIn: Boolean(state.session.currentUser)
  };
};

export default connect(
  mapStateToProps
)(Router);
