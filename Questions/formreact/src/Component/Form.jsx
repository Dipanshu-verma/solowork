import React, { useState,useEffect} from "react";

const Form = ({setId,pushindata,id}) => {

const[obj, setObj] = useState({
  id:id,
  name:"",
  age:"",
  address:"",
  department:"",
  salary:"",
  marital_state:"NO",
})
useEffect(() => {
 
  setObj((prevObj) => ({ ...prevObj, id: id }));
}, [id]);
const getValue = (event)=>{
if(event.target.type==="checkbox"){
   event.target.value = event.target.checked?"YES":"NO"
}

  setObj({...obj, [event.target.name]:event.target.value});
}


const getobj= (event)=>{
  event.preventDefault();
  pushindata(obj);
  setId((previous) => previous + 1);
console.log(obj);
}

  return (
    <div>
      <form onSubmit={getobj}>
        <label>
          Name
          <input type="text" placeholder="Enter your name" name="name" onChange={getValue}/>
        </label>
        <label>
          Age
          <input type="text" placeholder="Enter your age" name="age" onChange={getValue}/>
        </label>
        <label>
          Address
          <input type="text" placeholder="Enter your address" name="address" onChange={getValue}/>
        </label>
        <label>
          Department
          <select name="department" onChange={getValue}>
            <option value="">Select an option</option>
            <option value="Technology Solutions">Technology Solutions</option>
            <option value="Digital Innovation">Digital Innovation</option>
            <option value="Information Systems">Information Systems</option>
            <option value="Software Engineering">Software Engineering</option>
          </select>
        </label>

        <label>
          Salary
          <input type="number" placeholder="Enter your name" name="salary" onChange={getValue} />
        </label>

        <label>
          marital state
          <input
            type="checkbox"
            onChange={getValue}
            name="marital_state"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
