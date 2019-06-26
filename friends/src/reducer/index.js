import {
 LOGIN_SUCCESS,
 LOGIN_START,
 FETCH_START,
 FETCH_SUCCESS,
 FETCH_ERROR,
} from '../actions';

let defaultState = {
 friends: [],
 loading: false,
 error: '',
 loggingIn: false,
};

export default function reducer(state = defaultState, action) {
 switch (action.type) {
  case FETCH_START:
   return { ...state, loading: true, error: '' };
  case FETCH_SUCCESS:
   return { ...state, friends: action.payload, loading: false, error: '' };
  case FETCH_ERROR:
   return { ...state, loading: false, error: action.payload };
  case LOGIN_START:
   return { ...state, error: '', loggingIn: true };
  case LOGIN_SUCCESS:
   return { ...state, error: '', loggingIn: false };

  default:
   return state;
 }
}
