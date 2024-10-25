import React, { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import { userService } from "../../service/user.service";
import utils, { getLocalStorage } from "../../utils/utils";

const GhiDanhCourse = (maKhoaHoc) => {
  const [dsHocVien, setDsHocVien] = useState([]);
  const [dsHVChoXet, setDsHVChoXet] = useState([]);
  const [arrFilter, setArrFilter] = useState([]);
  const [arrFilterChoXet, setArrFilterChoXet] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isSearchingChoXet, setIsSearchingChoXet] = useState(false);

  useEffect(() => {
    userService
      .layDanhSachHocVienKhoaHoc(getLocalStorage("admin").accessToken, maKhoaHoc)
      .then((res) => setDsHocVien(res.data))
      .catch((err) => console.log(err));
  }, [maKhoaHoc]);

  useEffect(() => {
    userService
      .layDanhSachHocVienChoXetDuyet(getLocalStorage("admin").accessToken, maKhoaHoc)
      .then((res) => setDsHVChoXet(res.data))
      .catch((err) => console.log(err));
  }, [maKhoaHoc]);

  const dataSourceHV = (isSearching ? arrFilter : dsHocVien).map(
    (item, index) => ({
      ...item,
      index: index + 1,
    })
  );

  const dataSourceChuaXet = (
    isSearchingChoXet ? arrFilterChoXet : dsHVChoXet
  ).map((item, index) => ({
    ...item,
    index: index + 1,
  }));

  const columnsHV = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
    },
    {
      title: "Họ và tên",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Tác vụ",
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

  const columnsHVChuaXet = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
    },
    {
      title: "Họ và tên",
      dataIndex: "hoTen",
      key: "hoTen",
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
            onClick={() => { }}
          >
            X
          </button>
        </Space>
      ),
    },
  ];

  const searchTheoHoVaTenChoXet = (name) => {
    let txt = utils.removeVietnameseTones(name).trim().toLowerCase();
    let arrSearch = dsHVChoXet.filter((item, index) => {
      let searchName = utils
        .removeVietnameseTones(item.hoTen)
        .trim()
        .toLowerCase();
      return searchName.includes(txt);
    });
    setIsSearchingChoXet(true);
    setArrFilterChoXet(arrSearch);
    return arrSearch;
  };

  const searchTheoHoVaTen = (name) => {
    let txt = utils.removeVietnameseTones(name).trim().toLowerCase();
    let arrSearch = dsHocVien.filter((item, index) => {
      let searchName = utils
        .removeVietnameseTones(item.hoTen)
        .trim()
        .toLowerCase();
      return searchName.includes(txt);
    });
    setIsSearching(true);
    setArrFilter(arrSearch);
    return arrSearch;
  };

  return (
    <div className="space-y-3">
      <div className="space-y-5 border-b-2 border-gray-400">
        <div className="flex items-center justify-between">
          <h1 className="text-xl text-blue-700 font-semibold">
            Học viên chờ xác nhận
          </h1>
          <input
            type="text"
            placeholder="Tìm kiếm họ và tên"
            className="border w-1/4 px-2 py-3 rounded-md"
            onInput={(e) => {
              if (e.target.value.trim() !== "") {
                setIsSearchingChoXet(true);
                searchTheoHoVaTenChoXet(e.target.value);
              } else {
                setIsSearchingChoXet(false);
              }
            }}
          />
        </div>
        <Table columns={columnsHVChuaXet} dataSource={dataSourceChuaXet} />
      </div>
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <h1 className="text-xl text-green-500 font-semibold">
            Học viên đã ghi danh
          </h1>
          <input
            type="text"
            placeholder="Tìm kiếm họ và tên"
            className="border w-1/4 px-2 py-3 rounded-md"
            onInput={(e) => {
              if (e.target.value.trim() !== "") {
                setIsSearching(true);
                searchTheoHoVaTen(e.target.value);
              } else {
                setIsSearching(false);
              }
            }}
          />
        </div>
        <Table columns={columnsHV} dataSource={dataSourceHV} />
      </div>
    </div>
  );
};

export default GhiDanhCourse;
