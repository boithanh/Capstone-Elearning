import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import InputCustom from "../../components/Input/InputCustom";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { path } from "../../common/path";
import { khoaHocService } from "../../service/khoaHoc.service";

const ThemCourse = () => {
  const [danhMuc, setDanhMuc] = useState([]);
  useEffect(() => {
    khoaHocService
      .layAllDanhMucKhoaHoc()
      .then((res) => {
        setDanhMuc(res.data);
        console.log(res.data);
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
                  // value={values.hoTen}
                />
              </div>
              <div>
                <InputCustom
                  name="danhGia"
                  labelContent="Đánh giá"
                  typeInput="text"
                  onChange={handleChange}
                  // value={values.email}
                />
              </div>
              <div>
                <InputCustom
                  name="luotXem"
                  labelContent="Lượt xem"
                  onChange={handleChange}
                  // value={values.soDT}
                />
              </div>
              <div>
                <h1>Người tạo</h1>
              </div>
              <div>
                <h1>Hình Ảnh</h1>
              </div>
            </div>
            <div>
              <h1>Mô Tả</h1>
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
