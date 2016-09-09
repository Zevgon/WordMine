import React from 'react';
import { connect } from 'react-redux';
import ChooseLanguage from './choose_language';
import { requestLanguageChoices, addTree } from '../actions/tree_actions';
import { loading } from '../actions/loading_actions';

const mapStateToProps = state => {
  return {
    choices: state.tree.choices,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestLanguageChoices: languageNames => {
      dispatch(loading());
      dispatch(requestLanguageChoices(languageNames));
    },
    addTree: treeId => {
      dispatch(loading());
      dispatch(addTree(treeId));
    },
    loading: () => dispatch(loading())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseLanguage);
