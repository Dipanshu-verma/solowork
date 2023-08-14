 
 
import { useParams } from "react-router-dom";
 
import ProductDetailCard from "../card/ProductDetailCard";

 

const ProductDetails = () => {
  const{id} =  useParams()
 const product =  JSON.parse(sessionStorage.getItem("detailItem")) 
console.log(product);
  return (
    <div>
      
 
  <ProductDetailCard product={product} />
     
    
    </div>
  );
};

export default ProductDetails;
