import React, { useContext, useEffect, useState } from "react";
import { Tabs } from "antd";
import { useFormik } from "formik";
import InputCustom from "../../components/Input/InputCustom";
import utils, { getLocalStorage, setLocalStorage } from "../../utils/utils";
import { userService } from "../../service/user.service";
import { khoaHocService } from "../../service/khoaHoc.service";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { NotificationContext } from "../../App";
import { Link } from "react-router-dom";
import { truncateText } from "../../utils/utils";

const UserInfoTemplate = () => {
  const onChange = () => {};
  const { showNotification } = useContext(NotificationContext);
  const [userInfo, setUserInfo] = useState(getLocalStorage("user"));
  const [listKhoaHoc, setListKhoaHoc] = useState([]);
  const { taiKhoan, matKhau, hoTen, email, soDT, accessToken } = userInfo;
  const [listKhoaHocMoi, setListKhoaHocMoi] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [arrFilter, setArrFilter] = useState([]);
  let token = getLocalStorage("user").accessToken;

  const searchTenKhoaHoc = (name) => {
    let txt = utils.removeVietnameseTones(name).trim().toLowerCase();
    let arrSearch = listKhoaHoc.filter((item, index) => {
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

  useEffect(() => {
    //Gọi API Lấy All DS KH
    khoaHocService
      .layAllKhoaHoc()
      .then((res) => {
        setListKhoaHocMoi(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });

    // Gọi API lấy thông tin các khóa học mà user đã đăng ký
    khoaHocService
      .layThongTinKhoaHocUser(accessToken)
      .then((res) => {
        setListKhoaHoc(res.data.chiTietKhoaHocGhiDanh);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  const handleCancelCourse = (maKhoaHoc, taiKhoan) => {
    let data = {
      maKhoaHoc,
      taiKhoan,
    };
    khoaHocService
      .huyGhiDanhUser(getLocalStorage("user").accessToken, data)
      .then((res) => {
        showNotification("Hủy ghi Danh thành công", "success");
        khoaHocService
          .layThongTinKhoaHocUser(accessToken)
          .then((res) => {
            setListKhoaHoc(res.data.chiTietKhoaHocGhiDanh);
          })
          .catch((err) => {
            // console.log(err);
          });
      })
      .catch((err) => {
        // console.log(err);
        showNotification("Có lỗi xảy ra vui lòng liên hệ BP.CSKH", "error");
      });
  };

  const { values, handleChange, handleSubmit, touched, errors } = useFormik({
    initialValues: {
      taiKhoan,
      matKhau,
      hoTen,
      email,
      soDT,
      maNhom: "GP01",
      maLoaiNguoiDung: "HV",
    },
    onSubmit: (values) => {
      userService
        .updateUser(token, values)
        .then((res) => {
          showNotification(`Đã sửa tài khoản ${values.taiKhoan}`, "warning");
          setUserInfo(res.data);
          // setLocalStorage("user", { ...values });
        })
        .catch((err) => {
          // console.log(err);
        });
    },
  });

  const tabItems = [
    {
      label: "Thông tin cá nhân",
      key: "1",
      children: (
        <>
          <div className="mx-auto xs:max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-[1140px] space-y-8">
            <form
              className="tiny:block sm:grid sm:grid-cols-2 lg:grid-rows-3 gap-x-5 items-center"
              onSubmit={handleSubmit}
            >
              <div className="tiny:w-full md:w-1/2">
                <InputCustom
                  name="taiKhoan"
                  labelContent="Tài khoản"
                  typeInput="text"
                  placeholder={values.taiKhoan}
                  onChange={handleChange}
                  disabled={true}
                />
              </div>
              <div className="tiny:w-full md:w-1/2">
                <InputCustom
                  name="matKhau"
                  labelContent="Mật khẩu"
                  typeInput="password"
                  onChange={handleChange}
                  value={values.matKhau}
                />
              </div>
              <div className="tiny:w-full md:w-1/2">
                <InputCustom
                  name="hoTen"
                  labelContent="Họ và Tên"
                  typeInput="text"
                  onChange={handleChange}
                  value={values.hoTen}
                />
              </div>
              <div className="tiny:w-full md:w-1/2">
                <InputCustom
                  name="email"
                  labelContent="Email"
                  typeInput="text"
                  onChange={handleChange}
                  value={values.email}
                />
              </div>
              <div className="tiny:w-full md:w-1/2">
                <InputCustom
                  name="soDT"
                  labelContent="Số Điện Thoại"
                  onChange={handleChange}
                  value={values.soDT}
                />
              </div>
              <div className="lg:px-16">
                <br />
                <button
                  type="submit"
                  className="font-bold text-center w-1/2 button-right p-2"
                >
                  Cập nhật
                </button>
              </div>
            </form>
          </div>
        </>
      ),
    },
    {
      label: "Khóa học của tôi",
      key: "2",
      children: (
        <>
          <div className="mx-auto xs:max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-[1140px] space-y-8">
            <div className="tiny:block sm:grid md:grid-cols-2 gap-x-40 gap-y-5">
              <h1 className="text-3xl font-bold mb-5">
                Các lớp học đã tham gia
              </h1>
              <input
                type="text"
                placeholder="Nhập khóa học cần tìm"
                className="border py-2 px-3 rounded-md tiny:w-full"
                onInput={(e) => {
                  if (e.target.value.trim() !== "") {
                    setIsSearching(true);
                    searchTenKhoaHoc(e.target.value);
                  } else {
                    setIsSearching(false);
                  }
                }}
              />
            </div>
            <div className="space-y-5">
              {(isSearching ? arrFilter : listKhoaHoc).map((item, index) => {
                return (
                  <div
                    key={index}
                    className=" tiny:block md:flex flex-row items-center gap-5 bg-purple-200 p-5 rounded-md w-full justify-evenly"
                  >
                    <div className=" tiny:w-full md:w-[150px] mb-3">
                      <img src={item?.hinhAnh} alt="err" className="w-full" />
                    </div>
                    <div className="tiny:w-full md:w-1/2 mb-3">
                      <div className="space-y-5 mb-3">
                        <h2 className="font-bold text-2xl">
                          {item.tenKhoaHoc}
                        </h2>
                        <p>{item.moTa}</p>
                      </div>
                      <div className=" tiny:block md:flex justify-between items-center mb-3 tiny:text-center sm:text-left">
                        <p className="text-purple-700 font-semibold mb-5">
                          ( Lượt xem: {item.luotXem} )
                        </p>
                        <button
                          className="bg-black px-5 py-2 text-white rounded-md mb-3 tiny:w-2/3 sm:w-auto"
                          onClick={() => {
                            handleCancelCourse(item.maKhoaHoc, taiKhoan);
                          }}
                        >
                          Hủy
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <Header />
      <div className="container listKhoaHoc py-10 xs:max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-[1140px] space-y-8">
        <h1 className="font-bold text-3xl mt-16 text-[#211C5B] mx-auto">
          Các khóa học mới nhất
        </h1>
        <div className="tiny:block sm:grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto">
          {listKhoaHocMoi.splice(6, 7).map((item, index) => {
            // console.log(item);
            return (
              <div className="list_item">
                <div className="mb-3 img_content">
                  <img
                    src={item?.hinhAnh}
                    alt="err"
                    className="xs:!w-full xs:!h-full md:!w-[310px] md:!h-[176px]"
                  />
                </div>
                <div className="mb-3">
                  <h2 className="leading-8">{item?.tenKhoaHoc}</h2>
                </div>
                <div className="mb-3">
                  <p className="text-[#7A7A7A] text-base">
                    {truncateText(item?.moTa, 65)}
                  </p>
                </div>
                <div className="flex items-center justify-start mb-8">
                  <div>
                    <i className="fa-solid fa-user-graduate text-2xl" />
                    <p className="inline text-xl font-semibold mx-5">
                      {item?.soLuongHocVien}
                    </p>
                  </div>
                  <span className="text-[#E31C8D] me-4 inline-block">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-regular fa-star" />
                  </span>
                </div>
                <Link to={`/chi-tiet?maKhoaHoc=${item.maKhoaHoc}`}>
                  ĐĂNG KÝ
                </Link>
              </div>
            );
          })}
        </div>
        <div className="w-full tiny:px-2 mx-auto">
          <Tabs onChange={onChange} type="card" items={tabItems} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserInfoTemplate;
