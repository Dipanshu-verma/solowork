import { Box, Button,   HStack, Heading, Image, Stack, Text,  } from '@chakra-ui/react'
import React from 'react'
import RatingStar from './RatingStar'
import { useDispatch, useSelector } from 'react-redux';
import { setTotalPrice, setcartItems } from '../../Redux/actions/cartaction';
import {handleAddToCart } from './comoncard';

const ProductDetailCard = ({product}) => {
  const dispatch= useDispatch();
  const{totalPrice} =  useSelector(state=>state.cart);


  // function handleAddToCart(){
  //   let cartItems   = JSON.parse(localStorage.getItem("cartItems")) || [];
  //   let bool  =  false;
  //   cartItems?.map((elm)=>{
  //   if(elm.id == product.id){
  //     bool=true;
  //   }
  //   })
  //    if(!bool){
  //     cartItems.push(product);
  //     localStorage.setItem("cartItems",JSON.stringify(cartItems));
  //     dispatch(setcartItems(cartItems))
       
  //     dispatch(setTotalPrice(totalPrice+product.price));
  //    }
  //   }
  return (
    <HStack w="80%" mt="18vh" mb="1rem" ml="1rem" position="relative" borderRadius="5px" gap="10" p="1.5rem" boxShadow="0 0 10px black">
      <Image src={product.image} w="250px" objectFit="cover"/>
      <Box display="flex" flexDirection="column" gap=".7rem" mb="4rem">
        <Heading fontSize="25px">
         {product.title}
        </Heading>
        <Text fontSize="18px" fontWeight="600">
            Price: ${product.price}
          </Text>
       
           <Stack display="flex" flexDirection="row" gap="1rem"> 
        <RatingStar rate= {product.rating.rate}/>
        <Text fontWeight="600">
          {product.rating.count} reviews
        </Text>
        </Stack>
        <Text>
         Description: {product.description}
          </Text>

       
      </Box>
      <Button color='#fff' bg="black" border={"2px solid black"} _hover={{ color:"black",bg:"#fff",boxShadow:"0 0 10px black" }}  position="absolute" right="2rem" bottom="1.5rem" onClick={()=>handleAddToCart(product,dispatch,totalPrice)} >Add to Cart</Button>
    </HStack>
  )
}

export default ProductDetailCard
