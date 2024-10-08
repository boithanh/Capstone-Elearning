import React, { useContext } from "react";
import InputCustom from "../../components/Input/InputCustom";
import { useFormik } from "formik";
import { authService } from "../../service/auth.service";
import { useLottie } from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import { path } from "../../common/path";
import { getLocalStorage, setLocalStorage } from "../../utils/utils";
import { NotificationContext } from "../../App";
import animationSignIn from "../../assets/animation/signinAnimation.json";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useDispatch } from "react-redux";
import { userStatus } from "../../redux/userSlice";

const LoginPage = () => {
  const navigate = useNavigate();
  const { showNotification } = useContext(NotificationContext);
  const dispatch = useDispatch();
  const { values, handleChange, handleSubmit, touched, errors } = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      authService
        .signIn(values)
        .then((res) => {
          if (res.data.maLoaiNguoiDung == "HV") {
            showNotification(`Chào mừng học viên ${res.data.hoTen}`, "info");
            setLocalStorage("user", { ...res.data, matKhau: values.matKhau });
            dispatch(userStatus(res.data));
            setTimeout(() => {
              navigate(path.homePage);
            }, 1000);
          }
          if (res.data.maLoaiNguoiDung == "GV") {
            showNotification(`Chào mừng giáo vụ ${res.data.hoTen}`, "info");
            setLocalStorage("admin", { ...res.data, matKhau: values.matKhau });
            dispatch(userStatus(res.data));
            setTimeout(() => {
              navigate(path.adminPage);
            }, 1000);
          }
        })
        .catch((err) => {
          console.log(err);
          showNotification(
            "Có lỗi xảy ra vui lòng thử lại hoặc liên hệ bộ phận khách hàng",
            "error"
          );
        });
    },
  });
  const options = {
    animationData: animationSignIn,
    loop: true,
  };
  const { View } = useLottie(options);

  return (
    <>
      <Header />
      <div className="container mx-auto">
        <div className="flex justify-between h-full">
          <div className="w-1/2">{View}</div>
          <div className="w-1/2 flex flex-col justify-center space-y-8">
            <h2 className="text-3xl font-bold text-purple-800">Login Page</h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <InputCustom
                name="taiKhoan"
                labelContent="Tài khoản"
                typeInput="text"
                value={values.taiKhoan}
                onChange={handleChange}
              />
              <InputCustom
                name="matKhau"
                labelContent="Mật khẩu"
                typeInput="password"
                onChange={handleChange}
                value={values.matKhau}
              />
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="px-5 py-3 rounded-md button-left"
                >
                  Login
                </button>
                <Link
                  type="submit"
                  className="px-5 py-3 rounded-md button-right text-center w-1/4"
                  to={path.signUpPage}
                >
                  Sign Up ? <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
