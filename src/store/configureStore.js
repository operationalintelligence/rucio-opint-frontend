import {createStore, combineReducers} from 'redux';
import errorsReducer from '../reducers/errors'

export default () => {
    const store = createStore(
        combineReducers({
            errors: errorsReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}
