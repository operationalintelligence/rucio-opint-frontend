import {fetchIssuesBegin, fetchIssuesSuccess, fetchIssuesFailure, fetchIssueByID} from '../actions/issues';
import API from '../config/api';

export function fetchIssues() {
    return dispatch => {
        dispatch(fetchIssuesBegin());
        API.get('error/12')
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchIssuesSuccess(res.data));
            return res.data;
        })
        .catch(error => {
            dispatch(fetchIssuesFailure(error));
        })
    }
}

export function fetchIssueById(id) {
    return dispatch => {
      dispatch(fetchIssuesBegin());
      API.get('error/12')
      .then(res => {
          if(res.error) {
              throw(res.error);
          }
          dispatch(fetchIssuesSuccess(res.data));
          dispatch(fetchIssueByID(id));
          return id;
      })
      .catch(error => {
          dispatch(fetchIssuesFailure(error));
      })
    }
}
