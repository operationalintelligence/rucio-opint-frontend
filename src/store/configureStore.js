import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { issuesReducer } from '../reducers/issues'
import { actionsReducer } from '../reducers/actions'

export default () => {
    const store = createStore(
        combineReducers({
            issues: issuesReducer,
            actions: actionsReducer
        }),
        applyMiddleware(thunk)
    );
    return store;
}

