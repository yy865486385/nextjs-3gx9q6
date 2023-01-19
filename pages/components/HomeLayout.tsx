import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import * as Icon from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import style from '/styles/Layout.module.css';

import React, { useState, ReactNode } from 'react';
const { Header, Sider, Content } = Layout;

type MenuItem = {
  key: string;
  icon: string;
  label: string;
  children?: Array<MenuItem>;
};

type Props = {
  content?: JSX.Element;
  menuItems?: Array<MenuItem>;
  onClick?: Function
};

export default function HomeLayout(props: Props) {
  const [collapsed, setCollapsed] = useState(false);

  const {content,menuItems} = props;

  function getMenuNode(items: Array<MenuItem>) {
    return items.map((item) => {
      if (!item.children) {
        return {
          key: item.key,
          icon:()=> React.createElement(Icon[item.icon], {
            style: { fontSize: '16px' },
          }),
          label: item.label,
        };
      } else {
        return {
          key: item.key,
          icon: ()=> React.createElement(Icon[item.icon], {
            style: { fontSize: '16px' },
          }),
          label: item.label,
          children: getMenuNode(item.children),
        };
      }
    });
  }

  const newMenus = getMenuNode(menuItems);

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
          items={newMenus}
          onClick={(e)=>props.onClick(e)}
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
          {content}
        </Content>
      </Layout>
    </Layout>
  );
}
