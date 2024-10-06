import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Space, Table, Tag } from "antd";
import { getValueUserApi } from "../../redux/userSlice";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { path } from "../../common/path";

const ManageUser = () => {
  const dispatch = useDispatch();
  const { listUsers } = useSelector((state) => state.userSlice);

  useEffect(() => {
    dispatch(getValueUserApi());
  }, []);

  const columns = [
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
    },
    {
      title: "Họ và Tên",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDt",
      key: "soDt",
    },
    {
      title: "Chức vụ",
      dataIndex: "maLoaiNguoiDung",
      key: "maLoaiNguoiDung",
      render: (text) => (
        <Tag color={text == "HV" ? "cyan-inverse" : "green-inverse"}>
          {text}
        </Tag>
      ),
    },
    {
      title: "Tác vụ",
      key: "action",
      render: (_, record) => (
        <Space size="middle" className="space-x-2">
          <button className="bg-blue-500/80 text-white py-2 px-3 rounded-md">
            Ghi Danh
          </button>
          <button className="bg-yellow-500/80 text-white py-2 px-3 rounded-md">
            Sửa
          </button>
          <button className="bg-red-500/80 text-white py-2 px-3 rounded-md">
            Xóa
          </button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div className="container mx-auto space-y-5 h-full">
        <Link className="bg-dark text-black" to={path.addUser}>
          Thêm người dùng
        </Link>
        <div className="flex flex-row gap-x-5">
          <input
            type="text"
            placeholder="search"
            className="border w-3/4 px-2 py-3 rounded-md"
          />
          <button className="border rounded-md px-5 py-3 bg-blue-400 text-white">
            Tìm kiếm
          </button>
        </div>
        <Table columns={columns} dataSource={listUsers} />
        <Outlet />
      </div>
    </>
  );
};

export default ManageUser;
