import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Star from "../../common/components/Star";
import { getComments } from "../../common/slices/commentSlice";

const Comments = ({ id }) => {
   const dispatch = useDispatch();

   const comments = useSelector((state) => state.comment.comments);

   useEffect(() => {
      if (id) {
         dispatch(getComments(id));
      }
   }, [id]);

   return (
      <div className="mt-12 border-t">
         <div className="">
            {comments?.map((c, index) => (
               <Comment comment={c} key={index} />
            ))}
         </div>
         <div></div>
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
