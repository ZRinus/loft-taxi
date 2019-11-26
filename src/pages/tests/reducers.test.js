import authReducer from "../../providers/reducers/auth-reducer";

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
  } from '../../providers/actions/action-types';

describe("Reducers", () => {
    describe("CheckReducers", () => {
        let action;
        
        const initialState = {
            token: localStorage.getItem('token'),
            isAuthenticated: null,
            isLoading: false,
             // user: null
        };

      it('CheckReducers First Test User Loading', () => {

        action = {
            type: USER_LOADING, 
        }

        expect(authReducer(initialState, action)).toEqual({
            token: null,
            isAuthenticated: null,
            isLoading: true
        });
  
      });

      it('CheckReducers First Test User Already Loaded', () => {

        action = {
            type: USER_LOADED, 
        }

        expect(authReducer(initialState, action)).toEqual({
            token: null,
            isAuthenticated: true,
            isLoading: false
        });
  
      });

      it('CheckReducers First Test User Login With Success', () => {

        action = {
            type: LOGIN_SUCCESS, 
            payload: {
                token : null
            }
        }

        expect(authReducer(initialState, action)).toEqual({
            token: null,
            isAuthenticated: true,
            isLoading: false
        });
  
      });

      it('CheckReducers First Test User Login With Faylier', () => {

        action = {
            type: REGISTER_FAIL, 
            payload: {
                token : null
            }
        }

        expect(authReducer(initialState, action)).toEqual({
            token: null,
            isAuthenticated: false,
            isLoading: false
        });
  
      });
    })
})



