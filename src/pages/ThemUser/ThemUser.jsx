import React, { useContext } from "react";
import { useFormik } from "formik";
import InputCustom from "../../components/Input/InputCustom";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { path } from "../../common/path";
import { userService } from "../../service/user.service";
import { NotificationContext } from "../../App";
import { useDispatch } from "react-redux";
import { getLocalStorage } from "../../utils/utils";

const ThemUser = () => {
  const navigate = useNavigate();
  const { showNotification } = useContext(NotificationContext);
  let token = getLocalStorage("admin").accessToken;

  const { values, handleChange, handleSubmit, touched, errors, resetForm } =
    useFormik({
      initialValues: {
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        email: "",
        soDT: "",
        maNhom: "GP01",
        maLoaiNguoiDung: "",
      },
      onSubmit: (values) => {
        userService
          .themNguoiDung(values, token)
          .then((res) => {
            console.log(res.data);
            showNotification(
              `Đã thêm ${
                res.data.maLoaiNguoiDung == "HV" ? "Học viên" : "Giáo vụ"
              }  ${res.data.taiKhoan}`,
              "info"
            );
            resetForm();
            navigate(path.manageUser);
          })
          .catch((err) => {
            console.log(err);
            showNotification(`Bạn nhập thiếu dữ liệu`, "error");
          });
      },
    });
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col justify-center space-y-5">
          <h2 className="text-3xl font-bold text-blue-400 uppercase">
            Thêm người dùng
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <InputCustom
                  name="taiKhoan"
                  labelContent="Tài khoản"
                  typeInput="text"
                  value={values.taiKhoan}
                  onChange={handleChange}
                />
              </div>
              <div>
                <InputCustom
                  name="matKhau"
                  labelContent="Mật khẩu"
                  typeInput="password"
                  onChange={handleChange}
                  value={values.matKhau}
                />
              </div>
              <div>
                <InputCustom
                  name="hoTen"
                  labelContent="Họ và Tên"
                  typeInput="text"
                  onChange={handleChange}
                  value={values.hoTen}
                />
              </div>
              <div>
                <InputCustom
                  name="email"
                  labelContent="Email"
                  typeInput="text"
                  onChange={handleChange}
                  value={values.email}
                />
              </div>
              <div>
                <InputCustom
                  name="soDT"
                  labelContent="Số Điện Thoại"
                  onChange={handleChange}
                  value={values.soDT}
                />
              </div>
              <div>
                <label
                  htmlFor="maLoaiNguoiDung"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Loại người dùng
                </label>
                <select
                  onChange={handleChange}
                  value={values.maLoaiNguoiDung}
                  name="maLoaiNguoiDung"
                  className="bg-gray-50 border border-gray-300 hover:border-black focus:border-black text-gray-900 text-sm rounded-md outline-none block w-1/2 p-2.5 mb-3"
                >
                  <option value="">--Xin chọn loại người dùng--</option>
                  <option value="GV">Giáo vụ</option>
                  <option value="HV">Học viên</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between">
              <Link
                className="px-5 py-3 rounded-md button-right w-1/4 text-center"
                to={path.manageUser}
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

export default ThemUser;
