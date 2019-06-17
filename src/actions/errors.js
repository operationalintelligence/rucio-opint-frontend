
export function fetchErrorsPending() {
    return {    
        type: 'FETCH_ERRORS_PENDING'
    }
}

export function fetchErrorsSuccess(errors) {
    return {
        type: 'FETCH_ERRORS_SUCCESS',
        errors
    }
}

export function fetchErrorsError(error) {
    return {
        type: 'FETCH_ERRORS_ERROR',
        error: error
    }
}

export function fetchErrorByID(id) {
    return {
        type: 'FETCH_ERRORS_ID',
        id: id
    }
}
