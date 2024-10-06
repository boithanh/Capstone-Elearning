import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Space, Table, Tag } from "antd";
import { getValueUserApi, setUser } from "../../redux/userSlice";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { path } from "../../common/path";
import utils from "../../utils/utils";
import { userService } from "../../service/user.service";

const ManageUser = () => {
  const dispatch = useDispatch();
  const [arrFilter, setArrFilter] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const { listUsers } = useSelector((state) => state.userSlice);
  const dataSource = (isSearching ? arrFilter : listUsers).map(
    (item, index) => ({
      ...item,
      index: index + 1,
    })
  );

  useEffect(() => {
    dispatch(getValueUserApi());
  }, []);

  const columns = [
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
          <Link
            to={path.editUser}
            className="bg-yellow-500/80 text-white py-2 px-3 rounded-md"
            onClick={() => {
              dispatch(setUser(record.taiKhoan));
            }}
          >
            Sửa
          </Link>
          <button
            className="bg-red-500/80 text-white py-2 px-3 rounded-md"
            onClick={() => {
              userService
                .xoaNguoiDung(record.taiKhoan)
                .then((res) => {
                  console.log(res);
                  dispatch(getValueUserApi());
                  userService.layDanhSachNguoiDung();
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Xóa
          </button>
        </Space>
      ),
    },
  ];

  const searchTheoHoVaTen = (name) => {
    let txt = utils.removeVietnameseTones(name).trim().toLowerCase();
    let arrSearch = listUsers.filter((item, index) => {
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
    <>
      <div className="container mx-auto space-y-5 h-full">
        <Link className="bg-dark text-black" to={path.addUser}>
          Thêm người dùng
        </Link>
        <div className="flex flex-row gap-x-5">
          <input
            type="text"
            placeholder="Tìm kiếm họ và tên"
            className="border w-3/4 px-2 py-3 rounded-md"
            onInput={(e) => {
              if (e.target.value.trim() !== "") {
                setIsSearching(true);
                searchTheoHoVaTen(e.target.value);
              } else {
                setIsSearching(false);
              }
            }}
          />
          <button
            className="border rounded-md px-5 py-3 bg-blue-400 text-white"
            onClick={() => {}}
          >
            Tìm kiếm
          </button>
        </div>
        <Table columns={columns} dataSource={dataSource} />
        <Outlet />
      </div>
    </>
  );
};

export default ManageUser;
