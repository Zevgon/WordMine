import React from 'react';
import { hashHistory } from 'react-router';
import { isEqual } from 'lodash';

class ChooseLanguage extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.requestLanguageChoices();
  }

  componentWillReceiveProps (newProps) {
    if (!isEqual(this.props, newProps)) {
      this.props.requestLanguageChoices();
    }
  }

  handleClick (e, treeId) {
    e.preventDefault();
    this.props.addTree(treeId);
    this.props.loading();
  }

  render () {
    let welcomeChoose;
    if (this.props.currentUser) {
      if (
          this.props.choices &&
          this.props.choices[0] &&
          this.props.choices[0].currentUserTrees.length
        ) {
        welcomeChoose = (<i>Choose the language you would like to add</i>);
      } else {
        welcomeChoose = (
          <div className='welcome-choose'>
            <i>Hello, {this.props.currentUser.username}!</i>
            <div>Welcome to WordMine! To get started, please choose the language you'd like to learn from the list below.</div>
          </div>
        );
      }
    } else {
      welcomeChoose = (<div></div>);
    }
    let choices = [];
    if (this.props.choices) {
      this.props.choices.forEach(choice => {
        let func = (e) => this.handleClick(e, choice.id);
        let button = (<button onClick={func}>{choice.name}</button>);
        let className = `choice ${choice.name.toLowerCase()}`;
        choices.push(<li className={className} key={choice.name}>{button}</li>);
      });
    }
    if (choices.length === 0) {
      welcomeChoose = (<i>You are studying all of the available languages!</i>);
    }
    return(
      <div id='slide' className="content-box choices">
        {welcomeChoose}
        <ul className="language-choices">
          {choices}
        </ul>
        <button className="choices-back-button" onClick={() => hashHistory.push('/users')}>Back</button>
      </div>
    );
  }
}

export default ChooseLanguage;
