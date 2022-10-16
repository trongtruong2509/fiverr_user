import React from "react";
import { useEffect } from "react";
import { IoCamera, IoLocation, IoPerson } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import DefaultAvatar from "../../assets/default_avatar.svg";
import Footer from "../../common/components/Footer/Footer";
import Header from "../../common/components/Header/Header";
import { getUser } from "../../common/slices/userSlice";
import { getBookingJobs } from "../../common/slices/bookingSlice";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";
import BookingJob from "./BookingJob";

const Profile = () => {
   const params = useParams();
   const dispatch = useDispatch();

   const user = useSelector((state) => state.user.auth?.user);
   const currentUser = useSelector((state) => state.user.current);
   const bookingJobs = useSelector((state) => state.booking.jobs);

   const [editable, setEditable] = useState(false);

   useEffect(() => {
      if (params?.id) {
         dispatch(getUser(params.id));
         dispatch(getBookingJobs());
      }
   }, [params]);

   useEffect(() => {
      if (currentUser && user && currentUser?.id === user?.id) {
         setEditable(true);
      } else {
         setEditable(false);
      }
   }, [currentUser, user]);

   const onAvatarUpload = () => {
      console.log("[onAvatarUpload]");
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
                              <div
                                 className="absolute top-0 left-0 flex opacity-0 hover:opacity-100 items-center justify-center w-full h-full rounded-full cursor-pointer hover:bg-[rgba(0,0,0,0.8)]"
                                 onClick={onAvatarUpload}
                              >
                                 <IoCamera className="text-6xl text-white opacity-70" />
                              </div>
                           )}
                        </div>

                        <p className="text-xl font-semibold text-secondary hover:text-primary">
                           {currentUser?.name}
                        </p>
                        {editable && (
                           <button className="px-3 py-2 text-lg cursor-pointer hover:text-primary">
                              <FiEdit className="" />
                           </button>
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
                        <p className="mb-3 font-semibold text-secondary">
                           General
                        </p>
                        <div className="flex flex-col gap-1">
                           <div className="flex items-center justify-between">
                              <p>Birthday</p>
                              {currentUser?.birthday !== "" ? (
                                 <p className="font-semibold text-secondary">
                                    {currentUser?.birthday}
                                 </p>
                              ) : (
                                 <p className="text-sm opacity-70">
                                    {editable ? "Add your birthday" : "Not set"}
                                 </p>
                              )}
                           </div>
                           <div className="flex items-center justify-between">
                              <p>Email</p>
                              {currentUser?.email !== "" ? (
                                 <p className="font-semibold text-secondary">
                                    {currentUser?.email}
                                 </p>
                              ) : (
                                 <p className="text-sm opacity-70">
                                    {editable ? "Add your email" : "Not set"}
                                 </p>
                              )}
                           </div>
                           <div className="flex items-center justify-between">
                              <p>Phone</p>
                              {currentUser?.phone !== "" ? (
                                 <p className="font-semibold text-secondary">
                                    {currentUser?.phone}
                                 </p>
                              ) : (
                                 <p className="text-sm opacity-70">
                                    {editable ? "Add your phone" : "Not set"}
                                 </p>
                              )}
                           </div>
                        </div>
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
                     {bookingJobs?.map((job, index) => (
                        <BookingJob job={job} key={index} />
                     ))}
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </div>
   );
};

export default Profile;
