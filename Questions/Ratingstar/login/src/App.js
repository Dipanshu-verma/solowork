import React from "react";
import { useState } from "react";
import Login from "./Components/login/Login";
import Dashboard from "./Components/dashboard/Dashboard";

const App = () => {

  const[login,setLogin] = useState(true)
  
  return (
    <div className="App">
      {/* Either Dashboard or Login component should be visible at a time */}
       {
          login?<Login setLogin={setLogin}/>:<Dashboard  setLogin={setLogin}/>
       }
    </div>
  );
};

export default App;
