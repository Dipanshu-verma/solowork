
// import React, { useState } from 'react';
// import './App.css';
// import 'tailwindcss/tailwind.css'
// import Block from './Component/Block';

// function App() {
//   const [state, setState] = useState(Array(9).fill(null));
//   const [turn, setTurn] = useState('X')
//   const [found, setFound] = useState(false)
//   const [winner, setwinner] = useState("Draw");
//   function handleblockclick(index: number) {
//     if (found) {
//       return;
//     }
//     if (state[index] !== null) {
//       return alert("you have already done you turn")
//     }
//     const statecopy = [...state];


//     statecopy[index] = turn;

//     const bool = findWiner(statecopy);


//     setState(statecopy);
//     setTurn(turn == 'X' ? 'O' : 'X');


//   }

//   function findWiner(statecopy: any[]) {

//     let Winner = "Draw";

//     let arr = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

//     for (var i in arr) {

//       const [a, b, c] = arr[i];

//       if (statecopy[a] != null && statecopy[a] == statecopy[b] && statecopy[b] == statecopy[c]) {
//         Winner = state[a];
//         setFound(true);
//         setwinner(Winner);
//         break;
//       }

//     }




//   }


//   function findactualwiner() {


//     if (found) {

//       return `Winner is ${winner}`
//     } else if (!state.includes(null)) {

//       return `it's Draw`

//     } else {
//       return `Current turn  is ${turn}`
//     }

//   }





//   return (
//     <div className="App">
//       <h1 className='underline text-3xl text-teal-400  text-center'> TiC TaC ToH App </h1>


//       <h1 className='text-center text-3xl text-teal-800'>{findactualwiner()}</h1>

//       <div style={{ border: "1px solid gray" }} className=' w-[350px] m-auto  mt-5 p-[20px] grid grid-cols-3'>
//         {
//           state.map((elm, index) => (
//             <Block value={state[index]} onClick={() => handleblockclick(index)} />
//           ))
//         }

//       </div>
//       {
//         (found || !state.includes(null)) &&  <button onClick={()=> {
//           setState(Array(9).fill(null))
//           setFound(false);
//           setTurn('X');

//         }
//          }>Reset</button>
//       }


//     </div>
//   );
// }

// export default App;




import React, { useState } from 'react'
import Block from './Component/Block';


const App = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [turn,setTurn] =  useState("X");
  const [found,setFound] =  useState(null);
  
function handleBlockClick(index:number){
if(state[index] !== null){
return;
}
if(found){
  return;
}



const copyState = [...state];
copyState[index] =  turn;
findWinner(copyState);
setState(copyState)
setTurn(turn==="X"?"O":"X");




}


function findWinner(copyState:any[]){

  const arr =  [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  for(var i in arr){
   
    const[a,b,c] =  arr[i];

    if(copyState[a] != null && copyState[a]===copyState[b]&& copyState[b]===copyState[c]){
      setFound(copyState[a]);
      break;
    }
    
  }



}

function checkheading(){
if(found){
  return `the Winner is ${turn==='X'?'O':'X'}`
}else if(!found && !state.includes(null)){
  return ` the game is Draw`
}else{
  return `Current turn is ${turn}`
}



}

  return (

    <>
    <h1 className='text-3xl  text-center'>{checkheading()}</h1>


    <div className=' w-[350px] m-auto grid grid-cols-3 p-3 border rounded-lg'>
      {
        state.map((elm, index) => (
          <Block value={state[index]}  onclick={()=>handleBlockClick(index)}/>
        ))
      }
    </div>
    <button onClick={()=>{
      setFound(null);
      setState(Array(9).fill(null))
      setTurn('X');
    }} className='px-3 py-1 border text-bold bg-black text-white ml-[50%] transform translate[-50%,0]'>Reset</button>

    </>
  )
}

export default App

