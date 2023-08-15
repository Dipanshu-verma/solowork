import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import {MdDeleteForever} from 'react-icons/md'
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
const CartCard = ({product}) => {
  return (
    <Box display="flex"  borderBottom="1px solid gray" w="100%" alignItems="center" gap=".5rem" padding=".5rem" mb=".5rem">
      <Box w="40%" height="8rem" >
      <Image src={product.image} w="100%"  height="100%" objectFit="contain" />
      </Box>
  
      <Box display="flex" flexDirection="column" gap=".5rem">
      <Box display="flex" justifyContent="space-between"  gap=".3rem">
      <p>{product.title.slice(0,15)}</p>
      <MdDeleteForever/>
      </Box>
        <Box display="flex"  alignItems="center"  gap=".3rem">
            <FaMinus/>
            <span>{localStorage.getItem(`quan_${product.id}`)||1}</span>
            <FaPlus/>
        </Box>
         
      </Box>

    </Box>
  )
}

export default CartCard

