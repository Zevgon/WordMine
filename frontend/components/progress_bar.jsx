import React from 'react';

class ProgressBar extends React.Component {
  constructor (props) {
    super(props);
  }

  divs () {
    let returnValue = [];
    for (let i = 0; i < this.props.idx; i++) {
      if (i === 0 && this.props.idx === 1) {
        returnValue.push(<li className="progress-bar first-and-only-progress-piece" key={i}></li>);
      } else if (i === 0) {
        returnValue.push(<li className="progress-bar first-progress-piece" key={i}></li>);
      } else if (i === this.props.idx - 1) {
        returnValue.push(<li className="progress-bar last-progress-piece" key={i}></li>);
      } else {
        returnValue.push(<li className="progress-bar middle-progress-piece" key={i}></li>);
      }
    }
    return returnValue;
  }

  render () {
    return(
      <ul className="progress-bar">
        {this.divs()}
      </ul>
    );
  }
}

export default ProgressBar;
