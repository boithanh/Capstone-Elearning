import React, { useEffect, useState } from "react";
import LogoIcon from "../Icon/LogoIcon";
import { Link, useNavigate } from "react-router-dom";
import FormSearchKhoaHoc from "../Form/FormSearchKhoaHoc";
import CourseMenu from "../Menu/CourseMenu";
import WrapperSuggestCourse from "../Wrapper/WrapperSuggestCourse";
import MobileMenu from "../Menu/MobileMenu";
import { Avatar, Dropdown } from "antd";
import UserIcon from "../Icon/UserIcon";
import LogOutIcon from "../Icon/LogOutIcon";
import { path } from "../../common/path";
import { useDispatch, useSelector } from "react-redux";
import { userStatus } from "../../redux/userSlice";
import { info } from "sass";

const Header = () => {
  const { infoUser } = useSelector(state => state.userSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = [
    {
      label: (
        <Link to={path.userInfo} className="flex space-x-2 items-center font-bold">
          <UserIcon />
          <span>Thông tin cá nhân</span>
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <Link to={path.homePage}
          className="flex space-x-2 items-center font-bold text-[#4054B2]"
          onClick={() => {
            dispatch(userStatus(null));
            localStorage.removeItem("user");
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


  // Note: infoUser giả lập user sau khi login sẽ có thông tin này để load lên header menu
  const checkUserLogin = () => {
    return infoUser ? (
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
      >
        <Avatar
          className="cursor-pointer hover:bg-[#DEBE4C] duration-200"
          size={30}
          shape="square"
        >
          {infoUser?.hoTen.charAt(0)}
        </Avatar>
      </Dropdown>
    ) : (
      <>
        <Link className="me-8 text-white" to={"/login"}>
          Đăng nhập
        </Link>
        <Link className="text-white" to={"/sign-up"}>
          Đăng ký
        </Link>
      </>
    );
  };
  return (
    <>
      <header>
        <div className="container max-w-full">
          <div className="header_content flex items-center justify-items-center">
            <Link className="header_logo me-20" to={path.homePage}>
              <LogoIcon />
            </Link>
            <nav className="header_navigate w-full">
              <CourseMenu />
              <WrapperSuggestCourse>
                <FormSearchKhoaHoc />
              </WrapperSuggestCourse>
              <div className="inline-block w-4/12 text-right">
                {checkUserLogin()}
              </div>
            </nav>
          </div>
          <MobileMenu />
        </div>
      </header>
    </>
  );
};

export default Header;
