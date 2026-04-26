import React from 'react';
import { Layout } from 'antd';
import CompassPage from './pages/CompassPage';
import './App.css';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        {/* You can add a title here if you want */}
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <CompassPage />
        </div>
      </Content>
    </Layout>
  );
}

export default App;
