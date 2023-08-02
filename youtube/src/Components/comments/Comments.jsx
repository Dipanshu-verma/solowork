import React from "react";
import Comment from "../comment/Comment";
import './comments.scss'
const Comments = () => {
  function handdelcomment() {
    console.log("jjjj");
  }
  return (
    <div className="comments">
      <p>1234 commenmts</p>

      <div className="comments__form d-flex my-2 w-100">
        <img
          src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
          alt=""
          className="rounded-circle mr-3"
        />
        <form onSubmit={handdelcomment} className="d-flex flex-grow-1">
          <input
            type="text"
            className="flex-grow-1"
            placeholder="Write a comment.."
          />
          <button className="border-0 p-2">Comment</button>
        </form>
      </div>

      <div className="comments__list">
        {
          [...Array(10)].map(()=>{
            return <Comment/>
          })
        }
      </div>
    </div>
  );
};

export default Comments;
