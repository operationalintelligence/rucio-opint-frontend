const initialState = {
    pending: true,
    errors: [],
    error: null
}

export function errorsReducer(state = initialState, action) {
    switch(action.type) {
        case 'FETCH_ERRORS_PENDING': 
            return {
                ...state,
                pending: true
            }
        case 'FETCH_ERRORS_SUCCESS':
            return {
                ...state,
                pending: false,
                errors: action.errors
            }
        case 'FETCH_ERRORS_ERROR':
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case 'FETCH_ERRORS_ID':
            return {
                ...state,
                cerror: state.errors[action.id-1]
            }
        default: 
            return state;
    }
}
