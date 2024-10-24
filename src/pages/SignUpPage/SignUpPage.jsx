import React, { useContext } from "react";
import { authService } from "../../service/auth.service";
import { useFormik } from "formik";
import { useLottie } from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import { path } from "../../common/path";
import animationSignUp from "../../assets/animation/SignUpAnimation.json";
import InputCustom from "../../components/Input/InputCustom";
import { NotificationContext } from "../../App";
import { setLocalStorage } from "../../utils/utils";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const SignUpPage = () => {
  const navigate = useNavigate();
  const { showNotification } = useContext(NotificationContext);
  const { values, handleChange, handleSubmit, touched, errors, resetForm } =
    useFormik({
      initialValues: {
        taiKhoan: "",
        matKhau: "",
        // checkMatKhau: "",
        hoTen: "",
        email: "",
        soDT: "",
        maNhom: "GP01",
      },
      onSubmit: (values) => {
        authService
          .signUp(values)
          .then((res) => {
            // console.log(res.data.content);
            showNotification("Đăng ký thành công", "success");
            navigate(path.loginPage);
            resetForm();
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
    animationData: animationSignUp,
    loop: true,
  };
  const { View } = useLottie(options);

  return (
    <>
      <Header />
      <div className="container xs:max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-[1140px] xs:px-4 md:px-8 mx-auto py-10">
        <div className="xs:block sm:flex md:flex justify-between items-center h-full">
          <div className="xs:w-full sm:w-1/2 md:w-1/2" data-aos="flip-left">{View}</div>
          <div className="xs:w-full sm:w-1/2 md:w-1/2 flex flex-col justify-center space-y-5" data-aos="flip-right">
            <h2 className="text-3xl font-bold text-purple-800">Sign Up Page</h2>
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
              <InputCustom
                name="hoTen"
                labelContent="Họ và Tên"
                typeInput="text"
                onChange={handleChange}
                value={values.hoTen}
              />
              <InputCustom
                name="email"
                labelContent="Email"
                typeInput="text"
                onChange={handleChange}
                value={values.email}
              />
              <InputCustom
                name="soDT"
                labelContent="Số Điện Thoại"
                onChange={handleChange}
                value={values.soDT}
              />
              <div className="xs:block sm:block md:flex md:justify-center lg:justify-between gap-5">
                <button
                  type="submit"
                  className="px-5 py-3 rounded-md button-left text-center xs:block xs:w-full lg:w-1/4 mb-4"
                >
                  Sign Up
                </button>
                <Link
                  type="submit"
                  className="px-5 py-3 rounded-md button-right text-center xs:block xs:w-full lg:w-1/4 mb-4"
                  to={path.loginPage}
                >
                  Login ? <i className="fa-solid fa-arrow-right"></i>
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

export default SignUpPage;
