import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../actions/session_actions';
import Nav from './nav';
import { loading } from '../actions/loading_actions.js';

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => {
      dispatch(loading());
      dispatch(signOut());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
