import {loginBegin, loginSuccess, loginFailure, logout} from '../actions/auth';
import API from '../config/api';

export function doLogin(user) {
    return dispatch => {
        dispatch(loginBegin());
        API.post('auth/login/', user,  {
            headers: {'Content-Type': 'application/json'}
          })
        .then(res => {
            const token = res.data.token;
            // const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            // localStorage.setItem('expirationDate', expirationDate);
            dispatch(loginSuccess(res.data));
            // dispatch(checkAuthTimeout(3600));
            return res.data.results;
        })
        .catch(error => {
            if (error.response.status == 400){ error.message = "Invalid credentials" }
            dispatch(loginFailure(error.message));
        })
    }
}

// export const checkAuthTimeout = expirationTime => {
//     return dispatch => {
//         setTimeout(() => {
//             dispatch(logout());
//         }, expirationTime * 1000)
//     }
// }


export function doLogout() {
    localStorage.setItem('token', '');
    return dispatch => {
      dispatch(logout());
    }
}
