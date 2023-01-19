import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import * as Icon from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import style from '/styles/Layout.module.css';

import React, { useState } from 'react';
const { Header, Sider, Content } = Layout;

type MenuItem = {
  key: string;
  icon: string;
  label: string;
  path?: string;
  children?: MenuItem[];
};

type Props = {
  children?: JSX.Element;
};

export default function HomeLayout({children}: Props) {
  const [collapsed, setCollapsed] = useState(false);

  /* get menuData from backend
  const { data, error } = useSWR('/api/navigation', fetcher)
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  */
  const menuItems = [
    {
      key: '0',
      icon: 'FundOutlined',
      label: 'dashborad',
      path: '/'
    },
    {
      key: '1',
      icon: 'UploadOutlined',
      label: 'nav 1',
      children: [
        {
          key: '1.1',
          icon: '',
          label: 'card',
          path: '/card'
        },
      ],
    },
    {
      key: '2',
      icon: 'UserOutlined',
      label: 'nav 2',
    },
    {
      key: '3',
      icon: 'VideoCameraOutlined',
      label: 'nav 3',
    },
  ]


  function getMenuNode(items: MenuItem[]) {
    return items.map((item) => {
      if (!item.children) {
        return {
          key: item.key,
          icon: React.createElement(Icon[item.icon]),
          label: item.label,
          path: item.path
        };
      } else {
        return {
          key: item.key,
          icon: React.createElement(Icon[item.icon]),
          label: item.label,
          children: getMenuNode(item.children),
        };
      }
    });
  }

  function navigate(item){
    alert(item.path)
  }

  const menuTrees = getMenuNode(menuItems);

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
          items={menuTrees}
          onClick={(item)=>navigate(item)}
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
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
