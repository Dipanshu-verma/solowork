import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
 
import ProductDetailCard from "../card/ProductDetailCard";

import { Box, Skeleton } from "@chakra-ui/react";

const ProductDetails = () => {
  
  

const {product,loading} = useSelector((state) => state.productDetail);
 

 
 
 
  return (
    <div>
     {
        loading? <Skeleton width="70%" h="70vh"/>: <ProductDetailCard product={product} />
     }
      {/*  */}
    </div>
  );
};

export default ProductDetails;
