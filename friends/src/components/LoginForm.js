import React, { Component } from 'react';

class LoginForm extends Component {
 state = {
     credentials = {
         username: '',
         password: ''
     }
 };

handleChange = e => {
    this.setState({
        credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
        }
    })
}

 login = e => {
     e.preventDefault();
    // this.props.login(this.state.credentials)
 }
 render() {
  return (
   <div>
       <form onSubmit={this.login}>
    <input name='username' value = {this.state.credentials.username} placeholder="username" onChange = {this.handleChange} />
    <input name='password' value = {this.state.credentials.password} placeholder="password" onChange = {this.handleChange} />
    <input placeholder="repeat password" />
    <button>Submit</button>
       </form>
   </div>
  );
 }
}

export default LoginForm;
