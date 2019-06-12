import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Layout } from 'antd';
const { Header:AntdHeader, Footer:AntdFooter, Content:AntdContent } = Layout;

import Home from '../components/Home'
import Header from '../components/Header'
import ErrorList from '../components/ErrorList'
import NotFoundPage from '../components/NotFound'

const AppRouter = () => (
    <BrowserRouter>
        <Layout className="app-container">
            <AntdHeader>
                <Header />
            </AntdHeader>

            <AntdContent className="app-content">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/error-list' component={ErrorList}/>
                    <Route exact component={NotFoundPage}/>
                </Switch>
            </AntdContent>

            <AntdFooter className="app-footer" >&copy; CERN</AntdFooter>
        </Layout>
    </BrowserRouter>
);

export default AppRouter;