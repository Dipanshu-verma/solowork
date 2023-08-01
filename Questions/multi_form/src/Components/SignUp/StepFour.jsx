import React from "react";
import "../styles.css"
const StepFour = ({setPage,data, setdata,setState }) => {


  function getdata(event) {
    setdata({ ...data, [event.target.name]: event.target.value });
  }
  return <div>
 
<label >
    <p>Father Name</p> 
    <input type="text" placeholder="father name" name="fathername" data-cy="fatherName" onChange={(event) => getdata(event)} />
   </label>
   <label >
    <p>Mother Name</p>
    <input type="text"  placeholder="mother name" name="mothername" data-cy="motherName" onChange={(event) => getdata(event)} />
   </label>
   <label >
    <p>address</p>
    <textarea
    type="text"
          rows="4"
          cols="50"
          name="address"
          placeholder="address"
          data-cy="address"
          onChange={(event) => getdata(event)}
        />
   </label>
   
  
     <div>
     <div className="btnDiv">
   <button onClick={()=>setPage(2) } >previous</button>
    
  <input type="submit" />
  </div>
    </div>

  </div>;
};

export default StepFour;
