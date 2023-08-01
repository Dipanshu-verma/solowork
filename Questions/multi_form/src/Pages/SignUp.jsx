import React, { useState } from "react";
import StepFour from "../Components/SignUp/StepFour";
import StepOne from "../Components/SignUp/StepOne";
import StepTwo from "../Components/SignUp/StepTwo";
import StepThree from "../Components/SignUp/StepThree";
 
import './SignUp.css'

const SignUp = ({data,setdata,setState}) => {
const[Page,setPage]  = useState(1);
 
function showUser(event){
  event.preventDefault();
  setState(false);
   
}

  return <div className="DivContainer"> 
  <h2 data-cy="current-step" className="step-indicator" >Step: <span className="step">{Page}</span> </h2> 
 
    <form onSubmit={showUser}>
    
    {Page === 1 && <StepOne setPage={setPage}  data={data}  setdata={setdata}/>}
      {Page === 2 && <StepTwo setPage={setPage}   data={data}  setdata={setdata}/>}
      {Page === 3 && <StepThree setPage={setPage}  data={data}  setdata={setdata} />}
      {Page === 4 && <StepFour setPage={setPage}  data={data}  setdata={setdata} />}
       
    
    </form>


  </div>;
};

export default SignUp;
