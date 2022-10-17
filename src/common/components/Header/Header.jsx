import React, { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "antd";
import Tippy from "@tippyjs/react/headless";

import { paths } from "../../../app/routes";
import Search from "../Search/Search";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategories } from "../../slices/categorySlice";
import DefaultAvatar from "../../../assets/default_avatar.svg";
import { logoutUpdate } from "../../slices/userSlice";

const LogoLight = (
   <svg
      width="89"
      height="27"
      viewBox="0 0 89 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
   >
      <g fill="#ffffff">
         <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
      </g>
      <g fill="#1dbf73">
         <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
      </g>
   </svg>
);

const Logo = (
   <svg
      width="89"
      height="27"
      viewBox="0 0 89 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
   >
      <g fill="#404145">
         <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
      </g>
      <g fill="#1dbf73">
         <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
      </g>
   </svg>
);

const Header = ({ sticky }) => {
   const Threshold = 99;

   const dispatch = useDispatch();
   const navigate = useNavigate();

   const categorySlice = useSelector((state) => state.category);
   const user = useSelector((state) => state.user.auth);

   const [items, setItems] = useState([]);
   const [y, setY] = useState(window.scrollY);
   const [active, setActive] = useState(sticky ? y < Threshold : false);
   const [activeMenu, setActiveMenu] = useState(
      sticky ? y < Threshold * 2 : false
   );

   const handleNavigation = useCallback(
      (e) => {
         const window = e.currentTarget;

         if (sticky) {
            if (y < Threshold) {
               setActive(true);
            } else {
               setActive(false);
            }

            if (y < Threshold * 2) {
               setActiveMenu(true);
            } else {
               setActiveMenu(false);
            }
         }

         setY(window.scrollY);
      },
      [y]
   );

   useEffect(() => {
      dispatch(getCategories());
   }, []);

   useEffect(() => {
      setY(window.scrollY);
      window.addEventListener("scroll", (e) => handleNavigation(e));

      return () => {
         // return a cleanup function to unregister our function since its gonna run multiple times
         window.removeEventListener("scroll", (e) => handleNavigation(e));
      };
   }, [handleNavigation]);

   useEffect(() => {
      if (categorySlice?.categories) {
         setItems(
            categorySlice?.categories.map((cate) => ({
               key: cate.id,
               label: cate.tenLoaiCongViec,
               children: cate.dsNhomChiTietLoai.map((group) => ({
                  key: group.hinhAnh,
                  type: "group",
                  label: group.tenNhom,
                  children: group.dsChiTietLoai.map((item) => ({
                     label: item.tenChiTiet,
                     key: item.tenChiTiet,
                     icon: <Link to={paths.jobs.replace(":id", item.id)} />,
                  })),
               })),
            }))
         );
      }
   }, [categorySlice?.categories]);

   return (
      <div
         className={`${
            active ? "bg-transparent" : "bg-white"
         } transition-all duration-250 ease-in`}
      >
         <div className={`container py-5 bg-transparent`}>
            <div className="flex items-center justify-between gap-6 bg-transparent">
               <div className="flex items-center gap-8 bg-transparent h-[42px] w-full">
                  <Link to={paths.home}>{active ? LogoLight : Logo}</Link>
                  <div className="hidden w-full sm:block">
                     {!active && <Search header />}
                  </div>
               </div>

               {user ? (
                  <User user={user?.user} active={active} />
               ) : (
                  <div
                     className={`flex gap-6 text-base font-semibold bg-transparent shrink-0 ${
                        active && "text-white"
                     }`}
                  >
                     <button className="hidden transition-all duration-200 ease-out hover:text-primary xl:block">
                        Become a Seller
                     </button>
                     <button
                        className="transition-all duration-200 ease-out hover:text-primary"
                        onClick={() => navigate(paths.login)}
                     >
                        Sign In
                     </button>
                     <button
                        className={`px-5 py-1 text-sm transition-all duration-200 ease-out border rounded-md 
                         hover:text-white hover:bg-primary ${
                            active
                               ? "border-white text-white hover:border-primary"
                               : "border-primary text-primary"
                         }`}
                        onClick={() => navigate(paths.signup)}
                     >
                        Join
                     </button>
                  </div>
               )}
            </div>
         </div>
         {/* {!activeMenu && (
            <div className="border-y border-[#e4e5e7] bg-white">
               <div className="container">
                  <Menu
                     className="flex w-screen items-center justify-between border-none before:hidden after:hidden hover:text-[#62646a]"
                     mode="horizontal"
                     items={items}
                  />
               </div>
            </div>
         )} */}
      </div>
   );
};

const User = ({ user, active }) => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   return (
      <div>
         <Tippy
            interactive
            // hideOnClick="toggle"
            placement="bottom"
            appendTo={() => document.body}
            delay={[0, 700]}
            trigger="click"
            // reference={ref}
            render={(attrs) => (
               <div>
                  <div className="w-32 bg-white border rounded-[4px] px-4">
                     <button
                        className="w-full py-2 text-left border-b hover:text-primary"
                        onClick={() =>
                           navigate(paths.profile.replace(":id", user?.id))
                        }
                     >
                        Profile
                     </button>
                     <button
                        className="w-full py-2 text-left hover:text-primary"
                        onClick={() => dispatch(logoutUpdate())}
                     >
                        Log out
                     </button>
                  </div>
               </div>
            )}
         >
            <div className="flex items-center justify-center gap-6 font-semibold hover:cursor-pointer">
               <p
                  className={` hover:text-primary ${
                     active ? "text-white" : "text-secondary"
                  }`}
                  onClick={() =>
                     navigate(paths.profile.replace(":id", user?.id))
                  }
               >
                  {user?.name}
               </p>
               <img
                  src={user?.avatar == "" ? DefaultAvatar : user?.avatar}
                  alt={user?.name}
                  className="object-cover w-10 h-10 rounded-full"
               />
            </div>
         </Tippy>
      </div>
   );
};

export default Header;
