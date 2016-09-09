import React from  'react';
import { Link, withRouter, hashHistory } from 'react-router';


class Profile extends React.Component {
  constructor (props) {
    super(props);
    this.signOut = this.signOut.bind(this);
    this.treeLinks = this.treeLinks.bind(this);
  }

  componentDidMount () {
    this.props.requestTreeNames(this.props.currentUser.id);
  }

  signOut (e) {
    e.preventDefault();
    this.props.signOut();
  }

  treeLinks () {
    let result = [];
    Object.keys(this.props.trees).forEach(idx => {
      let to = `/tree/${this.props.trees[idx].id}`;
      let name = this.props.trees[idx].name;
      let link = (<Link className='tree-link' to={to}>{name}</Link>);
      let li = (<li key={name} className='link-li'>{link}</li>);
      result.push(li);
    });
    return result;
  }

  render () {
    let treeLinks = this.treeLinks();
    let renderThis = () => (
      <div>Test</div>
    );
    let username = this.props.currentUser ? this.props.currentUser.username : '';
    if (!treeLinks.length && this.props.currentUser) {
      return (
        <div className='profile content-box'>
          <p className='welcome'>
            Welcome, {username}!
          </p>
          <div className='instruction'>
            This is where your languages will be listed.<br></br>To start learning your first language, please click the button below!
          </div>
          <button className='choose' onClick={() => hashHistory.push('/chooseLanguage')}>Choose language</button>
        </div>
      );
    } else {
      return (
        <div className='profile content-box'>
          <i className='profile-header'>Hello {username}!</i>
          <div className='instruction profile'>You are currently studying the following languages. To continue your progress, click on the name of the language you'd like to study.</div>
          <ul className='language-list'>
            {treeLinks}
            <Link className='add-language' to='/chooseLanguage'>Study a New Language</Link>
          </ul>
        </div>
      );
    }
  }
}

export default withRouter(Profile);
