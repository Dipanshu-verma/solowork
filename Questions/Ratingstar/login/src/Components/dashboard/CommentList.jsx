import React from "react";
import Comment from "./Comment";

const CommentList = ({data,setData}) => {
 
  const onChangeRating = (index, rating) => {
    const updatedData = [...data];
    updatedData[index].rating = rating;
    if(rating==1){
      updatedData[index].color = "red";
      updatedData[index].title = "Very Poor"
  
    }else if(rating ==2){
      updatedData[index].color = "yellow";
      updatedData[index].title = "Poor"
    }else if(rating ==3){
      updatedData[index].color = "orange";
      updatedData[index].title = "good"
    }else if(rating ==4){
      updatedData[index].color = "lightgreen";
      updatedData[index].title = "Very Good"
    }else{
      updatedData[index].color = "green";
      updatedData[index].title = "Excellent"
    }
    
    setData(updatedData);
  };

  return (
    <> 
        {
          data.map((comment,index)=>{
            return(
                <Comment key={comment.id} comment={comment} data={data} index={index} setData={setData}  onChangeRating={onChangeRating}/>
            )
          })
        }
    </>
  );
};
export default CommentList;
