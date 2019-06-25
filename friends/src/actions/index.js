import axios from 'axios';
export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const ERROR = 'ERROR';
export const SUCCESS = 'SUCCESS';
export const LOADING = 'LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_START = 'LOGIN_START';

export function getFriends() {
 return function(dispatch) {
  dispatch({ type: FETCH_FRIENDS });
  axios
   .get('http://localhost:5000/api/friends')
   .then(res => dispatch({ type: SUCCESS, payload: res.data }))
   .catch(err => dispatch({ type: ERROR, payload: err }));
 };
}

// export function login() {
//  return {
//   type: LOGIN_SUCCESS,
//   payload: {
//    token:
//     'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ',
//   },
//  };
// }

export const login = creds => dispatch => {
 dispatch({ type: LOGIN_START });
};
