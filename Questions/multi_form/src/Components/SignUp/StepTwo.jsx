import React from "react";

const StepTwo = ({setPage,data, setdata }) => {

  function getdata(event) {
    setdata({ ...data, [event.target.name]: event.target.value });
  }

  return <div>

<label>
    <p>education</p> 
   <select name="education" data-cy="education" onChange={(event) => getdata(event)} >
   <option value="">-Choose Education</option>
   <option value="B.Tech">B.Tech</option>
   <option value="Bsc">Bsc</option>
   <option value="B.A">B.A</option>
   <option value="B.A">BCA</option>
   </select>
   </label>
   <labe>
    <p>passing year</p>
    <input type="month"  name="passingyear"  data-cy="passing year" onChange={(event) => getdata(event)}  />
   </labe>
   <labe>
    <p>birth date</p>
    <input type="date"  name="birthdata"  data-cy="birthDate"  onChange={(event) => getdata(event)} />
   </labe>
   <div>
   <button  onClick={()=>setPage(1) }>previous</button>
     <button  onClick={()=>setPage(3) }>next</button>

   </div>
  
  </div>;
};

export default StepTwo;
