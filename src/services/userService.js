import * as httpRequest from "../common/utils/httpRequest";

export const login = async (info) => {
   const res = await httpRequest.post("/auth/signin", info);

   console.log("[loginService]", res);
   return res;
};

export const signup = async (info) => {
   const res = await httpRequest.post("/auth/signup", info);

   console.log("[signupService] signup", res);
   return res;
};

// export const getAllUsers = async () => {
//    const res = await httpRequest.get("/QuanLyNguoiDung/LayDanhSachNguoiDung");

//    console.log("[getAllUsers]", res);
//    return res;
// };

// export const queryUsers = async (query) => {
//    const res = await httpRequest.get("/QuanLyNguoiDung/TimKiemNguoiDung", {
//       tuKhoa: query,
//    });

//    console.log("[queryUsers]", res);
//    return res;
// };

export const updateUser = async (info) => {
   const res = await httpRequest.post(
      "/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      info
   );

   console.log("[User Service] updateUser", res);
   return res;
};

// export const deleteUser = async (account) => {
//    const res = await httpRequest.Delete("/QuanLyNguoiDung/XoaNguoiDung", {
//       TaiKhoan: account,
//    });

//    console.log("[deleteUser]", res);
//    return res;
// };
