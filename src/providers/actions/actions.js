import {createAction} from 'redux-actions';

export const login_my_user = createAction("LOGIN_MY_USER");
export const register_my_user = createAction("REGISTER_MY_USER");
export const login_my_user_success = createAction("LOGIN_MY_USER_SUCCESS");
export const login_my_user_failure = createAction("LOGIN_MY_USER_FAILURE");