import React, { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import { userService } from "../../service/user.service";
import utils, { getLocalStorage } from "../../utils/utils";

const GhiDanhUser = (taiKhoan) => {
  const [dsDaXet, setDsDaXet] = useState([]);
  const [dsChoXet, setDsChoXet] = useState([]);
  // const [arrFilter, setArrFilter] = useState([]);
  // const [isSearching, setIsSearching] = useState(false);
  useEffect(() => {
    userService
      .layDanhSachKhoaHocDaXetDuyet(getLocalStorage("admin").accessToken, taiKhoan)
      .then((res) => setDsDaXet(res.data))
      .catch((err) => console.log(err));
    userService
      .layDanhSachKhoaHocChoXetDuyet(getLocalStorage("admin").accessToken, taiKhoan)
      .then((res) => setDsChoXet(res.data))
      .catch((err) => console.log(err));
  }, [taiKhoan]);

  const duyetGhiDanh = (data) => {
    userService.duyetGhiDanhCourseForUser(getLocalStorage("admin").accessToken, data).then((res) => {
      userService
        .layDanhSachKhoaHocDaXetDuyet(getLocalStorage("admin").accessToken, taiKhoan)
        .then((res) => {
          setDsDaXet(res.data)
        })
        .catch((err) => {
        });
      userService
        .layDanhSachKhoaHocChoXetDuyet(getLocalStorage("admin").accessToken, taiKhoan)
        .then((res) => {
          // console.log(res);
          setDsChoXet(res.data)
        })
        .catch((err) => {
          // console.log(err)?
        });
    })
      .catch((err) => {
        // console.log(err);
      });
  }

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
            onClick={() => { }}
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
          <button className="bg-green-500/80 text-white py-2 px-3 rounded-md hover:scale-125 duration-300" onClick={() => {
            let sumData = { ...taiKhoan, maKhoaHoc: record.maKhoaHoc };
            duyetGhiDanh(sumData);
          }}>
            <i className="fa-solid fa-check"></i>
          </button>
          <button
            className="bg-red-500/80 text-white py-2 px-3 rounded-md hover:scale-125 duration-300"
            onClick={() => { }}
          >
            X
          </button>
        </Space >
      ),
    },
  ];

  // const searchTheoHoVaTen = (name) => {
  //   let txt = utils.removeVietnameseTones(name).trim().toLowerCase();
  //   let arrSearch = listUsers.filter((item, index) => {
  //     let searchName = utils
  //       .removeVietnameseTones(item.hoTen)
  //       .trim()
  //       .toLowerCase();
  //     return searchName.includes(txt);
  //   });
  //   setIsSearching(true);
  //   setArrFilter(arrSearch);
  //   return arrSearch;
  // };

  return (
    <div className="space-y-3">
      <div className="space-y-5 border-b-2 border-gray-400">
        <div className="flex items-center justify-between">
          <h1 className="text-xl text-blue-700 font-semibold">
            Khoá học chờ xác nhận
          </h1>
          {/* <input
            type="text"
            placeholder="Tìm kiếm họ và tên"
            className="border w-1/2 px-2 py-3 rounded-md"
            onInput={(e) => {
              if (e.target.value.trim() !== "") {
                setIsSearching(true);
                searchTheoHoVaTen(e.target.value);
              } else {
                setIsSearching(false);
              }
            }}
          /> */}
        </div>
        <Table columns={columnsChuaXet} dataSource={dataSourceChoXet} />
      </div>
      <div className="space-y-5">
        <h1 className="text-xl text-green-500 font-semibold">
          Khoá học đã ghi danh
        </h1>
        <Table columns={columnsDaXet} dataSource={dataSourceDaXet} />
      </div>
    </div>
  );
};

export default GhiDanhUser;
