import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import style from '/styles/Layout.module.css';

import React, { useState, ReactNode } from 'react';
const { Header, Sider, Content } = Layout;

type Props = {
  content: ReactNode;
  menuItems: [
    {
      key: string;
      icon: string;
      label: string;
    }
  ];
};

export default function CustomeLayout({
  content,
  menuItems = [
    {
      key: '1',
      icon: 'UserOutlined',
      label: 'nav 1',
    },
    {
      key: '2',
      icon: 'VideoCameraOutlined',
      label: 'nav 2',
    },
    {
      key: '3',
      icon: 'UploadOutlined',
      label: 'nav 3',
    },
  ],
}：Props) {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={style.logo} />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={menuItems}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: style.trigger,
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            // minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {content}
        </Content>
      </Layout>
    </Layout>
  );
}
