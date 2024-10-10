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
import { getLocalStorage } from "../../utils/utils";
import LogOutIcon from "../../components/Icon/LogOutIcon";
import UserIcon from "../../components/Icon/UserIcon";
const { Header, Sider, Content } = Layout;
import { Avatar, Dropdown } from "antd";
import { useDispatch } from "react-redux";
import { userStatus } from "../../redux/userSlice";

const AdminTemplate = () => {
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const infoAdmin = getLocalStorage("admin");
  const dispatch = useDispatch();

  const items = [
    {
      label: (
        <p className="flex space-x-2 items-center font-bold">
          <UserIcon />
          <span>{`Chào mừng giáo vụ ${infoAdmin.hoTen}`}</span>
        </p>
      ),
      key: "0",
    },
    {
      label: (
        <Link
          to={path.homePage}
          className="flex space-x-2 items-center font-bold text-[#4054B2]"
          onClick={() => {
            dispatch(userStatus(null));
            localStorage.removeItem("admin");
          }}
        >
          <LogOutIcon />
          <span>Đăng xuất</span>
        </Link>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
  ];

  const checkAdminLogin = () => {
    return (
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
      >
        <Avatar
          className="cursor-pointer text-blue-500 font-bold hover:bg-blue-500 hover:text-white duration-200 bg-white"
          size={30}
          shape="square"
        >
          {infoAdmin?.hoTen.charAt(0)}
        </Avatar>
      </Dropdown>
    );
  };

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
        <div className="flex items-center justify-between container mx-auto bg-blue-950">
          <Header
            style={{
              padding: 0,
            }}
          >
            <Button
              type="text"
              icon={<LogoIcon />}
              onClick={() => {
                navigate(path.homePage);
              }}
              style={{
                fontSize: "16px",
                width: 200,
                height: 64,
              }}
            />
          </Header>
          <div className="inline-block w-4/12 text-right">
            {checkAdminLogin()}
          </div>
        </div>
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
