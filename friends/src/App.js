import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import { connect } from 'react-redux';
import { getFriends } from './actions';

class App extends React.Component {
 constructor() {
  super();
  this.state = {};
 }

 componentDidMount() {
  this.props.getFriends();
 }

 render() {
  return (
   <div className="App">
    <a
     className="App-link"
     href="https://reactjs.org"
     target="_blank"
     rel="noopener noreferrer"
    >
     Learn React
    </a>
    <LoginForm />
   </div>
  );
 }
}

const mapStateToProps = function(state) {
 return {
  friends: state.friends,
 };
};

export default connect(
 mapStateToProps,
 { getFriends }
)(App);
