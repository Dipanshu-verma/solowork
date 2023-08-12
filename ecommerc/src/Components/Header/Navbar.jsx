import { Box, Button, Center, Flex, Input } from "@chakra-ui/react";
import React from "react";
import { AiOutlineLogin } from "react-icons/ai";
import {BsFillCartFill } from 'react-icons/bs'
import { Link } from "react-router-dom";
 
const Navbar = () => {
  return (
     <div style={{position:"fixed",width:"100%",top:"0"}}>
    <Flex bg="#F7FAFC" justifyContent="space-between" alignItems="center" p="1.1rem" px="2rem" fontSize="1.5rem" >
      <Center ml="7%" > ECORE </Center>
      <Flex justifyContent="space-between" gap="2rem"  >
        <Link>Home</Link>
        <Link>Products</Link>
        <Link>About</Link>
        <Button leftIcon={<AiOutlineLogin />} >
     
          Login
        </Button>
         
        <Center>
        <BsFillCartFill />
           <span></span>
        </Center>
        </Flex>
    </Flex>
    </div>
  );
};

export default Navbar;
