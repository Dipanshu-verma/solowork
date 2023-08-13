import { Button, Card, CardBody, CardFooter, Divider, HStack, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const ProductDetailCard = ({product}) => {
  return (
    <Card w='70%' boxShadow="0 0 5px black">
    <CardBody>
      <Image
        src={product.image}
        boxSize='200px'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{product.title.slice(0,20)}</Heading>
         
         <Stack spacing="4rem">
         <Text color='black' fontWeight="600" fontSize='xx'>
       price: ${product.price}
        </Text>
          <Text color='black' fontWeight="600"  fontSize='xx'>
            rating: {product.rating.rate}
          </Text>
         </Stack>
       
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
     
        <Button   colorScheme='green'>
       Add to cart
        </Button>
         
 
    </CardFooter>
  </Card>
  )
}

export default ProductDetailCard
