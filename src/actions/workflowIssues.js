export const FETCH_WORKFLOW_ISSUES_BEGIN   = 'FETCH_WORKFLOW_ISSUES_BEGIN';
export const FETCH_WORKFLOW_ISSUES_SUCCESS = 'FETCH_WORKFLOW_ISSUES_SUCCESS';
export const FETCH_WORKFLOW_ISSUES_FAILURE = 'FETCH_WORKFLOW_ISSUES_FAILURE';
export const FETCH_WORKFLOW_ISSUES_ID = 'FETCH_WORKFLOW_ISSUES_ID';
export const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT';

export const fetchWorkflowIssuesBegin = () => ({
  type: FETCH_WORKFLOW_ISSUES_BEGIN
});

export const fetchWorkflowIssuesSuccess = issues => ({
  type: FETCH_WORKFLOW_ISSUES_SUCCESS,
  payload: { issues }
});

export const fetchWorkflowIssuesFailure = error => ({
  type: FETCH_WORKFLOW_ISSUES_FAILURE,
  payload: { error }
});

export function fetchWorkflowIssueByID(id) {
    return {
        type: FETCH_WORKFLOW_ISSUES_ID,
        id: id
    }
}

export const updateSearchText = text =>({
  type: UPDATE_SEARCH_TEXT,
  searchText: text
});
