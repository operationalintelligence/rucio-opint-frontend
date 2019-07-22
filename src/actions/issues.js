export const FETCH_ISSUES_BEGIN   = 'FETCH_ISSUES_BEGIN';
export const FETCH_ISSUES_SUCCESS = 'FETCH_ISSUES_SUCCESS';
export const FETCH_ISSUES_FAILURE = 'FETCH_ISSUES_FAILURE';
export const FETCH_ISSUES_ID = 'FETCH_ISSUES_ID';

export const fetchIssuesBegin = () => ({
  type: FETCH_ISSUES_BEGIN
});

export const fetchIssuesSuccess = issues => ({
  type: FETCH_ISSUES_SUCCESS,
  payload: { issues }
});

export const fetchIssuesFailure = error => ({
  type: FETCH_ISSUES_FAILURE,
  payload: { error }
});

export function fetchIssueByID(id) {
    return {
        type: FETCH_ISSUES_ID,
        id: id
    }
}
