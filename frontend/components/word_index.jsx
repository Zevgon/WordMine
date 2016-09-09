import React from 'react';
import { hashHistory } from 'react-router';

class WordIndex extends React.Component {
  constructor (props) {
    super(props);
    this.formatWords = this.formatWords.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  componentDidMount () {
    this.props.requestNode(parseInt(this.props.params.nodeId));
    this.props.loading();
  }

  formatWords () {
    let words = [];
    this.props.words.forEach(word => {
      let text = `${word.word}: ${word.translation}`;
      words.push(<li key={text} className="word-list-item">{text}</li>);
    });

    return words;
  }

  handleClick (e) {
    e.preventDefault();
    let treeId = this.props.routeParams.treeId;
    let nodeId = this.props.routeParams.nodeId;
    hashHistory.push(`tree/${treeId}/node/${nodeId}`);
  }

  handleBack (e) {
    e.preventDefault;
    let treeId = this.props.routeParams.treeId;
    hashHistory.push(`tree/${treeId}`)
  }

  render () {
    let words = [];
    if (this.props.words) {
      words = this.formatWords();
    }
    return (
      <div className="content-box word-list-box">
        <i className="word-list-header">Words you'll have to know:</i>
        <ul className="word-list">
          {words}
        </ul>
        <button className="ready-button"
                onClick={this.handleClick}>
                I'm ready. Bring it on!
        </button>
        <button className='back-to-tree'
                onClick={this.handleBack}>Back to language tree</button>
      </div>
    );
  }
}

export default WordIndex;
