import { http } from "./config";

export const userService = {
  updateUser: (data) => {
    return http.put("QuanLyNguoiDung/CapNhatThongTinNguoiDung", data);
  },
  listKhoaHocUser: (data) => {
    return http.post("QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet", data);
  },
  layDanhSachNguoiDung: () => {
    // return http.get(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${data}`);
    return http.get(`QuanLyNguoiDung/LayDanhSachNguoiDung`);
  },
  xoaNguoiDung: (data) => {
    return http.delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${data}`);
  },
  themNguoiDung: (data) => {
    return http.post("QuanLyNguoiDung/ThemNguoiDung", data);
  },
  timKiemNguoiDung: (data) => {
    return http.get(
      `QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${data}`
    );
  },
  layDanhSachKhoaHocDaXetDuyet: (data) => {
    return http.post(`QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet`, data);
  },
  layDanhSachKhoaHocChoXetDuyet: (data) => {
    return http.post("QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet", data);
  },
  layDanhSachHocVienChoXetDuyet: (data) => {
    return http.post("QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet", data);
  },
  layDanhSachHocVienKhoaHoc: (data) => {
    return http.post("QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc", data);
  },
};
