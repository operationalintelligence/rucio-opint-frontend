import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Layout } from 'antd';
const { Header:AntdHeader, Footer:AntdFooter, Content:AntdContent } = Layout;

import Home from '../components/Home'
import Header from '../components/Header'
import ErrorList from '../components/ErrorList'
import ErrorDetail from '../components/ErrorDetail'
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
                    <Route exact path='/errors' component={ErrorList}/>
                    <Route exact path="/errors/:error" component={ErrorDetail} />
                    <Route exact component={NotFoundPage}/>
                </Switch>
            </AntdContent>

            <AntdFooter className="app-footer" >&copy; CERN</AntdFooter>
        </Layout>
    </BrowserRouter>
);

export default AppRouter;