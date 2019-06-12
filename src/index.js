import ReactDOM from 'react-dom';
import React from 'react';
import AppRouter from './routers/AppRouter'
import './styles/styles.scss';

const jsx = (
    <AppRouter />
);

ReactDOM.render(jsx, document.getElementById('app'));