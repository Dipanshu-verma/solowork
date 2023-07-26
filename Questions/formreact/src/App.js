 
import "./App.css";
import Form from "./Component/Form";
import Table from "./Component/Table";
import { useEffect, useState } from "react";
function App() {
  // const [data, setData] = useState([]);
  // const [id, setId] = useState(1);

  useEffect(() => {
    getData();
  },[]);

  async function getData(){
    console.log("j");
    try {

    let res  = await fetch(`http://localhost:3000/posts`);
    res  = await res.json();
  


    } catch (er) {
      console.log(er);
    }
  }
  // function pushindata(obj) {
  //   let newArr = [...data];
  //   newArr.push(obj);
  //   setData(newArr);
  // }

  // const filterdata = (event) => {
  //   let newArr = [...data];

  //   let Option = event.target.value;
  //   if (Option !== "") {
  //     let filterArr = newArr.filter((elm) => {
  //       return Option === elm.department;
  //     });
  //     setData(filterArr);
  //   } else {
  //     setData(data);
  //   }
  // };

  return (
    <div className="App">
      {/* <Form pushindata={pushindata} setId={setId} id={id} /> */}
      {/* {data.length > 0 && <Table data={data} />} */}
      {/* filtering */}
      <select >
        <option value="">Filter</option>
        <option value="Technology Solutions">Technology Solutions</option>
        <option value="Digital Innovation">Digital Innovation</option>
        <option value="Information Systems">Information Systems</option>
        <option value="Software Engineering">Software Engineering</option>
      </select>

      {/* Sorting */}
      <select>
        <option value="">Sort</option>
        <option value="ascending">ascending</option>
        <option value="descending">descending</option>
      </select>
    </div>
  );
}

export default App;
