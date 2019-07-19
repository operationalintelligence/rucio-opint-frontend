import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { issuesReducer } from '../reducers/issues'

export default () => {
    const store = createStore(
        combineReducers({
            issues: issuesReducer
        }),
        applyMiddleware(thunk)
    );
    return store;
}

