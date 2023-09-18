import React, { useState } from 'react';
import './confirm.scss'; 
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
const Confirm = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const toast = useToast();
  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };
const navigate =  useNavigate()
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };



  function validatePassword(password) {
    return /\d/.test(password) && /[!@#$%^&*]/.test(password);
  }

  const handleResetPassword = async(e) => {
 e.preventDefault();
    if (newPassword === confirmPassword) {
     
      if(!validatePassword(newPassword)) {
        return toast({
          description: `Password should be contain 1 alphabet and 1 number`,
          status: "success",
          position: "top",
          duration: 2000,
          isClosable: true,
        });
       
      }
       const email  =  localStorage.getItem("forget_email")

       try {
      const res  =  await axios.post("http://localhost:8000/confirm", {email,password:newPassword})
      toast({
        description: `Your password has been successfully reset `,
        status: "success",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
      setTimeout(()=>{

navigate("/login")

      },1000)
        
       } catch (error) {
        console.log(error.response.data.message);
       }

    } else {
       
      toast({
        description: `Your password doesn't match`,
        status: "error",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <div className="password-forget-card">
 
     
    <form onSubmit={handleResetPassword}>
      <div className="form-group">
        <label>New Password:</label>
        <input
          type="text"
          placeholder="Password"
          value={newPassword}
          onChange={handleNewPasswordChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Confirm password:</label>
        <input
          type="password"
          placeholder="confirm password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />
      </div>
      <button type="submit">Reset Password</button>
    </form>
  </div>
  );
};

export default Confirm;
