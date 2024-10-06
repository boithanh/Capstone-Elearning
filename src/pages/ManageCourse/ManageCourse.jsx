import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Space, Table, Tag } from "antd";
import { getValueCourseApi } from "../../redux/courseSlice";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { path } from "../../common/path";
import { userService } from "../../service/user.service";
import utils from "../../utils/utils";
const ManageCourse = () => {
  const dispatch = useDispatch();
  const [arrFilter, setArrFilter] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const { listCourse } = useSelector((state) => state.courseSlice);
  const dataSource = (isSearching ? arrFilter : listCourse).map(
    (item, index) => ({
      ...item,
      index: index + 1,
    })
  );

  useEffect(() => {
    dispatch(getValueCourseApi());
  }, []);

  const columns = [
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
    // {
    //   title: "Hình ảnh",
    //   dataIndex: "hinhAnh",
    //   key: "hinhAnh",
    //   render: (text, record) => {
    //     <img src={record.hinhAnh} className="w-[10px]" />;
    //   },
    // },
    {
      title: "Lượt xem",
      dataIndex: "luotXem",
      key: "luotXem",
    },
    {
      title: "Người tạo",
      dataIndex: "nguoiTao",
      key: "nguoiTao",
      render: (text, record) => record.nguoiTao.taiKhoan,
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

  const searchTheoTenKhoaHoc = (name) => {
    let txt = utils.removeVietnameseTones(name).trim().toLowerCase();
    let arrSearch = listCourse.filter((item, index) => {
      let searchName = utils
        .removeVietnameseTones(item.tenKhoaHoc)
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
        <Link className="bg-dark text-black">Thêm khóa học</Link>
        <div className="flex flex-row gap-x-5">
          <input
            type="text"
            placeholder="Tìm kiếm tên khóa học"
            className="border w-3/4 px-2 py-3 rounded-md"
            onInput={(e) => {
              if (e.target.value.trim() !== "") {
                setIsSearching(true);
                searchTheoTenKhoaHoc(e.target.value);
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

export default ManageCourse;
