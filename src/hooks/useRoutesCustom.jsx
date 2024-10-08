import React from "react";
import { useRoutes } from "react-router-dom";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import { path } from "../common/path";
import HomePage from "../pages/HomePage/HomePage";
import ListKhoaHoc from "../pages/ListKhoaHoc/ListKhoaHoc";
import DanhMucKhoaHoc from "../pages/DanhMucKhoaHoc/DanhMucKhoaHoc";
import TimKiemKhoaHoc from "../pages/TimKiemKhoaHoc/TimKiemKhoaHoc";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import UserInfoTemplate from "../template/UserInfoTemplate/UserInfoTemplate";
import AdminTemplate from "../template/AdminTemplate/AdminTemplate";
import ManageUser from "../pages/ManageUser/ManageUser";
import ManageCourse from "../pages/ManageCourse/ManageCourse";
import ThemUser from "../pages/ThemUser/ThemUser";
import EditUser from "../pages/EditUser/EditUser";
import ChiTietKhoaHoc from "../pages/ChiTietKhoaHoc/ChiTietKhoaHoc";
import ThemCourse from "../pages/ThemCourse/ThemCourse";
import EditCourse from "../pages/EditCourse/EditCourse";

const useRoutesCustom = () => {
  const routes = useRoutes([
    {
      path: path.homPage,
      element: <HomePage />,
      children: [
        {
          index: true,
          element: <ListKhoaHoc />,
        },
        {
          path: path.danhMucKhoaHoc,
          element: <DanhMucKhoaHoc />,
        },
        {
          path: path.timKiemKhoaHoc,
          element: <TimKiemKhoaHoc />,
        },
        {
          path: path.chiTietKhoaHoc,
          element: <ChiTietKhoaHoc />,
        },
      ],
    },
    {
      path: path.pageNotFound,
      element: <PageNotFound />,
    },
    { path: path.loginPage, element: <LoginPage /> },
    {
      path: path.signUpPage,
      element: <SignUpPage />,
    },
    {
      path: path.userInfo,
      element: <UserInfoTemplate />,
    },
    {
      path: path.adminPage,
      element: <AdminTemplate />,
      children: [
        {
          path: path.manageUser,
          element: <ManageUser />,
        },
        {
          path: path.addUser,
          element: <ThemUser />,
        },
        {
          path: path.editUser,
          element: <EditUser />,
        },
        {
          path: path.manageCourse,
          element: <ManageCourse />,
        },
        {
          path: path.addCourse,
          element: <ThemCourse />,
        },
        {
          path: path.editCourse,
          element: <EditCourse />,
        },
      ],
    },
  ]);
  return routes;
};

export default useRoutesCustom;
