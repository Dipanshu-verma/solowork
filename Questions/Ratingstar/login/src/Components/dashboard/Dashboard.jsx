import react from "react"
import CommentList from "./CommentList";
import {useState} from "react"
import styles from './Dashboard.module.css'

const data1 = [
  {
    id: 1,
    title: "Very Poor",
    color: "red",
    rating: 1,
  },
  {
    id: 2,
    title: "Poor",
    color: "yellow",
    rating: 2,
  },
  {
    id: 3,
    title: "good",
    color: "orange",
    rating: 3,
  },
  {
    id: 4,
    title: "Very Good",
    color: "lightgreen",
    rating: 4,
  },
  {
    id: 5,
    title: "Excellent",
    color: "green",
    rating: 5,
  },
];

const Dashboard = ({setLogin}) => {

const[data, setData] = useState(data1)



  return (
    <div className={styles.dashboard}>
      <h1>Rating - App</h1>
      
        <button onClick={()=>{setLogin(true)}}>Logout</button>
     

      <CommentList data={data} setData={setData}  />

    </div>
  );
};

export default Dashboard;
