import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import AuthFormContainer from './auth_form_container';
import Root from './root.jsx';
import ProfileContainer from './profile_container';
import TreeContainer from './tree_container';
import NodeContainer from './node_container';
import AppContainer from './app_container';
import ChooseLanguageContainer from './choose_language_container';
import SplashPage from './splash_page';
import WordIndexContainer from './word_index_container';
import { requestNode } from '../actions/node_actions';


class AppRouter extends React.Component {
  constructor (props) {
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
    this.routes = (
      <Router history={ hashHistory }>
        <Router path='/' component={ AppContainer }>
          <IndexRoute component={ SplashPage } />
          <Route path='/auth' component={ AuthFormContainer } onEnter={this._redirectIfLoggedIn} />
          <Route path='/users' component={ ProfileContainer } onEnter={this._ensureLoggedIn} />
          <Route path='/chooseLanguage' component={ ChooseLanguageContainer } onEnter={this._ensureLoggedIn} />
          <Route path='/tree/:id' component={ TreeContainer } onEnter={this._ensureLoggedIn} />
          <Route path='/tree/:treeId/node/:nodeId' component={ NodeContainer } onEnter={this._ensureLoggedIn} />
          <Route path='/tree/:treeId/node/:nodeId/words'
                 component={ WordIndexContainer }
                 onEnter={this._ensureLoggedIn} />
        </Router>
      </Router>
    );
  }

  _ensureLoggedIn(nextState, replace) {
    if (!this.props.loggedIn) {
      replace('/auth');
    }
  }

  _fetchWords(nextState, replace) {
    if (!this.props.loggedIn) {
      replace('/auth');
    } else {
      this.props.store.dispatch(requestNode(parseInt(nextState.params.nodeId)));
    }
  }



  _redirectIfLoggedIn(nextState, replace) {
    if (this.props.loggedIn) {
      replace('/users');
    }
  }

  render () {
    return (
      <div>
        {this.routes}
      </div>
    );
  }
}

export default AppRouter;
