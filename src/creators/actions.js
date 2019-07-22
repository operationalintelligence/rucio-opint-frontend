import {fetchActionsBegin, fetchActionsSuccess, fetchActionsFailure} from '../actions/actions';
import API from '../config/api';

export function fetchActions() {
  return dispatch => {
    dispatch(fetchActionsBegin());
    API.get('action')
    .then(res => {
        if(res.error) {
            throw(res.error);
        }
        dispatch(fetchActionsSuccess(res.data));
        return res.data;
    })
    .catch(error => {
        dispatch(fetchActionsFailure(error));
    })
}
}
