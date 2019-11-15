import React from 'react';
import { Form, Input, Button, Icon, Alert } from 'antd';
import { connect } from 'react-redux';
import { doLogin } from '../creators/auth';

import cern_logo from '../images/cern_logo.png'

class LoginForm extends React.Component {

      handleLogin = (e, data) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            this.props.dispatch(doLogin(JSON.stringify(values)));
            this.props.history.push('/issues/');
          }
        });        
      }

      handleCERNLogin = (e) => {
        window.location.replace("https://oauth.web.cern.ch/OAuth/Authorize?response_type=code&client_id=rucio_opint_ui_dev&redirect_uri=https:%2F%2Frucio-opint-ui-dev.web.cern.ch%2Flogin%2Fcern%2Fsuccess");
      }
    
      render() {
        const { getFieldDecorator } = this.props.form;
        return (
          <Form onSubmit={this.handleLogin} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input autoComplete="user" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input autoComplete="current-password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </Form.Item>
            {this.props.error && <Form.Item><Alert message={this.props.error} type="error" /></Form.Item>}
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              <Button type="primary" htmlType="button" className="login-form-button login-form-button-cern" onClick={this.handleCERNLogin}>
                  <img className="login-logo" src={cern_logo}/>
                  Login with CERN
              </Button>
            </Form.Item>
          </Form>
        );
      }
}

const WrappedLoginForm = Form.create({ name: 'login' })(LoginForm);


const mapStateToProps = (state) => ({
    token: state.auth.token,
    username: state.auth.username,
    error: state.auth.error
});

export default connect(mapStateToProps)(WrappedLoginForm);