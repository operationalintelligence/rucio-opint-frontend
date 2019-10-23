import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { issuesReducer } from '../reducers/issues'
import { workflowIssuesReducer } from '../reducers/workflowIssues'
import { actionsReducer } from '../reducers/actions'
import { issueCategoriesReducer } from '../reducers/issueCategories'
import { authReducer } from '../reducers/auth'

export default () => {
    const store = createStore(
        combineReducers({
            issues: issuesReducer,
            workflowIssues: workflowIssuesReducer,
            actions: actionsReducer,
            issueCategories: issueCategoriesReducer,
            auth: authReducer
        }),
        applyMiddleware(thunk)
    );
    return store;
}

