import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { path } from "../../common/path";
import LogoIcon from "../../components/Icon/LogoIcon";
const { Header, Sider, Content } = Layout;

const AdminTemplate = () => {
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["0"]}
          items={[
            {
              key: "0",
              icon: <i className="fa-solid fa-list-check"></i>,
              label: <Link to={path.adminPage}></Link>,
            },
            {
              key: "1",
              icon: <i className="fa-solid fa-people-arrows"></i>,
              label: <Link to={path.manageUser}>Quản lý người dùng</Link>,
            },
            {
              key: "2",
              icon: <i className="fa-solid fa-person-chalkboard"></i>,
              label: <Link to={path.manageCourse}>Quản lý khóa học</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            backgroundColor: "#211C5B",
          }}
        >
          <Button
            type="text"
            icon={<LogoIcon />}
            onClick={() => navigate(path.homPage)}
            style={{
              fontSize: "16px",
              width: 200,
              height: 64,
            }}
          />
        </Header>

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            height: "100%",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminTemplate;
