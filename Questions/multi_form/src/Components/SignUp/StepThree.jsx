import React from "react";

const StepThree = ({setPage,data,setdata }) => {

  function getdata(event) {
    setdata({ ...data, [event.target.name]: event.target.value });
  }


  return <div>
  
    <label >
    <p>First Name</p> 
    <input type="text" placeholder="First Name" name="FirstName"  data-cy="firstName" onChange={(event) => getdata(event)} />
   </label>
   <label >
    <p>Last Name</p>
    <input type="text"  placeholder="Last Name" name="lastName"  data-cy="lastName" onChange={(event) => getdata(event)} />
   </label>
   <label >
    <p>Phone Number</p>
    <input type="tel"   placeholder="phone number" name="phonenumber"  data-cy="phone" onChange={(event) => getdata(event)} />
   </label>
  
     <div>
   <button onClick={()=>setPage(2) }  >previous</button>
     <button onClick={()=>setPage(4) }  >Next</button>

   </div>

  </div>;
};

export default StepThree;
