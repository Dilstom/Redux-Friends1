import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import { connect } from 'react-redux';
import { getFriends } from './actions';
import { Route, Link } from 'react-router-dom';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

class App extends React.Component {
 constructor() {
  super();
  this.state = {};
 }

 render() {
  return (
   <div className="App">
    <ul>
     <li>
      <Link to="/login">Login Form</Link>
     </li>
     {/* <li><Link to='/api/friends'>FriendsForm</Link></li> */}
    </ul>
    <Route path="/login" component={LoginForm} />
    <PrivateRoute path="/api/friends" component={FriendsList} />
   </div>
  );
 }
}

export default App;
