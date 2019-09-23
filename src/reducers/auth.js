import { LOGIN_BEGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/auth';

const initialState = {
    username: "",
    token: "",
    error: "",
    pending: true
}

export function authReducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_BEGIN: 
            return {
                ...state,
                pending: true,
                error: null
            }
        case LOGIN_SUCCESS: 
            return {
                ...state,
                pending: false,
                username: action.payload.user.user.username,
                token: action.payload.user.token,
            }
        case LOGIN_FAILURE: 
            return {
                ...state,
                pending: false,
                error: action.payload.error
            }
        case LOGOUT: 
            return {
                ...action.payload,
            }
        default: 
            return state;
    }
}
