import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { issuessReducer } from '../reducers/issues'

export default () => {
    const store = createStore(
        combineReducers({
            issues: issuesReducer
        }),
        applyMiddleware(thunk)
    );
    return store;
}

