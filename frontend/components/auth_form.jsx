import React from 'react';
import { hashHistory } from 'react-router';

class AuthForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {username: "", password: ""};
    this.update = this.update.bind(this);
    this.signUp = this.signUp.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signInAsGuest = this.signInAsGuest.bind(this);
  }

  update (field) {
    return e => {
      e.preventDefault();
      this.setState({[field]: e.currentTarget.value});
    };
  }

  signUp (e) {
    e.preventDefault();
    this.props.signUp(this.state.username, this.state.password);
  }

  signIn (e) {
    e.preventDefault();
    this.props.signIn(this.state.username, this.state.password);
  }

  signInAsGuest (e) {
    e.preventDefault();
    this.setState({
      username: "Demo User",
      password: "password"
    }, () => this.props.signIn(this.state.username, this.state.password));
  }

  render () {
    let errors;
    if (this.props.errors && this.props.errors.length > 0) {
      errors = (<p className="errors">{this.props.errors.join(", ")}</p>);
    }

    return (
      <div className="content-box">
        <form>
          <i>Learn the most common words in the language of your choice<sup>*</sup></i>
          <div className="auth-field-box">
            <div className="user-box icon-box">
              <i className="fa fa-user" aria-hidden="true"></i>
            </div>
            <input className="auth-field" onChange={this.update("username")} type="text" placeholder="Username" value={this.state.username}/>
          </div>
          <div className="auth-field-box">
            <div className="lock-box icon-box">
              <i className="fa fa-lock" aria-hidden="true"></i>
            </div>
            <input className="auth-field" onChange={this.update("password")} type="password" placeholder="Password" value={this.state.password}/>
          </div>
          {errors}
          <button className="sign-up" onClick={this.signUp} type="submit">Sign up</button>
          <button className="sign-in" onClick={this.signIn} type="submit">Sign in</button>
          <button className="sign-in-as-guest" onClick={this.signInAsGuest} type="submit">Sign in as Guest</button>
          <i className="footnote"><sup>*</sup>WordMine currently offers Spanish, French, German and Italian.</i>
        </form>
      </div>
    );
  }
}

export default AuthForm;
