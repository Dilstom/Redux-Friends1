import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { login } from '../actions';

class LoginForm extends Component {
 state = {
  credentials: {
   username: '',
   password: '',
  },
 };

 handleChange = e => {
  this.setState({
   credentials: {
    ...this.state.credentials,
    [e.target.name]: e.target.value,
   },
  });
 };

 login = e => {
  e.preventDefault();
  // since we return axios.post call - we got a promise
  this.props.login(this.state.credentials).then(res => {
   if (res) {
    this.props.history.push('/api/friends');
   }
  });
 };
 render() {
  console.log('this.props: ', this.props);
  return (
   <div>
    <form onSubmit={this.login}>
     <input
      name="username"
      value={this.state.credentials.username}
      placeholder="username"
      onChange={this.handleChange}
     />
     <input
      name="password"
      value={this.state.credentials.password}
      placeholder="password"
      onChange={this.handleChange}
     />
     <button>
      {this.props.loggingIn ? (
       <Loader type="ThreeDots" color="green" height="12" width="26" />
      ) : (
       'Log in'
      )}
     </button>
    </form>
   </div>
  );
 }
}

const mapStateToProps = state => ({
 error: state.error,
 loggingIn: state.loggingIn,
});

export default connect(
 mapStateToProps,
 { login }
)(LoginForm);
