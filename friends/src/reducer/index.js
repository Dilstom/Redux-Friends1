import {
 FETCH_FRIENDS,
 ERROR,
 SUCCESS,
 LOGIN_SUCCESS,
 LOGIN_START,
} from '../actions';

let defaultState = {
 friends: [],
 loading: false,
 error: '',
 loggingIn: false,
};

export default function reducer(state = defaultState, action) {
 switch (action.type) {
  case FETCH_FRIENDS:
   return { ...state, friends: [], loading: true, error: '' };
  case SUCCESS:
   return { ...state, friends: action.payload, loading: false, error: '' };
  case ERROR:
   return { ...state, friends: [], loading: false, error: action.payload };
  case LOGIN_START:
   return { ...state, error: '', loggingIn: true };

  default:
   return state;
 }
}
