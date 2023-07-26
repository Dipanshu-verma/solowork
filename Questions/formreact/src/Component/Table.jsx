import React from 'react'
import Tr from './Tr'
const Table = ({data}) => {
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Marital State</th>

            </tr>
        </thead>
        <tbody>
        {
            data.map((obj)=>{
               return <Tr key={obj.id} obj={obj}/>
            })
        }
          
        </tbody>
      </table>
    </div>
  )
}

export default Table
