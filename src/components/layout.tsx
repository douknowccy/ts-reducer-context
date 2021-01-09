import React from "react";
import { Layout, Menu } from "antd";
import { FileOutlined } from "@ant-design/icons";
import sidebarList from "../constant/sidebarList";
import { Link, useHistory } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const LayoutPage: React.FC<React.ReactNode> = ({ children }) => {
  const [collapsed, setCollapsed] = React.useState(false);
  const { location } = useHistory();
  const onCollpased = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollpased}>
        <div className="logo" />
        <Menu theme="dark" selectedKeys={[location.pathname]} mode="inline">
          <Menu.Item key="/" icon={<FileOutlined />}>
            <Link to="/">home</Link>
          </Menu.Item>
          {sidebarList.map((item) => {
            const { icon, name, path } = item;
            return (
              <Menu.Item key={path} icon={icon}>
                <Link to={path}>{name}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>{children}</Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutPage;
