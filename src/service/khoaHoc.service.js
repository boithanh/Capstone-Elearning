import { http } from "./config";

export const khoaHocService = {
  layKhoaHocTheoTen: (data) => {
    return http.get(
      `/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01&tenKhoaHoc=${data}`
    );
  },
  layAllKhoaHoc: () => {
    return http.get("QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01");
  },
  layAllDanhMucKhoaHoc: () => {
    return http.get(`/QuanLyKhoaHoc/LayDanhMucKhoaHoc`);
  },
  layKhoaHocTheoDanhMuc: (data) => {
    return http.get(
      `QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${data}&MaNhom=GP01`
    );
  },
  layChiTietKhoaHocTheoMa: (data) => {
    return http.get(`QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${data}`);
  },
  // TESTING FOR KHOA HOC USER
  layDanhSachKhoaHocReact: () => {
    return http.get(
      `QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=react&MaNhom=GP01`
    );
  },
  xoaKhoaHoc: (data) => {
    return http.delete(`QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${data}`);
  },
  themKhoaHoc: (data) => {
    return http.post(`QuanLyKhoaHoc/ThemKhoaHoc`, data);
  },
  suaKhoaHoc: (data) => {
    return http.put("QuanLyKhoaHoc/CapNhatKhoaHoc", data);
  },
  dangKyKhoaHocUser: (token, data) => {
    return http.post(`QuanLyKhoaHoc/DangKyKhoaHoc`, data, {
      headers: {
        token,
      }
    }
    );
  }
};
