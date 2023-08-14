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
import React from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

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
          {" "}
          ECORE{" "}
        </Center>
        <Flex justifyContent="space-between" alignItems="center" gap="2rem">
          <Link >Home</Link>
          <Link to='/Products' >Products</Link>
          <Link>About</Link>
          <Button leftIcon={<AiOutlineLogin />}>Login</Button>

          <Center ref={btnRef} color="#000000" onClick={onOpen}>
            <BsFillCartFill />
            <span></span>
          </Center>

          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Cart Items <span></span> </DrawerHeader>

              <DrawerBody>
                {/* {cartItems.length === 0 ? (
                  <p>Your cart is empty.</p>
                ) : (
                  <ul>
                    {cartItems.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )} */}
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
