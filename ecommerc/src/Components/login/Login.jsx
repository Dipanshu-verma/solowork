import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import "./login.scss";
import axios from 'axios'
const Login = () => {
  const [show, setShow] = useState(false);
  const [login, setlogin] = useState(true);
  const [pass, setpass] = useState(true);

  const [namevalue, setnamevalue] = useState("");
  const [emailvalue, setemailvalue] = useState("");
  const [passwordvalue, setpasswordvalue] = useState("");

  const formref = useRef();
  function passwordhandle() {
    
    setShow(!show);
  }

  function handlelogin() {
    setlogin(!login);
    setnamevalue("");
    setemailvalue("");
    setpasswordvalue("");
  }

  async function handleform(e) {
    e.preventDefault();
    if (!validatePassword(passwordvalue)) {
      setpass(false);
      return;
    }
    setpass(true);
    console.log(emailvalue, passwordvalue);

      
      if(!login){
        try{
          const user = {name:namevalue,email:emailvalue,password:passwordvalue} 
          const response = await axios.post("/register", user);

              if(response.status ===400){
                // User already exists. 

              }else{

                // user registred successfully.
                
              }

        }catch(err){
          console.error('Registration failed:', err.message);
        }
      
      }else{
        try{
          const user = {email:emailvalue,password:passwordvalue} 
          const response = await axios.post("/login", user);

              if(response.status ===401){
                // console.log(response.data.message);
                // Invalid credential.
              }else{
                // Login successful.
              }

        }catch(err){
          console.error('Registration failed:', err.message);
        }
      
      }

    setemailvalue("");
    setpasswordvalue("");
  }
  function validatePassword(password) {
     
    return /\d/.test(password) && /[!@#$%^&*]/.test(password);
  }
  return (
    <Box w="md" className="container">
      <Box textAlign="center">
        <Text fontSize="1.6rem" fontWeight="700" mb=".6rem">
          {" "}
          {login ? "Log in to your account" : "Create an Account"}{" "}
        </Text>
        <Text>
          {" "}
          {login ? "Don't have an account?" : "Already have an account? "}
          <a href="#" onClick={handlelogin} className="ancor">
            {login ? "Sign up" : "Log in"}
          </a>
        </Text>
      </Box>

      <form ref={formref} onSubmit={handleform}>
        {!login && (
          <>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Name"
                mb="1.2rem"
                value={namevalue}
                onChange={(e) => setnamevalue(e.target.value)}
              />
            </FormControl>
          </>
        )}
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Email"
            mb="1.2rem"
            value={emailvalue}
            onChange={(e) => setemailvalue(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            type={show ? "text" : "password"}
            mb="1.2rem"
            placeholder="Password"
            value={passwordvalue}
            onChange={(e) => setpasswordvalue(e.target.value)}
          />
        </FormControl>
        <p className="errormassege">
          {!pass
            ? "password should contains atleast 1 symbol and 1 number"
            : ""}
        </p>
        {show ? (
          <BsFillEyeSlashFill
            className={pass ? "eyeshow" : "eyeshow aftererroreye"}
            size={20}
            onClick={passwordhandle}
          />
        ) : (
          <BsFillEyeFill
            size={20}
            className={pass ? "eyeshow" : "eyeshow aftererroreye"}
            onClick={passwordhandle}
          />
        )}

        <Button w="100%" type="submit" colorScheme="blue" mt="2rem">
          {!login ? "Create Account" : "Sign in"}{" "}
        </Button>

        <Box display="flex" gap="1rem" mt="2rem" py=".5rem" borderRadius="3px" border="1px solid gray" justifyContent="center">
          <Text>Continue with </Text>

          <Image
            w="1.6rem"
            cursor="pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"
          />
        </Box>
      </form>
    </Box>
  );
};

export default Login;
