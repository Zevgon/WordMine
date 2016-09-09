import { connect } from 'react-redux';
import { signOut } from '../actions/session_actions';
import Profile from './profile';
import { requestTreeNames } from '../actions/profile_actions';
import { loading } from '../actions/loading_actions';

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    trees: state.trees
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
    requestTreeNames: userId => {
      dispatch(requestTreeNames(userId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
