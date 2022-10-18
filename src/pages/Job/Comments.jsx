import moment from "moment/moment";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import Star from "../../common/components/Star";
import { getComments, postNewComment } from "../../common/slices/commentSlice";

const Comments = ({ id }) => {
   const dispatch = useDispatch();

   const comments = useSelector((state) => state.comment.comments);
   const currentUser = useSelector((state) => state.user.current);

   const [adding, setAdding] = useState(true);
   const [comment, setComment] = useState("");
   const [rating, setRating] = useState(0);

   useEffect(() => {
      if (id) {
         dispatch(getComments(id));
      }
   }, [id]);

   const onCancel = () => {
      setAdding(false);
      setRating(0);
      setComment("");
   };

   const onSubmit = () => {
      setAdding(false);

      const newComment = {
         // id: 0,
         maCongViec: id,
         maNguoiBinhLuan: currentUser?.id,
         ngayBinhLuan: moment(Date.now(), "YYYY/MM/DD"),
         noiDung: comment,
         saoBinhLuan: rating,
      };

      dispatch(postNewComment(newComment));

      setRating(0);
      setComment("");
   };

   return (
      <div className="mt-12 border-t">
         <div className="">
            {comments?.map((c, index) => (
               <Comment comment={c} key={index} />
            ))}
         </div>
         <div className="w-full mt-5 text-right">
            {!adding && (
               <button
                  className="px-3 py-[6px] border border-primary rounded-md text-white bg-primary hover:bg-primary-dark"
                  onClick={() => setAdding(true)}
               >
                  Add Comment
               </button>
            )}
            {adding && (
               <div>
                  <div>
                     <textarea
                        cols="30"
                        rows="3"
                        className="w-full p-3 border rounded-[4px] outline-none"
                        placeholder="Add your comment here"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                     ></textarea>

                     <div className="flex items-center gap-4 mt-2">
                        <p>Rating</p>
                        <div className="flex gap-1">
                           <button
                              onClick={() => setRating(1)}
                              className={`${
                                 rating >= 1 ? "text-[#ffbe5b]" : ""
                              }`}
                           >
                              <Star />
                           </button>
                           <button
                              onClick={() => setRating(2)}
                              className={`${
                                 rating >= 2 ? "text-[#ffbe5b]" : ""
                              }`}
                           >
                              <Star />
                           </button>
                           <button
                              onClick={() => setRating(3)}
                              className={`${
                                 rating >= 3 ? "text-[#ffbe5b]" : ""
                              }`}
                           >
                              <Star />
                           </button>
                           <button
                              onClick={() => setRating(4)}
                              className={`${
                                 rating >= 4 ? "text-[#ffbe5b]" : ""
                              }`}
                           >
                              <Star />
                           </button>
                           <button
                              onClick={() => setRating(5)}
                              className={`${
                                 rating >= 5 ? "text-[#ffbe5b]" : ""
                              }`}
                           >
                              <Star />
                           </button>
                        </div>
                     </div>
                  </div>
                  <div className="flex items-center justify-end w-full gap-5 mt-3">
                     <button
                        className="px-3 py-1 border rounded-[4px] border-[#62646a] hover:bg-[#62646a] hover:text-white"
                        onClick={onCancel}
                     >
                        Cancel
                     </button>
                     <button
                        className="px-3 py-1 text-white border rounded-[4px] bg-primary border-primary hover:bg-primary-dark"
                        onClick={onSubmit}
                     >
                        Submit
                     </button>
                  </div>
               </div>
            )}
         </div>
         <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
         />
      </div>
   );
};

const Comment = ({ comment }) => {
   return (
      <div className="w-full py-6 border-b">
         <div className="flex items-center gap-4 mb-2">
            <div className="flex items-center gap-3">
               <img
                  src={comment?.avatar}
                  alt={comment?.tenNguoiBinhLuan}
                  className="w-10 h-10 rounded-full"
               />
               <p className="font-semibold cursor-pointer hover:underline text-secondary">
                  {comment?.tenNguoiBinhLuan}
               </p>
            </div>
            <div className="h-4 border border-[#c5c6c9]"></div>
            <div className="flex items-center gap-1 text-[15px] font-semibold text-[#ffbe5b]">
               <Star />
               <Star />
               <Star />
               <Star />
               <Star />
               <p>{comment?.saoBinhLuan}</p>
            </div>
         </div>
         <p>{comment?.noiDung}</p>
         <p className="pr-3 text-sm opacity-50">{comment?.ngayBinhLuan}</p>
      </div>
   );
};

export default Comments;
