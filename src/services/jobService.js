import * as httpRequest from "../common/utils/httpRequest";

export const getJobs = async (name) => {
   const res = await httpRequest.get(
      `/cong-viec/lay-danh-sach-cong-viec-theo-ten/${name}`
   );

   console.log("[getJobs]", res);
   return res;
};

// export const queryUsers = async (query) => {
//    const res = await httpRequest.get("/QuanLyNguoiDung/TimKiemNguoiDung", {
//       tuKhoa: query,
//    });

//    console.log("[queryUsers]", res);
//    return res;
// };

// export const updateUser = async (info) => {
//    const res = await httpRequest.post(
//       "/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
//       info
//    );

//    console.log("[User Service] updateUser", res);
//    return res;
// };

// export const deleteUser = async (account) => {
//    const res = await httpRequest.Delete("/QuanLyNguoiDung/XoaNguoiDung", {
//       TaiKhoan: account,
//    });

//    console.log("[deleteUser]", res);
//    return res;
// };
