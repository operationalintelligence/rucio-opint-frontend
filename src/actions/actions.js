export const FETCH_ACTIONS_BEGIN   = 'FETCH_ACTIONS_BEGIN';
export const FETCH_ACTIONS_SUCCESS = 'FETCH_ACTIONS_SUCCESS';
export const FETCH_ACTIONS_FAILURE = 'FETCH_ACTIONS_FAILURE';

export const fetchActionsBegin = () => ({
  type: FETCH_ACTIONS_BEGIN
});

export const fetchActionsSuccess = actions => ({
  type: FETCH_ACTIONS_SUCCESS,
  payload: { actions }
});

export const fetchActionsFailure = error => ({
  type: FETCH_ACTIONS_FAILURE,
  payload: { error }
});