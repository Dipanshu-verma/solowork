import { Box, Image, border } from "@chakra-ui/react";
import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import RatingStar from "./RatingStar";
import { useDispatch, useSelector } from "react-redux";
import { setTotalPrice, setcartItems } from "../../Redux/actions/cartaction";
const CartCard = ({product}) => {
  const [quant, setQuant] = useState(
    localStorage.getItem(`quan_${product.id}`) || 1
  );
  const dispatch =  useDispatch();
  const{totalPrice} =  useSelector(state=>state.cart);
  function handleminus() {
    let quan = localStorage.getItem(`quan_${product.id}`) || 1;
    quan = Number(quan);
    if (quan !== 1) {
      quan -= 1;
     
      setQuant(quan);
      localStorage.setItem(`quan_${product.id}`, quan);
      dispatch(setTotalPrice(totalPrice-product.price))
    }
  }

  function handleplus() {
    let quan = localStorage.getItem(`quan_${product.id}`) || 1;
    quan = Number(quan);
     
    quan += 1;
   
    setQuant(quan);
    localStorage.setItem(`quan_${product.id}`, quan);
    dispatch(setTotalPrice(totalPrice+product.price))
  }

  


  function handleDelete(){
let items = JSON.parse(localStorage.getItem("cartItems"))
 
    let index = items.findIndex(element => element.id === product.id);
     items.splice(index,1)
     dispatch(setcartItems(items))
     localStorage.setItem("cartItems",JSON.stringify(items));
 
  }


  return (
    <Box
      display="flex"
      borderBottom="1px solid gray"
      w="100%"
      alignItems="center"
      gap=".5rem"
      padding=".5rem"
      mb=".5rem"
    >
      <Box w="40%" height="8rem">
        <Image src={product.image} w="100%" height="100%" objectFit="contain" />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        gap=".5rem"
        position="relative"
        width="100%"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap=".5rem"
          fontSize="17px"
        >
          <p style={{ fontWeight: "700" }}>{product.title}</p>
          <MdDeleteForever onClick={handleDelete}
            style={{ position: "absolute", right: "0", bottom: ".5rem" }}
            size={22}
          />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <h3 style={{ fontSize: "16px" }}>
            Price : ${(quant * product.price).toFixed(0)}
          </h3>
        </Box>

        <Box display="flex" alignItems="center" gap=".5rem">
          <FaMinus onClick={handleminus} />
          <span
            style={{
              padding: "0rem .4rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid black",
              borderRadius: "5px",
            }}
          >
            {quant}
          </span>
          <FaPlus onClick={handleplus} />
        </Box>
      </Box>
    </Box>
  );
};

export default CartCard;
