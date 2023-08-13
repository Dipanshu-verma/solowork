import { Box, Button, Card, CardBody, CardFooter, Divider, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import RatingStar from './RatingStar'

const ProductDetailCard = ({product}) => {
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
      <Button color='#fff' bg="black" border={"2px solid black"} _hover={{ color:"black",bg:"#fff",boxShadow:"0 0 10px black" }}  position="absolute" right="2rem" bottom="1.5rem">Add to Cart</Button>
    </HStack>
  )
}

export default ProductDetailCard
