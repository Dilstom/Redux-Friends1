import React from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions';
import Friend from './Friend';

class FriendsList extends React.Component {
 state = {};

 componentDidMount() {
  this.props.getFriends();
 }
 render() {
  return (
   <div>
    {this.props.loading && <p>Loading Data</p>}
    {this.props.error && <h5>{this.props.error}</h5>}
    {this.props.friends.map(friend => {
     return <Friend key={friend.id} friend={friend} />;
    })}
   </div>
  );
 }
}

const mapStateToProps = function(state) {
 console.log('state in FriendsList: ', state);
 return {
  friends: state.friends,
  error: state.error,
 };
};
// or
// const mapStateToProps = ({ error, friends }) => ({
//  //  console.log('state in FriendsList: ', state);
//  friends,
//  error,
// });

export default connect(
 mapStateToProps,
 { getFriends }
)(FriendsList);
