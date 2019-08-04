import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { issuesReducer } from '../reducers/issues'
import { actionsReducer } from '../reducers/actions'
import { issueCategoriesReducer } from '../reducers/issueCategories'

export default () => {
    const store = createStore(
        combineReducers({
            issues: issuesReducer,
            actions: actionsReducer,
            issueCategories: issueCategoriesReducer
        }),
        applyMiddleware(thunk)
    );
    return store;
}

