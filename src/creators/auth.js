import {loginBegin, loginSuccess, loginFailure, logout} from '../actions/auth';
import API from '../config/api';

export function login() {
    return dispatch => {
        dispatch(loginBegin());
        API.get('users/')
        .then(res => {
            dispatch(loginSuccess(res.data.results));
            return res.data.results;
        })
        .catch(error => {
            dispatch(loginFailure(error));
        })
    }
}

export function logout() {
    return dispatch => {
      dispatch(logout());
    }
}
