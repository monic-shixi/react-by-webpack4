import React from 'react';
import { Layout} from 'antd';
import Menu from './Menu';
import ErrorBoundary from '../error';
import Header from './header';

const { Content, Footer, Sider } = Layout;

export default class layout extends React.Component {
  render(){
    return(
      <Layout>
        <Header />
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => { console.log(broken); }}
            onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
          >
            <div className="logo" />
            <Menu />
          </Sider>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 780 }}>
              <ErrorBoundary>
                {this.props.children}
              </ErrorBoundary>
            </div>
          </Content>
        </Layout>
        <Footer style={{ textAlign: 'center' }}>
          ©2018 Created by Xiaohesong, All Rights Reserved.
        </Footer>
      </Layout>
    )
  }
}

// export default layout