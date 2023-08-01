import { useState } from "react";
import "./App.css";
import SignUp from "./Pages/SignUp";
import UserInfo from "./Components/SignUp/UserInfo";
function App() {
  const[state, setState]  =  useState(true)
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
  console.log(data);
  return <div> 
  <h1>React Multi Step Form</h1>
  {
  state?
  <SignUp data={data} setdata={setdata} setState={setState}/>:
  <UserInfo data={data} />
  }
  </div>;
}

export default App;
