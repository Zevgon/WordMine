import React from 'react';
import { isEqual } from 'lodash';
import { hashHistory } from 'react-router';

class Tree extends React.Component {
  constructor (props) {
    super(props);
    this.createNodeButtons = this.createNodeButtons.bind(this);
  }

  componentDidMount() {
    this.props.fetchNodes(parseInt(this.props.routeParams.id));
  }

  componentWillReceiveProps (newProps) {
    // if (!isEqual(this.props, newProps)) {
    //   this.props.fetchNodes(parseInt(this.props.routeParams.id));
    // }
  }

  handleClick (nodeId) {
    hashHistory.push(`${this.props.location.pathname}/node/${nodeId}/words`);
  }

  createNodeButtons () {
    let nodeButtons;
    if (this.props.nodes) {
      nodeButtons = this.props.nodes.map((node, idx) => {
        let className = "node-button";
        if (node.completed) {
          className += " completed";
        } else if (node.unlocked) {
          className += " unlocked";
        } else {
          className += " locked";
        }
        if (className.includes(" locked")) {
          return (
            <li key={node.node_id}>
              <div className={className}>{idx + 1}</div>
            </li>
          );
        } else {
          return (
            <li key={node.node_id}>
              <button className={className}
                onClick={() => this.handleClick(node.node_id)}>{idx + 1}
              </button>
            </li>
          );
        }
      });
    }

    return nodeButtons;
  }

  render () {
    let nodeButtons = this.createNodeButtons();
    // let showInstructionsClass;
    // if (this.props.nodes && this.props.nodes.length && this.props.nodes[0].completed) {
    //   showInstructionsClass = '';
    // } else {
    //   showInstructionsClass = 'show-instructions';
    // }
    // <p className={showInstructionsClass}></p>
    return (
      <div className="tree content-box">
        <div className='legend'>
          <div className='legend-completed'>
            Completed:
            <div className='completed color-box'></div>
          </div>
          <div className='legend-unlocked'>
            Unlocked:
            <div className='unlocked color-box'></div>
          </div>
          <div className='legend-locked'>
            Locked:
            <div className='locked color-box'></div>
          </div>
        </div>
        <h1 className="language-header">{this.props.name}</h1>
        <ul className="node-buttons">
          {nodeButtons}
        </ul>
        <button onClick={() => hashHistory.push('/users')}>Back to language list</button>
      </div>
    );
  }
}

export default Tree;
