import {fetchActionsBegin, fetchActionsSuccess, fetchActionsFailure} from '../actions/actions';

export function fetchActions() {
  return dispatch => {
    dispatch(fetchActionsBegin());
    fetch('http://rucio-opint-api.web.cern.ch/action')
    .then(res => res.json())
    .then(res => {
        if(res.error) {
            throw(res.error);
        }
        console.log('fetchActions success:', res);
        dispatch(fetchActionsSuccess(res));
        return res;
    })
    .catch(error => {
        dispatch(fetchActionsFailure(error));
    })
}
}

