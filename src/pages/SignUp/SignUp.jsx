import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { signUp, updateAllow } from "../../common/slices/userSlice";

import { ToastContainer } from "react-toastify";
import { paths } from "../../app/routes";
import { Link, useNavigate } from "react-router-dom";
// import uuid from "react-uuid";

import { signupSchema } from "./signupSchema";
import "react-toastify/dist/ReactToastify.css";
// import SignupThumbnail from "../../assets/Signup_Thumbnail.svg";

const SignUp = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const currentUser = useSelector((state) => state.user);

   const formik = useFormik({
      initialValues: {
         id: "123",
         name: "",
         email: "",
         password: "",
         phone: "",
         birthday: "",
         gender: true,
         role: "",
         skill: [],
         certification: [],
      },
      validationSchema: signupSchema,
      onSubmit: (values, actions) => {
         console.log(actions);
         console.log("[submit]", values);
         dispatch(signUp(values));
      },
   });

   useEffect(() => {
      if (currentUser?.allow) {
         setTimeout(() => {
            navigate(paths.login, {
               state: {
                  email: formik.values.email,
                  password: formik.values.password,
               },
            });
            dispatch(updateAllow(false));
         }, 2000);
      }
   }, [currentUser]);

   return (
      <div>
         <div className="flex justify-center min-h-screen text-gray-900 bg-gray-100">
            <div className="flex justify-center flex-1 max-w-screen-xl m-0 bg-white shadow sm:m-20 sm:rounded-lg">
               <div className="flex-1 hidden text-center bg-sky-100 lg:flex">
                  <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat bg-[url('./assets/Signup_Thumbnail.svg')]"></div>
               </div>
               <div className="p-6 py-40 lg:w-1/2 xl:w-5/12 sm:px-12">
                  <div className="flex items-center justify-center">
                     {/* <img
                        src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
                       
                        alt="Cover"
                     /> */}
                     <svg
                        width="115"
                        height="35"
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
                  </div>
                  <div className="flex flex-col items-center mt-12">
                     <form
                        className="flex-1 w-full mt-8"
                        onSubmit={formik.handleSubmit}
                        autoComplete="off"
                     >
                        <div className="flex flex-col max-w-sm gap-5 mx-auto">
                           <div className="flex items-center w-full">
                              <label className="flex-shrink-0 w-24">Name</label>
                              <div className="relative w-full">
                                 <input
                                    type="text"
                                    name="name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={`w-full px-4 py-2 border rounded-lg outline-none focus-within:border-primary ${
                                       formik.errors.name && formik.touched.name
                                          ? "border-red-500 focus-within:border-red-500"
                                          : "border-gray-400 focus-within:border-primary"
                                    }`}
                                    placeholder="Enter your name"
                                 />
                                 {formik.errors.name && formik.touched.name && (
                                    <p className="absolute left-0 text-xs text-red-600 -bottom-4">
                                       {formik.errors.name}
                                    </p>
                                 )}
                              </div>
                           </div>
                           <div className="flex items-center gap-3 ">
                              <label className="w-28">Email</label>
                              <div className="relative w-full">
                                 <input
                                    type="text"
                                    name="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={`w-full px-4 py-2 border rounded-lg outline-none focus-within:border-primary ${
                                       formik.errors.email &&
                                       formik.touched.email
                                          ? "border-red-500 focus-within:border-red-500"
                                          : "border-gray-400 focus-within:border-primary"
                                    }`}
                                    placeholder="Enter your email"
                                 />
                                 {formik.errors.email &&
                                    formik.touched.email && (
                                       <p className="absolute left-0 text-xs text-red-600 -bottom-4">
                                          {formik.errors.email}
                                       </p>
                                    )}
                              </div>
                           </div>
                           <div className="flex items-center gap-3 ">
                              <label className="w-28">Password</label>
                              <div className="relative w-full">
                                 <input
                                    type="password"
                                    name="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={`w-full px-4 py-2 border rounded-lg outline-none focus-within:border-primary ${
                                       formik.errors.password &&
                                       formik.touched.password
                                          ? "border-red-500 focus-within:border-red-500"
                                          : "border-gray-400 focus-within:border-primary"
                                    }`}
                                    placeholder="Enter your password"
                                 />
                                 {formik.errors.password &&
                                    formik.touched.password && (
                                       <p className="absolute left-0 text-xs text-red-600 -bottom-4">
                                          {formik.errors.password}
                                       </p>
                                    )}
                              </div>
                           </div>
                           {/* <div className="flex items-center gap-3 ">
                              <label className="w-28">Email</label>
                              <div className="relative w-full">
                                 <input
                                    type="text"
                                    name="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={`w-full px-4 py-2 border rounded-lg outline-none focus-within:border-primary ${
                                       formik.errors.email &&
                                       formik.touched.email
                                          ? "border-red-500 focus-within:border-red-500"
                                          : "border-gray-400 focus-within:border-primary"
                                    }`}
                                    placeholder="Enter your email"
                                 />
                                 {formik.errors.email &&
                                    formik.touched.email && (
                                       <p className="absolute left-0 text-xs text-red-600 -bottom-4">
                                          {formik.errors.email}
                                       </p>
                                    )}
                              </div>
                           </div> */}
                           {/* <div className="flex items-center gap-3 ">
                              <label className="w-28">Phone</label>
                              <div className="relative w-full">
                                 <input
                                    type="text"
                                    name="phone"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={`w-full px-4 py-2 border rounded-lg outline-none focus-within:border-primary ${
                                       formik.errors.phone &&
                                       formik.touched.phone
                                          ? "border-red-500 focus-within:border-red-500"
                                          : "border-gray-400 focus-within:border-primary"
                                    }`}
                                    placeholder="Enter your phone"
                                 />
                                 {formik.errors.phone &&
                                    formik.touched.phone && (
                                       <p className="absolute left-0 text-xs text-red-600 -bottom-4">
                                          {formik.errors.phone}
                                       </p>
                                    )}
                              </div>
                           </div> */}

                           <button
                              className={`flex items-center justify-center w-full py-4 mt-5 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out rounded-lg 
                              bg-primary hover:bg-primary-dark focus:shadow-outline focus:outline-none ${
                                 formik.isValid && formik.dirty
                                    ? "opacity-100"
                                    : "opacity-50"
                              }`}
                              type="submit"
                              disabled={!(formik.isValid && formik.dirty)}
                           >
                              <svg
                                 className="w-6 h-6 -ml-2"
                                 fill="none"
                                 stroke="currentColor"
                                 strokeWidth="2"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                              >
                                 <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                 <circle cx="8.5" cy="7" r="4" />
                                 <path d="M20 8v6M23 11h-6" />
                              </svg>
                              <span className="ml-3">Sign Up</span>
                           </button>
                           <p className="pt-1 mt-2 mb-0 text-sm font-semibold">
                              Already have an account?
                              <Link
                                 to={paths.login}
                                 className="pl-1 text-red-600 transition duration-200 ease-in-out hover:text-red-700 focus:text-red-700"
                              >
                                 Login
                              </Link>
                           </p>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            // draggable
         />
      </div>
   );
};

export default SignUp;
