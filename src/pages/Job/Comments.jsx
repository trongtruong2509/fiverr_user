import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getComments } from "../../common/slices/commentSlice";

const Comments = ({ id }) => {
   const dispatch = useDispatch();

   useEffect(() => {
      if (id) {
         dispatch(getComments(id));
      }
   }, [id]);

   return (
      <div className="mt-12 border-t">
         <div className="mt-8">Comments</div>
      </div>
   );
};

export default Comments;
