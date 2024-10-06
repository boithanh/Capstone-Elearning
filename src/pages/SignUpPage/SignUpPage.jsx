import React from "react";
import { authService } from "../../service/auth.service";
import { useFormik } from "formik";
import { useLottie } from "lottie-react";
import { Link } from "react-router-dom";
import { path } from "../../common/path";
import animationSignUp from "../../assets/animation/SignUpAnimation.json";
import InputCustom from "../../components/Input/InputCustom";
import { setLocalStorage } from "../../utils/utils";

const SignUpPage = () => {
  const { values, handleChange, handleSubmit, touched, errors } = useFormik({
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
      console.log(values);
      authService
        .signUp(values)
        .then((res) => {
          console.log(res.data.content);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  const options = {
    animationData: animationSignUp,
    loop: true,
  };
  const { View } = useLottie(options);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between h-full">
        <div className="w-1/2">{View}</div>
        <div className="w-1/2 flex flex-col justify-center space-y-5">
          <h2 className="text-3xl font-bold">Sign Up Page</h2>
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
            {/* <InputCustom
              name="checkMatKhau"
              labelContent="Nhập lại Mật khẩu"
              typeInput="password"
              onChange={handleChange}
              value={values.checkMatKhau}
            /> */}
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
            <div className="flex justify-between">
              <button
                type="submit"
                className="px-5 py-3 rounded-md block bg-black text-white w-1/4 text-center"
              >
                Sign Up
              </button>
              <Link
                type="submit"
                className="px-5 py-3 rounded-md block bg-black text-white w-1/4 text-center"
                to={path.loginPage}
              >
                Login ? <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
