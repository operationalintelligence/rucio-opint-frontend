import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { errorsReducer } from '../reducers/errors'

export default () => {
    const store = createStore(
        combineReducers({
            errors: errorsReducer
        }),
        applyMiddleware(thunk)
    );
    return store;
}

