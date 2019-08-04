import {fetchIssueCategoriesBegin, fetchIssueCategoriesSuccess, fetchIssueCategoriesFailure, fetchIssueCategoriesByID} from '../actions/issueCategories';
import API from '../config/api';

export function fetchIssueCategories() {
    return dispatch => {
        dispatch(fetchIssueCategoriesBegin());
        API.get('issuecategories')
        .then(res => {
            dispatch(fetchIssueCategoriesSuccess(res.data.results));
            return res.data.results;
        })
        .catch(error => {
            dispatch(fetchIssueCategoriesFailure(error));
        })
    }
}

export function fetchIssueCategoriesById(id) {
    return dispatch => {
      dispatch(fetchIssueCategoriesBegin());
      API.get('issuecategories/?format=json')
      .then(res => {
          dispatch(fetchIssueCategoriesSuccess(res.data.results));
          dispatch(fetchIssueCategoriesByID(id));
          return id;
      })
      .catch(error => {
          dispatch(fetchIssueCategoriesFailure(error));
      })
    }
}
