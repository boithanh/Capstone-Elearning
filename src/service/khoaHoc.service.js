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
  xoaKhoaHoc: (data, token) => {
    return http.delete(`QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${data}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  themKhoaHoc: (data, token) => {
    return http.post(`QuanLyKhoaHoc/ThemKhoaHoc`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  suaKhoaHoc: (token, data) => {
    return http.put("QuanLyKhoaHoc/CapNhatKhoaHoc", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  dangKyKhoaHocUser: (token, data) => {
    return http.post(`QuanLyKhoaHoc/DangKyKhoaHoc`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  layThongTinKhoaHocUser: (token) => {
    return http.post(
      `QuanLyNguoiDung/ThongTinNguoiDung`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },
  huyGhiDanhUser: (token, data) => {
    return http.post("QuanLyKhoaHoc/HuyGhiDanh", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
