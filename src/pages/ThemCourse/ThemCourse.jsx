import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { getValueUserApi } from "../../redux/userSlice";
import InputCustom from "../../components/Input/InputCustom";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { path } from "../../common/path";
import { khoaHocService } from "../../service/khoaHoc.service";
import { useDispatch, useSelector } from "react-redux";
import ImgUpload from "../../components/ImgUpload/ImgUpload";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

const ThemCourse = () => {
  const [danhMuc, setDanhMuc] = useState([]);
  const dispatch = useDispatch();
  const { listUsers } = useSelector((state) => state.userSlice);
  const listGV = listUsers.filter((item) => item.maLoaiNguoiDung === "GV");
  const [editor] = useState(() => withReact(createEditor()));
  const initialValue = [
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }],
    },
  ];

  useEffect(() => {
    dispatch(getValueUserApi());
  }, []);

  useEffect(() => {
    khoaHocService
      .layAllDanhMucKhoaHoc()
      .then((res) => {
        setDanhMuc(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const { values, handleChange, handleSubmit, touched, errors, resetForm } =
    useFormik({
      initialValues: {},
      onSubmit: (values) => {
        // userService
        //   .themNguoiDung(values)
        //   .then((res) => {
        //     console.log(res.data);
        //     showNotification(`Đã thêm học viên ${res.data.taiKhoan}`, "info");
        //     resetForm();
        //     navigate(path.adminPage);
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //     showNotification(`Bạn nhập thiếu dữ liệu`, "error");
        //   });
      },
    });

  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col justify-center space-y-5">
          <h2 className="text-3xl font-bold text-blue-400 uppercase">
            Thêm khóa học
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <div>
                <InputCustom
                  name="maKhocHoc"
                  labelContent="Mã khóa học"
                  typeInput="text"
                  // value={values.taiKhoan}
                  onChange={handleChange}
                />
              </div>
              <div>
                <InputCustom
                  name="tenKhoaHoc"
                  labelContent="Tên khóa học"
                  typeInput="text"
                  onChange={handleChange}
                  // value={values.matKhau}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Danh mục khóa học
                </label>
                <select
                  onChange={handleChange}
                  // value={values.maDanhMuc}
                  name="maDanhMuc"
                  className="bg-gray-50 border border-gray-300 hover:border-black focus:border-black text-gray-900 text-sm rounded-md outline-none block w-1/2 p-2.5 mb-3"
                >
                  <option value="">--Xin chọn danh mục khóa học--</option>
                  {danhMuc?.map((item, index) => (
                    <option key={index} value={item.maDanhMuc}>
                      {item.tenDanhMuc}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <InputCustom
                  name="ngayTao"
                  labelContent="Ngày tạo"
                  typeInput="text"
                  onChange={handleChange}
                  placeholder={"dd/mm/yyyy"}
                  // value={values.hoTen}
                />
              </div>
              <div>
                <InputCustom
                  name="danhGia"
                  labelContent="Đánh giá"
                  typeInput="number"
                  onChange={handleChange}
                  // value={values.email}
                />
              </div>
              <div>
                <InputCustom
                  name="luotXem"
                  labelContent="Lượt xem"
                  typeInput="number"
                  onChange={handleChange}
                  // value={values.soDT}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Người tạo
                </label>
                <select
                  onChange={handleChange}
                  // value={values.maDanhMuc}
                  name="taiKhoanNguoiTao"
                  className="bg-gray-50 border border-gray-300 hover:border-black focus:border-black text-gray-900 text-sm rounded-md outline-none block w-1/2 p-2.5 mb-3"
                >
                  <option value="">--Xin chọn người tạo khóa học--</option>
                  {listGV?.slice(10, 15).map((item, index) => (
                    <option key={index} value={item.taiKhoan}>
                      {item.hoTen}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Hình ảnh
                </label>
                <ImgUpload />
              </div>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Mô tả
              </label>
              <div className="border rounded-md min-h-[200px] p-2">
                <Slate editor={editor} initialValue={initialValue}>
                  <Editable />
                </Slate>
              </div>
            </div>
            <div className="flex justify-between">
              <Link
                className="px-5 py-3 rounded-md button-right w-1/4 text-center"
                to={path.manageCourse}
              >
                <i className="fa-solid fa-arrow-left"></i> Back
              </Link>
              <button
                type="submit"
                className="px-5 py-3 rounded-md button-left w-1/4 text-center"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ThemCourse;
