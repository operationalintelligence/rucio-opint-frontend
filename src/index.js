import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore'
import AppRouter from './routers/AppRouter'
import './styles/styles.scss';

const store = configureStore();

export default class App extends React.Component {
    render(){
        return (
            <Provider store={store}>
                <AppRouter />
            </Provider>    
        )}
}

ReactDOM.render(<App />, document.getElementById('app'));