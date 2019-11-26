import { login_my_user , register_my_user, login_my_user_success, login_my_user_failure} from './actions'

const initialState = {
    isAuth: false 
}

export default (state = initialState, action) => {
    switch(action.type){
        case login_my_user.toString():
        return {
            ...state,
            isAuth: false,
        };

        case register_my_user.toString():
        return {
            ...state,
            isAuth: true,
        };

        case login_my_user_success.toString():
        return {
            ...state,
            isAuth: true,
        };

        case login_my_user_failure.toString():
        return {
            ...state,
            isAuth: false,
        };

        default:
        return state;

        }
    }
