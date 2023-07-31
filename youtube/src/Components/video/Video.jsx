import React, { useEffect, useState } from "react";
import "./_video.scss";
import request from "../../api";
import moment from 'moment'
import numeral from 'numeral'
const Video = ({ video }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = video;

  const[views, setViews] =  useState(null);
  const[duration, setDuration] = useState(null)
  const[channelicon, setchannelicon] = useState(null)

const seconds =  moment.duration(duration).asSeconds()
const _duration = moment.utc(seconds*1000).format("mm:ss")
  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: id,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    get_video_details();
  }, [id]);


  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setchannelicon(items[0].snippet.thumbnails.default)
      console.log(items);
    };
    get_channel_icon();
  }, [channelId]);

  return (
    <div className="video">
      <div className="video__top">
        <img src={medium.url} alt="" />
        <span>{_duration}</span>
      </div>
      <div className="video__bottom">
        <img
          src={channelicon?.url}
          alt=""
        />

        <div className="right">
          <span className="video__title">
           {title}
          </span>
          <span>{channelTitle}</span>
          <div className="video__details">
            <span> {numeral(views).format("0.a")} views • </span>
            <span>{moment(publishedAt).fromNow()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
