import { http } from "./config";

export const userService = {
  updateUser: (data) => {
    return http.put("QuanLyNguoiDung/CapNhatThongTinNguoiDung", data);
  },
  listKhoaHocUser: (data) => {
    return http.post("QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet", data);
  },
  LayDanhSachNguoiDung: () => {
    // return http.get(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${data}`);
    return http.get(`QuanLyNguoiDung/LayDanhSachNguoiDung`);
  },
};
