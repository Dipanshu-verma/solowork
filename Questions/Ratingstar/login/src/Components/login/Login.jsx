import react from "react"
import {useState} from "react"
import styles from './Login.module.css'

const Login = ({setLogin}) => {
const[username,setUsername] = useState("");
const[password,setPassword] = useState("");


  function check(){
   
    if(username==='admin' && password==='1234'){
      setLogin(false);
    }else{
      alert("enter the correct details");
    }
  }

  function handlform(event){
 
    event.preventDefault();
    check();
  }
  return (
    <div className={styles.loginDiv}>
      <form onSubmit={handlform}>
        <input type="text" placeholder="username" name="username"   value={username} onChange={(event)=>{setUsername(event.target.value)}} required/>
        <input type="text" placeholder="password" name="password" value={password} onChange={(event)=>{setPassword(event.target.value)}} required />
        <input type="submit" value="Submit"   />
      </form>
    </div>
  );
};

export default Login;
