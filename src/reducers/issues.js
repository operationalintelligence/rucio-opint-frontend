const initialState = {
    pending: true,
    issues: [],
    error: null
}

export function issuesReducer(state = initialState, action) {
    switch(action.type) {
        case 'FETCH_ISSUES_PENDING': 
            return {
                ...state,
                pending: true
            }
        case 'FETCH_ISSUES_SUCCESS':
            return {
                ...state,
                pending: false,
                issues: action.issues
            }
        case 'FETCH_ISSUES_ERROR':
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case 'FETCH_ISSUES_ID':
            return {
                ...state,
                issue: state.issues[action.id-1]
            }
        default: 
            return state;
    }
}
