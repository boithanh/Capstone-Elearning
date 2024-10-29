import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Space, Table, Tag } from "antd";
import { getValueCourseApi, setCourse } from "../../redux/courseSlice";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { path } from "../../common/path";
import utils, { getLocalStorage } from "../../utils/utils";
import { khoaHocService } from "../../service/khoaHoc.service";
import { NotificationContext } from "../../App";
import { Button, Modal } from "antd";
import GhiDanhCourse from "../GhiDanhCourse/GhiDanhCourse";

const ManageCourse = () => {
  const dispatch = useDispatch();
  const { showNotification } = useContext(NotificationContext);
  const [arrFilter, setArrFilter] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [ghiDanhCourse, setGhiDanhCourse] = useState("");
  const [courseGhiDanh, setCourseGhiDanh] = useState("");
  const { listCourse } = useSelector((state) => state.courseSlice);
  const dataSource = (isSearching ? arrFilter : listCourse).map(
    (item, index) => ({
      ...item,
      index: index + 1,
    })
  );

  useEffect(() => {
    dispatch(getValueCourseApi());
  }, [dispatch]);

  let token = getLocalStorage("admin").accessToken;

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
      width: 280,
    },
    { title: "Ngày tạo", dataIndex: "ngayTao", key: "ngayTao" },
    {
      title: "Lượt xem",
      dataIndex: "luotXem",
      key: "luotXem",
    },
    {
      title: "Người tạo",
      dataIndex: "nguoiTao",
      key: "nguoiTao",
      render: (text, record) => record.nguoiTao.hoTen,
    },
    {
      title: "Tác vụ",
      key: "action",
      render: (_, record) => (
        <Space size="middle" className="space-x-2">
          <button
            className="bg-blue-500/80 text-white py-2 px-3 rounded-md hover:scale-125 duration-300"
            onClick={() => {
              if (record.maKhoaHoc) {
                showModal();
                setGhiDanhCourse(record.maKhoaHoc);
                setCourseGhiDanh(record.tenKhoaHoc);
              }
            }}
          >
            Ghi Danh
          </button>
          <button className="bg-yellow-500/80 text-white py-2 px-3 rounded-md hover:text-white hover:scale-125 duration-300">
            <Link
              to={path.editCourse}
              onClick={() => {
                dispatch(setCourse(record.maKhoaHoc));
              }}
            >
              <span className="text-white">Sửa</span>
            </Link>
          </button>
          <button
            className="bg-red-500/80 text-white py-2 px-3 rounded-md hover:scale-125 duration-300"
            onClick={() => {
              khoaHocService
                .xoaKhoaHoc(record.maKhoaHoc, token)
                .then((res) => {
                  // console.log(res);
                  showNotification(
                    `Đã xóa mã khóa học ${record.maKhoaHoc}`,
                    "error"
                  );
                  dispatch(getValueCourseApi());
                  setIsSearching(false);
                  khoaHocService.layAllKhoaHoc();
                })
                .catch((err) => {
                  showNotification(`${err.response.data}`, "info");
                  // console.log(err);
                });
            }}
          >
            X
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        title={`Danh sách khóa học - ${courseGhiDanh}`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        maskClosable={false}
        okText="Ghi Danh"
        cancelText="Đóng"
        width={800}
      >
        <GhiDanhCourse maKhoaHoc={ghiDanhCourse} />
      </Modal>
      <div className="container mx-auto space-y-5 h-full">
        <div className="flex justify-between items-center">
          <h1 className="text-blue-400 uppercase font-bold text-3xl">
            Danh sách khóa học
          </h1>
          <Link
            to={path.addCourse}
            className="bg-dark text-black hover:underline font-semibold text-xl"
          >
            Thêm khóa học
          </Link>
        </div>

        <div className="flex flex-row gap-x-5">
          <input
            type="text"
            placeholder="Tìm kiếm Tên khóa học"
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
          {/* <button
            className="border rounded-md px-5 py-3 bg-blue-400 text-white"
            onClick={() => {}}
          >
            Tìm kiếm
          </button> */}
        </div>
        <Table columns={columns} dataSource={dataSource} />
        <Outlet />
      </div>
    </>
  );
};

export default ManageCourse;
