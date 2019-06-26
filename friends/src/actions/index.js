import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const ERROR = 'ERROR';
export const SUCCESS = 'SUCCESS';
export const LOADING = 'LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_START = 'LOGIN_START';

export const login = creds => dispatch => {
 dispatch({ type: LOGIN_START });
 // if we return axios call, we return a promise
 return (
  axiosWithAuth()
   //  axios
   //   .post('http://localhost:5000/api/login', creds)
   .post('/login', creds)
   .then(
    res => {
     localStorage.setItem('userToken', res.data.payload);
     dispatch({
      type: LOGIN_SUCCESS,
     });
     return true;
    }
    //    res => console.log(res.data.payload)
   )
   .catch(err => {
    console.log('err: ', err.response.data.error);
    dispatch({ type: ERROR, payload: err.response.data.error });
   })
 );
};

export const getFriends = () => dispatch => {
 dispatch({ type: FETCH_START });
 //  axios
 axiosWithAuth()
  .get('/friends')
  //   .get('http://localhost:5000/api/friends')
  .then(res => {
   console.log('check data: ', res.data);
   dispatch({ type: FETCH_SUCCESS, payload: res.data });
  })

  .catch(err =>
   dispatch({ type: FETCH_ERROR, payload: err.response.data.error })
  );
};
