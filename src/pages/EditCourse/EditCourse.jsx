import React, { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import InputCustom from "../../components/Input/InputCustom";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { path } from "../../common/path";
import { useDispatch, useSelector } from "react-redux";
import { NotificationContext } from "../../App";
import { khoaHocService } from "../../service/khoaHoc.service";
import ImgUpload from "../../components/ImgUpload/ImgUpload";
import { getValueUserApi } from "../../redux/userSlice";
import { Rate } from "antd";
import { getLocalStorage } from "../../utils/utils";

const EditCourse = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [danhMuc, setDanhMuc] = useState([]);
  const dataCourse = useSelector((state) => state.courseSlice.editCourse);
  const { listUsers } = useSelector((state) => state.userSlice);
  const listGV = listUsers.filter((item) => item.maLoaiNguoiDung === "GV");
  const { showNotification } = useContext(NotificationContext);

  useEffect(() => {
    dispatch(getValueUserApi());
  }, [dispatch]);

  useEffect(() => {
    khoaHocService
      .layAllDanhMucKhoaHoc()
      .then((res) => {
        setDanhMuc(res.data);
      })
      .catch((err) => {
        // console.log(err)
      });
  }, []);

  useEffect(() => {
    khoaHocService
      .layChiTietKhoaHocTheoMa(dataCourse)
      .then((res) => {
        setValues({
          ...res.data,
          maDanhMucKhoaHoc: res.data.danhMucKhoaHoc.maDanhMucKhoahoc,
          taiKhoanNguoiTao: res.data.nguoiTao.taiKhoan,
        });
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [dataCourse]);

  const {
    values,
    handleChange,
    handleSubmit,
    touched,
    errors,
    resetForm,
    setFieldValue,
    setValues,
  } = useFormik({
    initialValues: {
      maKhoaHoc: "",
      tenKhoaHoc: "",
      moTa: "",
      luotXem: "",
      danhGia: "",
      hinhAnh: "",
      ngayTao: "",
      maNhom: "GP01",
      maDanhMucKhoaHoc: "",
      taiKhoanNguoiTao: "",
      danhMucKhoaHoc: {
        maDanhMucKhoahoc: "",
        tenDanhMucKhoaHoc: "",
      },
      nguoiTao: {
        taiKhoan: "",
      },
    },
    onSubmit: (values) => {
      const { danhMucKhoaHoc, nguoiTao, soLuongHocVien, ...formValues } =
        values;
      // console.log("formEdit", formValues);
      khoaHocService
        .suaKhoaHoc(getLocalStorage("admin").accessToken, formValues)
        .then((res) => {
          showNotification(`Đã sửa khóa học ${res.data.tenKhoaHoc}`, "warning");
          resetForm();
          navigate(path.manageCourse);
        })
        .catch((err) => {
          // console.log(err);
          showNotification(`${err.response.data}`, "error");
        });
    },
  });

  const handleRateChange = (value) => {
    setFieldValue("danhGia", value);
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col justify-center space-y-5">
          <h2 className="text-3xl font-bold text-blue-400 uppercase">
            Sửa khóa học
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <div>
                <InputCustom
                  name="maKhoaHoc"
                  labelContent="Mã khóa học"
                  typeInput="text"
                  placeholder={values.maKhoaHoc}
                  value={values.maKhoaHoc}
                  onChange={handleChange}
                  disabled={true}
                />
              </div>
              <div>
                <InputCustom
                  name="tenKhoaHoc"
                  labelContent="Tên khóa học"
                  typeInput="text"
                  value={values.tenKhoaHoc}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Danh mục khóa học
                </label>
                <select
                  onChange={handleChange}
                  value={values.maDanhMucKhoaHoc}
                  name="maDanhMucKhoaHoc"
                  className="bg-gray-50 border border-gray-300 hover:border-black focus:border-black text-gray-900 text-sm rounded-md outline-none block w-1/2 p-2.5 mb-3"
                >
                  <option value="">--Xin chọn danh mục khóa học--</option>
                  <option value={values.danhMucKhoaHoc.maDanhMucKhoahoc}>
                    {values.danhMucKhoaHoc.tenDanhMucKhoaHoc}
                  </option>
                  {danhMuc
                    ?.filter(
                      (item) =>
                        item?.maDanhMuc !==
                        values.danhMucKhoaHoc.maDanhMucKhoahoc
                    )
                    .map((item, index) => (
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
                  value={values.ngayTao}
                />
              </div>
              <div>
                {/* <InputCustom
                  name="danhGia"
                  labelContent="Đánh giá"
                  typeInput="number"
                  onChange={handleChange}
                  value={values.danhGia}
                /> */}
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Đánh giá
                </label>
                <Rate
                  defaultValue={2}
                  value={values.danhGia}
                  onChange={handleRateChange}
                  className="rounded-md outline-none block w-1/2 py-2.5 mb-3"
                />
              </div>
              <div>
                <InputCustom
                  name="luotXem"
                  labelContent="Lượt xem"
                  typeInput="number"
                  onChange={handleChange}
                  value={values.luotXem}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Người tạo
                </label>
                <select
                  onChange={handleChange}
                  value={values.taiKhoanNguoiTao}
                  name="taiKhoanNguoiTao"
                  className="bg-gray-50 border border-gray-300 hover:border-black focus:border-black text-gray-900 text-sm rounded-md outline-none block w-1/2 p-2.5 mb-3"
                >
                  <option value="">--Xin chọn người tạo khóa học--</option>
                  <option value={values.nguoiTao.taiKhoan}>
                    {values.nguoiTao.hoTen}
                  </option>
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
                <ImgUpload setFieldValue={setFieldValue} />
              </div>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Mô tả
              </label>
              <textarea
                className="border rounded-md min-h-[200px] p-2 w-full"
                onChange={(e) => setFieldValue("moTa", e.target.value)}
                value={values.moTa}
              >
                {/* <Slate editor={editor} initialValue={initialValue}>
                <Editable />
              </Slate> */}
              </textarea>
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
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditCourse;
