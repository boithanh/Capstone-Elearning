import React, { useContext, useEffect } from "react";
import { useFormik } from "formik";
import InputCustom from "../../components/Input/InputCustom";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { path } from "../../common/path";
import { userService } from "../../service/user.service";
import { useSelector } from "react-redux";
import { NotificationContext } from "../../App";
import { getLocalStorage } from "../../utils/utils";

const EditUser = () => {
  const dataUser = useSelector((state) => state.userSlice.editUser);
  const { showNotification } = useContext(NotificationContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (dataUser) {
      userService
        .timKiemNguoiDung(dataUser)
        .then((res) => {
          setValues(...res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [dataUser]);

  const {
    values,
    handleChange,
    handleSubmit,
    touched,
    errors,
    resetForm,
    setValues,
  } = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDt: "",
      maLoaiNguoiDung: "",
    },
    onSubmit: (values) => {
      // console.log(values);
      userService
        .updateUser(getLocalStorage("admin").accessToken, {
          ...values,
          maNhom: "GP01",
        })
        .then((res) => {
          showNotification(`Đã sửa tài khoản ${res.data.taiKhoan}`, "warning");
          navigate(path.manageUser);
          resetForm();
        })
        .catch((err) => {
          // console.log(err);
        });
    },
  });

  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col justify-center space-y-5">
          <h2 className="text-3xl font-bold">Sửa người dùng</h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <InputCustom
                  name="taiKhoan"
                  labelContent="Tài khoản"
                  typeInput="text"
                  value={values.taiKhoan}
                  placeholder={values.taiKhoan}
                  onChange={handleChange}
                  disabled={true}
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
                  name="soDt"
                  labelContent="Số Điện Thoại"
                  onChange={handleChange}
                  value={values.soDt}
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
                  className="bg-gray-50 border border-gray-300 hover:border-black focus:border-black text-gray-900 text-sm rounded-md outline-none block w-1/4 p-2.5 mb-3"
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
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditUser;
