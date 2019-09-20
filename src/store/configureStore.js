import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { issuesReducer } from '../reducers/issues'
import { actionsReducer } from '../reducers/actions'
import { issueCategoriesReducer } from '../reducers/issueCategories'
import { authReducer } from '../reducers/auth'

export default () => {
    const store = createStore(
        combineReducers({
            issues: issuesReducer,
            actions: actionsReducer,
            issueCategories: issueCategoriesReducer,
            auth: authReducer
        }),
        applyMiddleware(thunk)
    );
    return store;
}

