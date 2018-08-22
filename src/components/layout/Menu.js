import React from 'react';
import {Menu, Icon} from 'antd'
import {Link} from 'react-router-dom'
import './Menu.css';

const menu = () => (
  <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
    <Menu.Item key="1">
      <Icon type="user" />
      <Link to='/'><span className="nav-text">Home</span></Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="video-camera" />
      <Link to='/ni'><span className="nav-text">You</span></Link>
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="upload" />
      <span className="nav-text">nav 3</span>
    </Menu.Item>
    <Menu.Item key="4">
      <Icon type="user" />
      <span className="nav-text">nav 4</span>
    </Menu.Item>
  </Menu>
)

export default menu