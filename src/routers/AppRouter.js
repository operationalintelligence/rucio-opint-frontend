import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Layout } from 'antd';
const { Header:AntdHeader, Footer:AntdFooter, Content:AntdContent } = Layout;

import Home from '../components/Home'
import Header from '../components/Header'
import TransferIssueList from '../components/TransferIssueList'
import WorkflowIssueList from '../components/WorkflowIssueList'
import IssueDetail from '../components/IssueDetail'
import NotFoundPage from '../components/NotFound'
import LoginForm from '../components/LoginForm'

const AppRouter = () => (
    <BrowserRouter>
        <Layout className="app-container">
            <AntdHeader>
                <Header />
            </AntdHeader>

            <AntdContent className="app-content">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/issues/transfer' component={TransferIssueList}/>
                    <Route exact path='/issues/workflow' component={WorkflowIssueList}/>
                    <Route exact path="/issues/:issue" component={IssueDetail} />
                    <Route exact path='/login' component={LoginForm}/>
                    <Route exact component={NotFoundPage}/>
                </Switch>
            </AntdContent>

            <AntdFooter className="app-footer" >&copy; CERN</AntdFooter>
        </Layout>
    </BrowserRouter>
);

export default AppRouter;