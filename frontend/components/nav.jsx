import React from 'react';
import { Link, hashHistory } from 'react-router';

class Nav extends React.Component {
  constructor (props) {
    super(props);
    this.signOut = this.signOut.bind(this);
    this.redirectToAuth = this.redirectToAuth.bind(this);
  }

  signOut (e) {
    e.preventDefault();
    this.props.signOut();
  }

  redirectToAuth (e) {
    e.preventDefault();
    hashHistory.push('/auth');
  }

  render () {
    let text;
    let action;
    if (this.props.loggedIn) {
      text = "Sign out";
      action = this.signOut;
    } else {
      text = "Sign in";
      action = this.redirectToAuth;
    }
    return (
      <nav className='header-nav'>
        <div className='nav-left'>
          <Link to='/users' className='header-link'>WordMine</Link>
          <Link className='home-link' to='/users'>
            <img className='home'
                 src='http://vignette4.wikia.nocookie.net/f1wikia/images/a/a2/Home-button.png'>
            </img>
          </Link>
        </div>
        <Link className='header-sign' onClick={action} to='/auth'>{text}</Link>
      </nav>
    );
  }
}

export default Nav;
