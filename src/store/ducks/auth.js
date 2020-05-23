import api from '../../service/api';
import * as storage from '../../service/localStorage';

// Actions
const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';
const LOAD = 'user/LOAD';

// State
export const initialState = {
  user: {
    id: -1, 
    username: "", 
    status: "", 
    name: "", 
    identify_number: "",
    email: "",
    phone: "",
    unit_id: "",
    created_at: "",
    updated_at: "",
    type: ""
  },
  logged: false,
};

// Reducer
export default function user(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.user,
        logged: true,
      };
    case LOGOUT:
      return initialState;
    case LOAD:
      return {
        ...state,
        user: action.user,
        logged: true,
      };
    default:
      return state;
  }
}

// actions creators
export function login(user) {
  return {
    type: LOGIN, user,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function load(loadedUser) {
  return {
    type: LOAD, user: loadedUser,
  };
}

export function signin(username, password) {
  return async (dispatch) => {
    const res = await api.post('/auth/sign_in', { username, password });
    storage.setAccessToken(res.headers['access-token']);
    storage.setTypeToken(res.headers['type-token']);
    storage.setRefreshToken(res.headers['refresh-token']);
    dispatch(login(res.data));
  };
}

export function signout() {
  return async (dispatch) => {
    await api.delete('/auth/sign_out');
    storage.setAccessToken('');
    storage.setTypeToken('');
    storage.setRefreshToken('');
    dispatch(logout());
  };
}

export function getUser() {
  return async (dispatch) => {
    const token = storage.getAccessToken();
    if (token) {
      try {
        const res = await api.get('/auth/validate_token');
        await dispatch(load(res.data));
      } catch (err) { /* */ }
    }
  };
}
