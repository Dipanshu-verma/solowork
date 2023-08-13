import { CardBody,Card, Image, Stack, Heading, Text, Divider, CardFooter, Button, HStack, ButtonGroup } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getDetailProduct } from '../../Redux/actions/productaction';

const CardProd = ({product}) => {
const navigate  =  useNavigate();
const dispatch =  useDispatch();
function handleProductDetails(){
// setTimeout(()=>{
  navigate(`/productdetail`)
// },100)

dispatch(getDetailProduct(product.id));
}
  return (
    <Card maxW='sm' boxShadow="0 0 5px black" align="center" onClick={handleProductDetails}>
    <CardBody>
      <Image
        src={product.image}
        boxSize='200px'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{product.title.slice(0,20)}</Heading>
         
         <HStack spacing="4rem">
         <Text color='black' fontWeight="600" fontSize='xx'>
       price: ${product.price}
        </Text>
          <Text color='black' fontWeight="600"  fontSize='xx'>
            rating: {product.rating.rate}
          </Text>
         </HStack>
       
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
     
        <Button   colorScheme='green'>
       Buy Now
        </Button>
         
 
    </CardFooter>
  </Card>
  )
}

export default CardProd
