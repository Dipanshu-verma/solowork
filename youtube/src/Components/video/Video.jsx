import React from "react";
import "./_video.scss";
import { AiFillEye } from "react-icons/ai";
const Video = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img
          src="https://i.ytimg.com/vi/b1tLzl4jgF0/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCtM073s3HrZM6SBmC-_FOE8VOsdw"
          alt=""
        />
        <span>05.00</span>
      </div>
      <div className="video__bottom">
        <img
          src="https://yt3.ggpht.com/JbaWkiwA-8qWQ5svc6dQCes0LqXH-_GAuJ11zjEA5HgqMkR20VL_tVFsmnQ4FA-0Z8TzK9I4=s68-c-k-c0x00ffffff-no-rj"
          alt=""/>

        <div className="right">
            <span className="video__title">create a app in 5 by create a ap a app in 5 min by d devil</span>
            <span>marval studio</span>
          <div className="video__details">
            <span>5m views • </span>
            <span>5 days ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
