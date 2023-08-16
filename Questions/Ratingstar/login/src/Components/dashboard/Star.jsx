import React from "react";
import "../../styles.css"
import { FaStar } from "react-icons/fa";

const Star = ({filled,onClick}) => {
  return <FaStar data-icon="star" style={{ color: filled ? "yellow" : "grey" }}
      onClick={onClick} />;
};
export default Star;
