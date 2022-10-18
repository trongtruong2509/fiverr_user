import React from "react";
import { useEffect } from "react";
import { IoCamera, IoLocation, IoPerson } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import DefaultAvatar from "../../assets/default_avatar.svg";
import Footer from "../../common/components/Footer/Footer";
import Header from "../../common/components/Header/Header";
import {
   getUser,
   updateUser,
   updateUserInfo,
   uploadNewAvatar,
} from "../../common/slices/userSlice";
import { getBookingJobs } from "../../common/slices/bookingSlice";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";
import BookingJob from "./BookingJob";
import { DatePicker } from "antd";
import moment from "moment";

const Profile = () => {
   const params = useParams();
   const dispatch = useDispatch();

   const user = useSelector((state) => state.user.auth?.user);
   const currentUser = useSelector((state) => state.user.current);
   const bookingJobs = useSelector((state) => state.booking.jobs);

   const [editable, setEditable] = useState(false);

   const [generalEdit, setGeneralEdit] = useState(false);
   const [nameEdit, setNameEdit] = useState(false);
   const [skillEdit, setSkillEdit] = useState(false);
   const [certiEdit, setCertiEdit] = useState(false);

   const [name, setName] = useState(currentUser?.name);
   const [birthday, setBirthday] = useState(moment(currentUser?.birthday));
   const [phone, setPhone] = useState(currentUser?.phone);

   useEffect(() => {
      if (params?.id) {
         dispatch(getUser(params.id));
         dispatch(getBookingJobs());
      }
   }, [params]);

   useEffect(() => {
      if (currentUser && user && currentUser?.id === user?.id) {
         setEditable(true);
         dispatch(
            updateUser({
               token: localStorage.getItem("accessToken"),
               user: currentUser,
            })
         );
      } else {
         setEditable(false);
      }

      setPhone(currentUser?.phone);

      if (currentUser?.birthday) {
         setBirthday(moment(currentUser?.birthday, "YYYY/MM/DD"));
      } else {
         setBirthday(moment());
      }
   }, [currentUser, user]);

   const onAvatarUpload = (image) => {
      console.log("[onAvatarUpload]", image);
      dispatch(uploadNewAvatar({ formFile: image }));
   };

   const updateGeneralHandle = () => {
      dispatch(
         updateUserInfo({
            ...user,
            phone,
            name,
            birthday: birthday.format("YYYY/MM/DD"),
            skill: [],
            certification: [],
         })
      );
   };

   return (
      <div>
         <Header />
         <div className="container px-20 py-14">
            <div className="grid grid-cols-11 gap-12">
               <div className="col-span-4">
                  <div className="w-full mb-6 border border-[rgb(218, 219, 221)] rounded-sm p-[32px]">
                     <div className="flex flex-col items-center justify-center">
                        <div className="relative mb-3 rounded-full w-36 h-36">
                           <img
                              src={
                                 currentUser?.avatar == ""
                                    ? DefaultAvatar
                                    : currentUser?.avatar
                              }
                              alt={currentUser?.name}
                              className="object-cover rounded-full w-36 h-36"
                           />
                           {editable && (
                              <label className="absolute top-0 left-0 flex opacity-0 hover:opacity-100 items-center justify-center w-full h-full rounded-full cursor-pointer hover:bg-[rgba(0,0,0,0.8)]">
                                 <input
                                    type="file"
                                    accept="image/*"
                                    className="w-0 h-0"
                                    onChange={(e) =>
                                       onAvatarUpload(e.target.files[0])
                                    }
                                 ></input>
                                 <IoCamera className="text-6xl text-white opacity-70" />
                              </label>
                           )}
                        </div>

                        <div>
                           {nameEdit ? (
                              <input
                                 type="text"
                                 className="w-full text-sm text-center border-b outline-none"
                                 defaultValue={currentUser?.name}
                                 placeholder="Add your name"
                                 value={name}
                                 onChange={(e) => setName(e.target.value)}
                              />
                           ) : (
                              <p className="text-xl font-semibold text-secondary hover:text-primary">
                                 {currentUser?.name}
                              </p>
                           )}
                        </div>
                        {nameEdit ? (
                           <div className="flex items-center justify-end gap-5 mt-5">
                              <button
                                 className="px-3 py-1 border rounded-md"
                                 onClick={() => setNameEdit(false)}
                              >
                                 Cancel
                              </button>
                              <button
                                 className="px-3 py-1 text-white border rounded-md bg-primary border-primary hover:bg-primary-dark"
                                 onClick={() => {
                                    setNameEdit(false);
                                    updateGeneralHandle();
                                 }}
                              >
                                 Update
                              </button>
                           </div>
                        ) : (
                           editable && (
                              <button
                                 className="px-3 py-2 text-lg cursor-pointer hover:text-primary"
                                 onClick={() => setNameEdit(true)}
                              >
                                 <FiEdit className="" />
                              </button>
                           )
                        )}
                     </div>
                     <div className="border-t border-[rgb(218, 219, 221)] mt-4 pt-4">
                        <div className="flex items-center justify-between w-full mb-2">
                           <p className="flex items-center gap-3">
                              <IoLocation />
                              From
                           </p>
                           <p className="font-semibold text-secondary">
                              Vietnam
                           </p>
                        </div>
                        <div className="flex items-center justify-between w-full">
                           <p className="flex items-center gap-3">
                              <IoPerson />
                              Member since
                           </p>
                           <p className="font-semibold text-secondary">
                              Oct 2022
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="w-full border border-[rgb(218, 219, 221)] rounded-sm p-[32px]">
                     <div className="pb-4 border-b border-[rgb(218, 219, 221)]">
                        <div className="flex items-center justify-between mb-3">
                           <p className="font-semibold text-secondary">
                              General
                           </p>
                           {editable && (
                              <button
                                 className="flex items-center gap-[6px] text-sm text-blue-600 hover:text-primary"
                                 onClick={() => setGeneralEdit(!generalEdit)}
                              >
                                 Edit
                                 <FiEdit className="mb-1" />
                              </button>
                           )}
                        </div>

                        <div className="flex flex-col gap-1">
                           <div className="flex items-center justify-between">
                              <p>Email</p>
                              <>
                                 {currentUser?.email !== "" ? (
                                    <p className="font-semibold text-secondary">
                                       {currentUser?.email}
                                    </p>
                                 ) : (
                                    <p className="text-sm opacity-70">
                                       {editable ? "Add your email" : "Not set"}
                                    </p>
                                 )}
                              </>
                           </div>
                           <div className="flex items-center justify-between">
                              <p>Birthday</p>
                              {generalEdit ? (
                                 <div>
                                    <DatePicker
                                       defaultValue={birthday}
                                       format={"YYYY/MM/DD"}
                                       onChange={(dateString) =>
                                          setBirthday(dateString)
                                       }
                                    />
                                 </div>
                              ) : (
                                 <div>
                                    {currentUser?.birthday !== "" ? (
                                       <p className="font-semibold text-secondary">
                                          {currentUser?.birthday}
                                       </p>
                                    ) : (
                                       <p className="text-sm opacity-70">
                                          {editable
                                             ? "Add your birthday"
                                             : "Not set"}
                                       </p>
                                    )}
                                 </div>
                              )}
                           </div>
                           <div className="flex items-center justify-between">
                              <p>Phone</p>
                              {generalEdit ? (
                                 <div>
                                    <input
                                       type="text"
                                       className="w-full text-sm text-right border-b outline-none"
                                       defaultValue={currentUser?.phone}
                                       placeholder="Add your phone"
                                       value={phone}
                                       onChange={(e) =>
                                          setPhone(e.target.value)
                                       }
                                    />
                                 </div>
                              ) : (
                                 <>
                                    {currentUser?.phone !== "" ? (
                                       <p className="font-semibold text-secondary">
                                          {currentUser?.phone}
                                       </p>
                                    ) : (
                                       <p className="text-sm opacity-70">
                                          {editable
                                             ? "Add your phone"
                                             : "Not set"}
                                       </p>
                                    )}
                                 </>
                              )}
                           </div>
                        </div>
                        {generalEdit && (
                           <div className="flex items-center justify-end gap-5 mt-5">
                              <button
                                 className="px-3 py-1 border rounded-md"
                                 onClick={() => setGeneralEdit(false)}
                              >
                                 Cancel
                              </button>
                              <button
                                 className="px-3 py-1 text-white border rounded-md bg-primary border-primary hover:bg-primary-dark"
                                 onClick={() => {
                                    setGeneralEdit(false);
                                    updateGeneralHandle();
                                 }}
                              >
                                 Update
                              </button>
                           </div>
                        )}
                     </div>
                     <div className="pb-4 pt-6  border-b border-[rgb(218, 219, 221)]">
                        <p className="mb-3 font-semibold text-secondary">
                           Skills
                        </p>
                        <div className="flex flex-col gap-1">
                           {currentUser?.skill.length ? (
                              <></>
                           ) : (
                              <p className="text-sm opacity-50">
                                 {editable ? "Add your skills" : "Not set"}
                              </p>
                           )}
                        </div>
                     </div>
                     <div className="pb-4 pt-6  border-b border-[rgb(218, 219, 221)]">
                        <p className="mb-3 font-semibold text-secondary">
                           Certifications
                        </p>
                        <div className="flex flex-col gap-1">
                           {currentUser?.skill.length ? (
                              <></>
                           ) : (
                              <p className="text-sm opacity-50">
                                 {editable
                                    ? "Add your certifications"
                                    : "Not set"}
                              </p>
                           )}
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-span-7 ">
                  <div className="p-5 border border-[rgb(218, 219, 221)] flex flex-col gap-6">
                     {bookingJobs?.length ? (
                        bookingJobs?.map((job, index) => (
                           <BookingJob job={job} key={index} />
                        ))
                     ) : (
                        <div className="flex items-center justify-center w-full h-20">
                           No job booking
                        </div>
                     )}
                  </div>
               </div>
            </div>
         </div>
         <Footer />
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

export default Profile;
