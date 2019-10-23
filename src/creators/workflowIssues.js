import {fetchWorkflowIssuesBegin, fetchWorkflowIssuesSuccess, fetchWorkflowIssuesFailure, fetchWorkflowIssueByID} from '../actions/workflowIssues';
import API from '../config/api';

export function fetchWorkflowIssues() {
    return dispatch => {
        dispatch(fetchWorkflowIssuesBegin());
        API.get('issues/workflow/?format=json')
        .then(res => {
            dispatch(fetchWorkflowIssuesSuccess(res.data.results));
            return res.data.results;
        })
        .catch(error => {
            dispatch(fetchWorkflowIssuesFailure(error));
        })
    }
}

export function fetchWorkflowIssueById(id, category) {
    return dispatch => {
      dispatch(fetchWorkflowIssuesBegin());
      API.get('issues/workflow/?format=json')
      .then(res => {
          dispatch(fetchWorkflowIssuesSuccess(res.data.results));
          dispatch(fetchWorkflowIssueByID(id));
          return id;
      })
      .catch(error => {
          dispatch(fetchWorkflowIssuesFailure(error));
      })
    }
}
