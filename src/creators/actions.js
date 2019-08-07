import {fetchActionsBegin, fetchActionsSuccess, fetchActionsFailure} from '../actions/actions';
import API from '../config/api';

export function fetchActions() {
  return dispatch => {
    dispatch(fetchActionsBegin());
    API.get('actions/?format=json')
    .then(res => {
        if(res.error) {
            throw(res.error);
        }
        dispatch(fetchActionsSuccess(res.data.results));
        return res.data.results;
    })
    .catch(error => {
        dispatch(fetchActionsFailure(error));
    })
}
}
