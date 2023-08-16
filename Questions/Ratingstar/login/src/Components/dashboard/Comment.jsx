import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import StarRating from "./StarRating";
import styles from './Dashboard.module.css'
const Comment = ({comment,data,index,setData,onChangeRating }) => {


  const handleRemove = () => {
 

    const updatedData = [...data];
     
    updatedData.splice(index, 1);
     
    setData(updatedData);
  };

 

 
  return (
    <div className={styles.ratingcard}>
       
        <h1 style={{color:comment.color,}}>{comment.title}</h1>
            <StarRating rating={comment.rating} onChangeRating={(rating) => onChangeRating(index, rating)}/>
         
      <FaTrash data-icon="trash" onClick={handleRemove}  />
    </div>
  );
};
export default Comment;
