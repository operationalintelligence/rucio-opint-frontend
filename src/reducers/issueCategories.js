import { FETCH_ISSUE_CATEGORIES_BEGIN, FETCH_ISSUE_CATEGORIES_SUCCESS, FETCH_ISSUE_CATEGORIES_FAILURE, FETCH_ISSUE_CATEGORIES_ID } from '../actions/issueCategories';

const initialState = {
    pending: true,
    issueCategories: [],
    searchText: '',
    error: null
}

export function issueCategoriesReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_ISSUE_CATEGORIES_BEGIN: 
            return {
                ...state,
                pending: true,
                error: null
            }
        case FETCH_ISSUE_CATEGORIES_SUCCESS:
            return {
                ...state,
                pending: false,
                issueCategories: action.payload.issueCategories
            }
        case FETCH_ISSUE_CATEGORIES_FAILURE:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case FETCH_ISSUE_CATEGORIES_ID:
            return {
                ...state,
                issue: state.issueCategories[action.id-1]
            }
        default: 
            return state;
    }
}