import { http } from "./config";

export const userService = {
  updateUser: (token, data) => {
    return http.put("QuanLyNguoiDung/CapNhatThongTinNguoiDung", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
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
  layDanhSachKhoaHocDaXetDuyet: (token, data) => {
    return http.post(`QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
  },
  layDanhSachKhoaHocChoXetDuyet: (token, data) => {
    return http.post("QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
  },
  layDanhSachHocVienChoXetDuyet: (token, data) => {
    return http.post("QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
  },
  layDanhSachHocVienKhoaHoc: (token, data) => {
    return http.post("QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
  },
  duyetGhiDanhCourseForUser: (token, data) => {
    return http.post("QuanLyKhoaHoc/GhiDanhKhoaHoc", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
  }
};
