import React, { useState } from "react";
import StepFour from "../Components/SignUp/StepFour";
import StepOne from "../Components/SignUp/StepOne";
import StepTwo from "../Components/SignUp/StepTwo";
import StepThree from "../Components/SignUp/StepThree";
import UserInfo from "../Components/SignUp/UserInfo";


const SignUp = () => {
const[Page,setPage]  = useState(1);
const[data, setdata] = useState({
  email:"",
  Password:"",
  ConfirmPassword:"",
  education:"",
  passingyear:"",
  birthdata:"",
  FirstName:"",
  lastName:"",
  phonenumber:"",
  address:"",
  fathername:"",
  mothername:"",


})
function showUser(event){
  event.preventDefault();
  console.log(data);
}

  return <div>{/* create form and render component according to steps */}
  <h2 data-cy="current-step">Step:{Page}</h2>
    <form onSubmit={showUser}>
    
    {Page === 1 && <StepOne setPage={setPage}  data={data}  setdata={setdata}/>}
      {Page === 2 && <StepTwo setPage={setPage}   data={data}  setdata={setdata}/>}
      {Page === 3 && <StepThree setPage={setPage}  data={data}  setdata={setdata} />}
      {Page === 4 && <StepFour setPage={setPage}  data={data}  setdata={setdata} />}
       
    
    </form>


  </div>;
};

export default SignUp;
