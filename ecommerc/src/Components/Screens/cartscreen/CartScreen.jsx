import React from 'react'
import { useSelector } from 'react-redux';
import CartCard from '../../card/cartCard';
import { Box } from '@chakra-ui/react';

const CartScreen = () => {

  const{cartItems} =  useSelector(state=>state.cart);


  return (
    <Box display="flex"  mt="12vh"  justifyContent="space-between" gap="2rem" p="2rem">
    <Box >
       {cartItems?.length === 0 ? (
                  <h1>Your cart is empty.</h1>
                ) : (
                  <ul>
                   {cartItems?.map((item) => (
                        
                   <CartCard product={item} CartScreen/>
                  
            
                    ))}
                  </ul>
                )}
    </Box>
   <Box>
  
   </Box>

    </Box>
  )
}

export default CartScreen
