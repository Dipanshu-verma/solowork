import Star from "./Star";

const StarRating = ({rating,onChangeRating}) => {
  const stars = [1,2,3,4,5];
  return (
    <>
 
            {
              stars.map((star)=>{
                return(
                  <Star  filled={(star<=rating)} onClick={() => onChangeRating(star)} />
                )
              })
            }

    
    <p style={{fontSize:"20px"}}>{rating} of 5</p>
    </>
  );
};
export default StarRating;
