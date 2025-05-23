import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getLocalStorage } from "../../utils/utils";
import { khoaHocService } from "../../service/khoaHoc.service";
import { NotificationContext } from "../../App";
import { useSelector } from "react-redux";

const ChiTietKhoaHoc = () => {
  const { showNotification } = useContext(NotificationContext);
  const [searchParam, setSearchParam] = useSearchParams();
  const [chiTietKhoaHoc, setChiTietKhoaHoc] = useState([]);
  const [duLieuDangKy, setDuLieuDangKy] = useState({ "maKhoaHoc": "", "taiKhoan": "", });
  const { arrImgReplace } = useSelector((state) => state.imageSlice);
  const navigate = useNavigate();
  const handleSignUpCourse = () => {
    let maKhoaHoc = searchParam.get("maKhoaHoc");
    let taiKhoan = getLocalStorage("user").taiKhoan;
    let token = getLocalStorage("user").accessToken;
    setDuLieuDangKy({
      maKhoaHoc,
      taiKhoan,
    });
    khoaHocService
      .dangKyKhoaHocUser(token, duLieuDangKy)
      .then((res) => {
        showNotification(
          "Đăng ký thành công, vui lòng kiểm tra thông tin khóa đã đăng ký",
          "success"
        );
        navigate("/user-info");
      })
      .catch((err) => {
        showNotification(err.response.data, "error");
      });
  };

  useEffect(() => {
    let maKhoaHoc = searchParam.get("maKhoaHoc");
    khoaHocService
      .layChiTietKhoaHocTheoMa(maKhoaHoc)
      .then((res) => {
        setChiTietKhoaHoc(res.data);
      })
      .catch((err) => { });
  }, [searchParam.get("maKhoaHoc")]);

  return (
    <>
      <div className="banner_course pt-24">
        <div className="container text-[#211C5B] py-14 relative xs:max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
          <div className="xs:block md:flex items-center py-10 w-10/12 mx-auto">
            <div
              className="xs:w-full md:w-8/12 text-white mb-10"
              data-aos="fade-left"
            >
              <h1 className="text-4xl uppercase mb-5">
                {chiTietKhoaHoc?.tenKhoaHoc}
              </h1>
              <p className="mb-5">
                Đánh giá khóa học
                <span className="text-[#F28820] ms-4">
                  {
                    Array.from({ length: 5 }).map(() => (
                      <i className={`${Math.floor(Math.random() * 2) == 1 ? "fa-solid" : "fa-regular"} fa-star`} />
                    ))
                  }
                </span>
              </p>
              <button
                onClick={() => {
                  getLocalStorage("user")
                    ? handleSignUpCourse()
                    : navigate("/login");
                }}
              >
                ĐĂNG KÝ
              </button>
            </div>
            <div className="xs:w-full md:w-4/12 mb-5">
              <div className="img_content" data-aos="fade-right">
                <img
                  src={`./icons/${arrImgReplace[Math.floor(Math.random() * arrImgReplace.length + 1)]}`}
                  alt="err"
                  className="w-full"
                />
              </div>
            </div>
          </div>
          <div className="detail_course">
            <div
              className="container py-10 rounded-md bg-white xs:max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg"
              data-aos="fade-up-left"
            >
              <h1 className="text-3xl font-semibold mb-5">
                Giới thiệu khóa học
              </h1>
              <p>{chiTietKhoaHoc?.moTa}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChiTietKhoaHoc;
