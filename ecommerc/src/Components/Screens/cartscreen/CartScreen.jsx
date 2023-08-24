import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartCard from "../../card/cartCard";
import { Box, Button, Input, Text } from "@chakra-ui/react";

const CartScreen = () => {
  const [input, setInput] = useState("");
  const [discount, setdiscount] = useState(0);
  const { cartItems,totalPrice } = useSelector((state) => state.cart);
  const[show,setShow] =  useState(false)


function handleDiscount(){
  if(input === "kuch to discount do"){
    setShow(false);
    setInput("");
    setdiscount((totalPrice*10/100).toFixed(0));
    localStorage.setItem("discountprice", discount)
  }else{
    setShow(true);
    setInput("");
  }
}

function handlecheckout(){
  console.log("yes");
}

  return (
    <Box
      display="flex"
      mt="12vh"
      justifyContent="space-between"
      gap="2rem"
      p="2rem"
    >
      <Box>
        {cartItems?.length === 0 ? (
          <h1>Your cart is empty.</h1>
        ) : (
          <ul>
            {cartItems?.map((item) => (
              <CartCard product={item} CartScreen />
            ))}
          </ul>
        )}
      </Box>
      <Box  p="1rem"  >
        <Box justifyContent="space-between" gap="1.3rem" display="flex">
          <Text> <Input type="text" placeholder="Enter Coupon Code" value={input}  width="14rem" onChange={(e) => setInput(e.target.value)} /> <Text display={show?"block":"none"} color="red">You have entered wrong code</Text> </Text>
          <Button onClick={handleDiscount} colorScheme="green">Apply</Button>
        </Box>
        <Box fontSize="17px" fontWeight="600" width="90%" m="auto"  mt="1rem">
          <Box justifyContent="space-between" gap="2rem" display="flex">
            <p>Price :</p>
            <p>${totalPrice.toFixed(0)}</p>
          </Box>
          <Box justifyContent="space-between" gap="2rem" display="flex">
            <p>Discount :</p>
            <p>${discount}</p>
          </Box>
          <Box justifyContent="space-between" gap="2rem" display="flex">
            <p>Total Amount :</p>
            <p>${discount===0?totalPrice.toFixed(0):(totalPrice*90/100).toFixed(0)}</p>
          </Box>
        </Box>
        <Button border="2px" ml="68%" borderRadius="5px" bg="#000000" color="#fff" mt="1rem" _hover={{ color: "black", bg: "#fff", boxShadow: "0 0 10px black" }} onClick={handlecheckout}>Checkout</Button>
      </Box>
      
    </Box>
  );
};

export default CartScreen;
