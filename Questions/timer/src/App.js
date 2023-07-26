 import Timer from './Timer';
import './App.css';
import React, { useState } from 'react'
function App() {
  const[show,setShow] = useState(true);
  return (
    <div className="App">
      {
        show? <Timer/>:""
      }
      <div>
        
      </div>
     <button onClick={()=> setShow(!show)}>{show?"Hide":"Show"}</button>
    </div>
  );
}

export default App;
