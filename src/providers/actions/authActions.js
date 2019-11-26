import axios from 'axios';
import { returnErrors } from './errorActions';

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_PROCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_PROCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './action-types';

export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });
  /*const token = localStorage.getItem('token');
  if (token != null && token != 'undefined') {
    dispatch({
      type: USER_LOADED,
      payload: token
    })
  }
  else {
    dispatch({
      type: AUTH_ERROR
    });
  }*/
};

// Register User
export const register = ({ name, surname, email, password }) => async dispatch => {

  await dispatch({ type: REGISTER_PROCESS, payload: {name, surname, email, password} });

   return 0;
  // Headers
 /* const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Request body
  const body = JSON.stringify({ name, surname, email, password });

  await axios
    .post('https://loft-taxi.glitch.me/register', body, config)
    .then(res => {
      if (res.data.success == true) {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data
        })
      }
      else {
        dispatch({
          type: REGISTER_FAIL,
          payload: res.data
        });
      }
    }

    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
      );
      dispatch({
        type: REGISTER_FAIL
      });
    });*/
};

// Login User
 export const login =  ({ email, password }) => async dispatch => {

  await dispatch({ type: LOGIN_PROCESS, payload: {email: email, password: password} });

   return 0;

 /* const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Request body
  const body = JSON.stringify({ email, password });

  await axios
    .post('https://loft-taxi.glitch.me/auth', body, config)
    .then(res => {
      if (res.data.success == true) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data
        })
      }
      else {
        dispatch({
          type: LOGIN_FAIL,
          payload: res.data
        });
      }
    })
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
      );
      dispatch({
        type: LOGIN_FAIL
      });
    });*/
};

// Logout User
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

// Setup config/headers and token
export const tokenConfig = getState => {
  // Get token from localstorage
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  };

  // If token, add to headers
  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
};