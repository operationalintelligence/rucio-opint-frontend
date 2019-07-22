import { FETCH_ACTIONS_BEGIN, FETCH_ACTIONS_SUCCESS, FETCH_ACTIONS_FAILURE } from '../actions/actions';
  
const initialState = {
    pending: true,
    actions: [],
    error: null
}

export function actionsReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_ACTIONS_BEGIN: 
            return {
                ...state,
                pending: true,
                error: null
            }
        case FETCH_ACTIONS_SUCCESS:
            return {
                ...state,
                pending: false,
                actions: action.payload.actions
            }
        case FETCH_ACTIONS_FAILURE:
            return {
                ...state,
                pending: false,
                error: action.payload.error,
                actions: []
            }
        default: 
            return state;
    }
}
