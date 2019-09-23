import React from 'react';
import { connect } from 'react-redux';
import { doLogout } from '../creators/auth';

import { Menu } from 'antd';
import { NavLink, withRouter } from 'react-router-dom'

const Header = (props) => (
    <Menu
        mode="horizontal"
        theme="dark"
        className="navigation-menu"
        defaultSelectedKeys={[props.location.pathname]}
      >
        <Menu.Item key="/">
            <NavLink exact activeClassName="is-active" to='/'>Home</NavLink>
        </Menu.Item>    
        <Menu.Item key="/issues">
            <NavLink exact activeClassName="is-active" to='/issues'>Issues</NavLink>
        </Menu.Item>
        { props.token ?
          <Menu.Item key="/logout">
            <a onClick={()=>{props.dispatch(doLogout()); props.history.push('/') }}>Logout ({props.username})</a>
          </Menu.Item>
          :
          <Menu.Item key="/login">
            <NavLink activeClassName="is-active" to='/login'>Login</NavLink>
          </Menu.Item>
        }
      </Menu>
)


const mapStateToProps = (state) => ({
  username: state.auth.username,
  token: state.auth.token
  });

export default connect(mapStateToProps)(withRouter(Header));
