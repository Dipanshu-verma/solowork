import React from "react";
import "./videohorizontal.scss";
import request from "../../api";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Row, Col } from "react-bootstrap";
const VideoHorizontal = () => {
  const seconds = moment.duration(1000000).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  return (
    <Row className="videoHoriZontal m-1 py-1">
      <Col md={5} className="videoHoriZontal__left">
        <LazyLoadImage
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiUNDV_EoOELrIMCwRgnniF42NmIM5Epy-6g&usqp=CAU"
          effect="blur"
          className="videoHoriZontal__thumbnail"
          wrapperClassName="videoHoriZontal__thumbnail-wrapper"
        />
        <span className="videoHoriZontal__duration">{_duration}</span>
      </Col>
      <Col md={6} className="videoHoriZontal__right p-0">
        <p className="videoHoriZontal__title mb-0">
          Ba a Full Stack Developer in 1 one month
        </p>
        <div className="videohoriZontal__channel">the developer</div>
        <div className="videohoriZontal__details">
           {numeral(10000).format("0.a")} views • {moment("2022-05-05").fromNow()} 
        </div>
      </Col>
    </Row>
  );
};

export default VideoHorizontal;
