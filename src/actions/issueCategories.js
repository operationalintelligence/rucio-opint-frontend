export const FETCH_ISSUE_CATEGORIES_BEGIN   = 'FETCH_ISSUE_CATEGORIES_BEGIN';
export const FETCH_ISSUE_CATEGORIES_SUCCESS = 'FETCH_ISSUE_CATEGORIES_SUCCESS';
export const FETCH_ISSUE_CATEGORIES_FAILURE = 'FETCH_ISSUE_CATEGORIES_FAILURE';
export const FETCH_ISSUE_CATEGORIES_ID = 'FETCH_ISSUE_CATEGORIES_ID';
export const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT';

export const fetchIssueCategoriesBegin = () => ({
  type: FETCH_ISSUE_CATEGORIES_BEGIN
});

export const fetchIssueCategoriesSuccess = issueCategories => ({
  type: FETCH_ISSUE_CATEGORIES_SUCCESS,
  payload: { issueCategories }
});

export const fetchIssueCategoriesFailure = error => ({
  type: FETCH_ISSUE_CATEGORIES_FAILURE,
  payload: { error }
});

export function fetchIssueCategoriesByID(id) {
    return {
        type: FETCH_ISSUE_CATEGORIES_ID,
        id: id
    }
}
