export function fetchIssuesPending() {
    return {    
        type: 'FETCH_ISSUES_PENDING'
    }
}

export function fetchIssuesSuccess(issues) {
    return {
        type: 'FETCH_ISSUES_SUCCESS',
        issues
    }
}

export function fetchIssuesError(issue) {
    return {
        type: 'FETCH_ISSUES_ISSUE',
        issue: issue
    }
}

export function fetchIssueByID(id) {
    return {
        type: 'FETCH_ISSUES_ID',
        id: id
    }
}
