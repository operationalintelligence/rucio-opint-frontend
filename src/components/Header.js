import React from 'react';
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
        <Menu.Item key="/errors">
            <NavLink exact activeClassName="is-active" to='/errors'>Errors</NavLink>
        </Menu.Item>    
      </Menu>
)

export default withRouter(Header);