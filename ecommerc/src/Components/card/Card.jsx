import {
  CardBody,
  Card,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  Button,
  HStack,
} from "@chakra-ui/react";
import React from "react";

import { useNavigate } from "react-router-dom";

const CardProd = ({ product, productscreen }) => {
  const navigate = useNavigate();

  function handleProductDetails() {
    navigate(`/productdetail/${product.id}`);
  }

  function handleAddToCart() {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    let bool = false;
    cartItems?.map((elm) => {
      if (elm.id == product.id) {
        bool = true;
      }
    });
    if (!bool) {
      cartItems.push(product);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }
  return (
    <Card maxW="sm" boxShadow="0 0 5px black" align="center">
      <CardBody onClick={handleProductDetails}>
        <Image src={product.image} boxSize="200px" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{product.title.slice(0, 20)}</Heading>

          <HStack spacing="4rem">
            <Text color="black" fontWeight="600" fontSize="xx">
              price: ${product.price}
            </Text>
            <Text color="black" fontWeight="600" fontSize="xx">
              rating: {product.rating.rate}
            </Text>
          </HStack>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        {productscreen ? (
          <Button
            color="#fff"
            bg="black"
            border={"2px solid black"}
            _hover={{ color: "black", bg: "#fff", boxShadow: "0 0 10px black" }}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        ) : (
          <Button colorScheme="green" onClick={handleProductDetails}>
            Buy Now
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default CardProd;
