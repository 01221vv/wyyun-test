import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppHeaderWrapper } from './styled';
import { SearchOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu, Input } from 'antd';

interface IProps {
  children?: ReactNode;
}
type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: <Link to="/">发现音乐</Link>,
    key: '/discover'
  },
  {
    label: <Link to="/focus">关注</Link>,
    key: '/focus'
  },
  {
    label: <Link to="/mine">我的</Link>,
    key: '/mine'
  },
  {
    label: <Link to="/download">下载</Link>,
    key: '/download'
  },
  {
    label: <Link to="/download">占位1</Link>,
    key: '/home'
  },
  {
    label: <Link to="/download">占位2</Link>,
    key: '/notFound'
  }
];

const AppHeader: React.FC<IProps> = props => {
  return (
    <AppHeaderWrapper>
      <div className="content">
        <div className="nav">
          <div className="logo">
            <img src={require('@/assets/img/logo.png')} alt="logo" />
          </div>

          <Menu
            className="navItem"
            theme="dark"
            mode="horizontal"
            items={items}
          />
          <div className="user">
            <Input
              type="text"
              placeholder="搜索"
              prefix={<SearchOutlined />}
              className="user-search"
            />
            <div className="user-login">登录</div>
          </div>
        </div>
      </div>
    </AppHeaderWrapper>
  );
};
export default AppHeader;
