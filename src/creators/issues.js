import {fetchIssuesBegin, fetchIssuesSuccess, fetchIssuesFailure, fetchIssueByID} from '../actions/issues';
import API from '../config/api';

export function fetchIssues() {
    return dispatch => {
        dispatch(fetchIssuesBegin());
        API.get('issues')
        .then(res => {
            dispatch(fetchIssuesSuccess(res.data.results));
            return res.data.results;
        })
        .catch(error => {
            dispatch(fetchIssuesFailure(error));
        })
    }
}

export function fetchIssueById(id) {
    return dispatch => {
      dispatch(fetchIssuesBegin());
      API.get('issues')
      .then(res => {
          dispatch(fetchIssuesSuccess(res.data.results));
          dispatch(fetchIssueByID(id));
          return id;
      })
      .catch(error => {
          dispatch(fetchIssuesFailure(error));
      })
    }
}
