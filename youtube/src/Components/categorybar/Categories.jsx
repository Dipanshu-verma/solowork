  
import { useState } from 'react';
import './_category.scss'

const keywords = [
  "All",
  "React js",
  "Angular js",
  "React Native",
  "use of API",
  "Redux",
  "Music",
  "Algorithm Art",
  "Guitar",
  "Bengali Songs",
  "Coding",
  "Cricket",
  "Football",
  "Real Madrid",
  "Gatsby",
  "Poor Coder",
  "Shwetabh",
];

const Categories = () => {
  const[activeElement,setactiveElement] = useState("All")

  function handleClick(value){
    setactiveElement(value)
  }
  return (
    <div className="CategoriesBar">
      {
        keywords.map((value,index)=> <span  key={index} className={activeElement===value?"active":""} onClick={()=> handleClick(value)}>{value}</span> )
      }
    </div>
  )
}

export default Categories
