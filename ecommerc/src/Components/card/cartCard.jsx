import { Box, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import "../Screens/homescreen/home.scss";
import { useDispatch, useSelector } from "react-redux";
import { setTotalPrice, setcartItems } from "../../Redux/actions/cartaction";
import RatingStar from "./RatingStar";
import { handleDelete, handleminus, handleplus } from "./comoncard";
const CartCard = ({ product, CartScreen }) => {
  const [quant, setQuant] = useState(
    localStorage.getItem(`quan_${product.id}`) || 1
  );
  const dispatch = useDispatch();
  const { totalPrice } = useSelector((state) => state.cart);

  // function handleminus() {
  //   let quan = localStorage.getItem(`quan_${product.id}`) || 1;
  //   quan = Number(quan);
  //   if (quan !== 1) {
  //     quan -= 1;

  //     setQuant(quan);
  //     localStorage.setItem(`quan_${product.id}`, quan);
  //     dispatch(setTotalPrice(totalPrice-product.price))
  //   }
  // }

  // function handleplus() {
  //   let quan = localStorage.getItem(`quan_${product.id}`) || 1;
  //   quan = Number(quan);

  //   quan += 1;

  //   setQuant(quan);
  //   localStorage.setItem(`quan_${product.id}`, quan);
  //   dispatch(setTotalPrice(totalPrice+ Math.ceil(product.price)))

  // }

  // function handleDelete(){
  //   let items = JSON.parse(localStorage.getItem("cartItems"))
  //   let index = items.findIndex(element => element.id === product.id);
  //    items.splice(index,1)
  //    let quan = localStorage.getItem(`quan_${product.id}`) || 1;
  //    quan = Number(quan);

  //    dispatch(setTotalPrice(totalPrice-(product.price*quan)))
  //    localStorage.removeItem(`quan_${product.id}`)
  //    dispatch(setcartItems(items))
  //    localStorage.setItem("cartItems",JSON.stringify(items));

  // }

  return (
    <Box
      display="flex"
      borderBottom="1px solid gray"
      gap="1rem"
      padding=".5rem"
      mb=".5rem"
    >
      <Box w="40%">
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
          <MdDeleteForever
            onClick={() => handleDelete(product, dispatch, totalPrice)}
            className="deletebtn"
            size={22}
          />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <h3 style={{ fontSize: "16px" }}>
            Price : ${(quant * product.price).toFixed(0)}
          </h3>
        </Box>
        {CartScreen && (
          <>
            <Box display="flex" alignItems={"center"} gap={"2rem"}>
              <RatingStar rate={product.rating.rate} />
              <Text>{product.rating.count} reviews</Text>
            </Box>
            <Text>Description : {product.description}</Text>
          </>
        )}
        <Box display="flex" alignItems="center" gap=".5rem">
          <FaMinus
            onClick={() => handleminus(product, dispatch, totalPrice, setQuant)}
          />
          <span className="quantityspan">{quant}</span>
          <FaPlus
            onClick={() => handleplus(product, dispatch, totalPrice, setQuant)}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CartCard;
