import React from 'react';
import NavContainer from './nav_container';

class App extends React.Component{
  constructor (props) {
    super(props);
  }

  render () {
    // let className = "overlay-loader";
    // this.props.loading ? className += ' loading' : className += ' not-loading';
    // let loading = (
    //   <div className={className}>
    //   	<div className={this.props.loading ? "loader" : ""}>
    //   		<div></div>
    //   		<div></div>
    //   		<div></div>
    //   		<div></div>
    //   		<div></div>
    //   		<div></div>
    //   		<div></div>
    //   	</div>
    //   </div>
    // );
    let className;
    this.props.loading ? className = 'test-loading' : className = 'test-not-loading';
    let loading = (
      <div className={className} />
    );
    return (
      <div className='big-div'>
        <NavContainer />
        {loading}
        {this.props.children}
      </div>
    );
  }
}
export default App;
