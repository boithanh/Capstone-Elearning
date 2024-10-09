import React, { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import { userService } from "../../service/user.service";

const GhiDanhUser = (taiKhoan) => {
  const [dsDaXet, setDsDaXet] = useState([]);
  const [dsChoXet, setDsChoXet] = useState([]);

  useEffect(() => {
    userService
      .layDanhSachKhoaHocDaXetDuyet(taiKhoan)
      .then((res) => setDsDaXet(res.data))
      .catch((err) => console.log(err));
  }, [taiKhoan]);

  useEffect(() => {
    userService
      .layDanhSachKhoaHocChoXetDuyet(taiKhoan)
      .then((res) => setDsChoXet(res.data))
      .catch((err) => console.log(err));
  }, [taiKhoan]);

  const dataSourceDaXet = dsDaXet.map((item, index) => ({
    ...item,
    index: index + 1,
  }));

  const dataSourceChoXet = dsChoXet?.map((item, index) => ({
    ...item,
    index: index + 1,
  }));

  const columnsDaXet = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "Mã khóa học",
      dataIndex: "maKhoaHoc",
      key: "maKhoaHoc",
    },
    {
      title: "Tên khóa học",
      dataIndex: "tenKhoaHoc",
      key: "tenKhoaHoc",
    },
    {
      title: "Xác nhận",
      key: "action",
      render: (_, record) => (
        <Space size="middle" className="space-x-1">
          {/* <button className="bg-green-500/80 text-white py-2 px-3 rounded-md hover:scale-125 duration-300">
            <i className="fa-solid fa-check"></i>
          </button> */}
          <button
            className="bg-red-500/80 text-white py-2 px-3 rounded-md hover:scale-125 duration-300"
            onClick={() => {}}
          >
            X
          </button>
        </Space>
      ),
    },
  ];
  const columnsChuaXet = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "Mã khóa học",
      dataIndex: "maKhoaHoc",
      key: "maKhoaHoc",
    },
    {
      title: "Tên khóa học",
      dataIndex: "tenKhoaHoc",
      key: "tenKhoaHoc",
    },
    {
      title: "Xác nhận",
      key: "action",
      render: (_, record) => (
        <Space size="middle" className="space-x-1">
          <button className="bg-green-500/80 text-white py-2 px-3 rounded-md hover:scale-125 duration-300">
            <i className="fa-solid fa-check"></i>
          </button>
          <button
            className="bg-red-500/80 text-white py-2 px-3 rounded-md hover:scale-125 duration-300"
            onClick={() => {}}
          >
            X
          </button>
        </Space>
      ),
    },
  ];

  return (
    <div className="space-y-3">
      <div className="space-y-5 border-b-2 border-blue-500">
        <h1 className="text-xl font-semibold">Khoá học chờ xác nhận</h1>
        <Table columns={columnsChuaXet} dataSource={dataSourceChoXet} />;
      </div>
      <div className="space-y-5">
        <h1 className="text-xl font-semibold">Khoá học đã ghi danh</h1>
        <Table columns={columnsDaXet} dataSource={dataSourceDaXet} />
      </div>
    </div>
  );
};

export default GhiDanhUser;
