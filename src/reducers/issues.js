import { FETCH_ISSUES_BEGIN, FETCH_ISSUES_SUCCESS, FETCH_ISSUES_FAILURE, FETCH_ISSUES_ID } from '../actions/issues';

const initialState = {
    pending: true,
    issues: [],
    error: null
}

export function issuesReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_ISSUES_BEGIN: 
            return {
                ...state,
                pending: true,
                error: null
            }
        case FETCH_ISSUES_SUCCESS:
            return {
                ...state,
                pending: false,
                issues: action.payload.issues
            }
        case FETCH_ISSUES_FAILURE:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case FETCH_ISSUES_ID:
            return {
                ...state,
                issue: state.issues[action.id-1]
            }
        default: 
            return state;
    }
}
