import React from 'react';
import ProgressBar from './progress_bar';
import { hashHistory } from 'react-router';

class Node extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idx: 0,
      guess: "",
      word: "",
      complete: false,
      error: false
    };
    this.handleCheck = this.handleCheck.bind(this);
    this.updateGuess = this.updateGuess.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  componentDidMount () {
    this.props.loading();
    this.props.requestNode(parseInt(this.props.params.nodeId));
    document.getElementById("guess-field").focus();
  }

  handleCheck (e) {
    e.preventDefault();
    let translation = this.props.words[this.state.idx].translation;
    let newIdx = this.state.idx + 1;
    let formattedGuess = this.state.guess.toLowerCase();
    if (formattedGuess === translation.toLowerCase()) {
      if (newIdx >= this.props.words.length) {
        this.setState({complete: true});
      }
      this.setState({
        idx: newIdx,
        guess: "",
        error: false
      });
    } else {
      this.setState({
        error: true
      });
    }
    let guessField = document.getElementById("guess-field");
    guessField.focus();
  }

  handleSuccess (e) {
    e.preventDefault();
    this.props.loading();
    this.props.requestUpdate(parseInt(this.props.routeParams.nodeId));
  }

  handleBack (e) {
    e.preventDefault();
    let path = this.props.location.pathname;
    hashHistory.push(`${path}/words`);
  }

  updateGuess (e) {
    this.setState({
      guess: e.currentTarget.value
    });
  }

  render () {
    let completeButton;
    let falseCount = 0;
    if (this.props.nodes) {
      this.props.nodes.forEach(node => {
        if (node.completed === false) {
          falseCount += 1;
        }
      });
    }
    let buttonText = falseCount <= 1 ? "You have completed all levels!" : "Unlock the next level!";
    let errorState = (this.state.error) ? "fa fa-times appear" : "fa fa-times";
    let word;
    let inputField;
    if (this.state.complete) {
      completeButton = (<button className="complete-button"
                                onClick={this.handleSuccess}
                                >{buttonText}</button>);
      word = "You did it!";
      inputField = (<div />);
    } else {
      completeButton = (<div className="hidden"></div>);
      word = this.props.words ? this.props.words[this.state.idx].word : "";
      inputField = (
        <div className='node-input'>Translate to English:
            <input id="guess-field"
            type="text"
            onChange={this.updateGuess}
            value={this.state.guess}>
          </input>
        </div>
      );
    }
    // <button onClick={this.handleSuccess}>For testing</button>
    return(
      <div className="node content-box">
        <i className="progress-header">Progress:</i>
        <ProgressBar idx={this.state.idx}/>
        <form onSubmit={this.handleCheck}>
          <p className="foreign-word">{word}</p>
          {inputField}
        </form>
        {completeButton}
        <i className={errorState} aria-hidden="true"></i>
        <div className="node-page-buttons">
          <button className="back-button" onClick={this.handleBack}>Back</button>
          <button id="check-button" onClick={this.handleCheck}>Check</button>
        </div>
      </div>
    );
  }
}

export default Node;
