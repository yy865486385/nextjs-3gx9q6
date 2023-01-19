import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import * as Icon from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import style from '/styles/Layout.module.css';
import React, { useState,Fragment } from 'react';
import Link from 'next/link';
import cloneDeep from 'lodash';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu

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

type State = {
  collapsed: boolean
}

class HomeLayout extends React.Component<Props, State> {

  constructor(props){
    super(props)
    this.state={
      collapsed: false
    }
  }
  

  generateMenus(data) {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu
            key={item.key}
            title={
              <Fragment>
                {item.icon && Icon[item.icon]}
                <span>{item.label}</span>
              </Fragment>
            }
          >
            {this.generateMenus(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={item.key}>
          <Link href={item.path || '#'}>
            {item.icon && Icon[item.icon]}
            <span>{item.label}</span>
          </Link>
        </Menu.Item>
      )
    })
  }

  onOpenChange(openKeys){

  }

  getMenuNode(items: MenuItem[]) {
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
          children: this.getMenuNode(item.children),
        };
      }
    });
  }


  render() {
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
        path: ''
      },
      {
        key: '3',
        icon: 'VideoCameraOutlined',
        label: 'nav 3',
        path: ''
      },
    ]

    const menuTrees = this.getMenuNode(menuItems);

    const {collapsed} = this.state;

    // const {token: { colorBgContainer } } = theme.useToken();

    const  { token }  = theme.useToken();
    
    const {colorBgContainer} = token;

    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className={style.logo} />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={menuTrees}
            // onOpenChange={(openKeys)=>onOpenChange(openKeys)}
          >
          </Menu>
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
                onClick: () => this.setState({collapsed:!collapsed})
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
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
  
}

export default HomeLayout;