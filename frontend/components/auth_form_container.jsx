import { connect } from 'react-redux';
import { signUp, signIn } from '../actions/session_actions';
import AuthForm from './auth_form';
import { loading } from '../actions/loading_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    children: ownProps.children,
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: (username, password) => {
      // dispatch(loading());
      dispatch(signUp(username, password));
    },
    signIn: (username, password) => {
      // dispatch(loading());
      dispatch(signIn(username, password));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);
