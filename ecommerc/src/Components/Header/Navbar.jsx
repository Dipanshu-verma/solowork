import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  useDisclosure,
  useTheme,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import CartCard from "../card/cartCard";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
 const[cartItems,setcartItems] =  useState([])
 
useEffect(()=>{
setcartItems(JSON.parse(localStorage.getItem("cartItems")))
},[cartItems])


  return (
    <div style={{ position: "fixed", width: "100%", top: "0", zIndex: "100" }}>
      <Flex
        bg="#F7FAFC"
        justifyContent="space-between"
        align="center"
        p="1.1rem"
        px="2rem"
        fontSize="1.3rem"
      >
        <Center
          ml="7%"
          fontSize="26px"
          fontWeight="700"
          letterSpacing="2px"
          color="RGBA(0, 0, 0, 0.92)"
        >
           
          ECORE 
        </Center>
        <Flex justifyContent="space-between" alignItems="center" gap="2rem">
          <Link to='/' >Home</Link>
          <Link to='/Products' >Products</Link>
          <Link>About</Link>
          <Button leftIcon={<AiOutlineLogin />}>Login</Button>

          <Center ref={btnRef} color="#000000" onClick={onOpen} position="relative">
            <BsFillCartFill size={"2rem"} />
            <span style={{position:"absolute", top:"-.5rem", right:"-.5rem" ,width:"25px",height:"25px",borderRadius:"50%",backgroundColor:"#000000",color:"#fff", display:"flex",justifyContent:"center", alignItems:"center", display: cartItems.length === 0 ? 'none' : 'flex'}}>{cartItems.length}</span>
          </Center>

          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
            size="md"
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader color="red"  >Cart Items <span  > {cartItems.length} </span> </DrawerHeader>

              <DrawerBody>
                {cartItems?.length === 0 ? (
                  <h1>Your cart is empty.</h1>
                ) : (
                  <ul>
                   { cartItems.map((item) => (
                        
                       <CartCard product={item} setcartItems={setcartItems}/>
                  
            
                    ))}
                  </ul>
                )}
              </DrawerBody>

              <DrawerFooter>
                <Button
                  colorScheme="red"
                  mr={2}
                  onClick={onClose}
                  fontSize="1rem"
                >
                  PROCEED
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Flex>
    </div>
  );
};

export default Navbar;
