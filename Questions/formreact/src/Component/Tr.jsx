import React from 'react'

const Tr = ({obj}) => {
  return (
    <tr>
    <td>{obj.name}</td>
    <td>{obj.age}</td>
    <td>{obj.address}</td>
    <td>{obj.department}</td>
    <td>{obj.salary}</td>
    <td>{obj.marital_state}</td>
    <td>DELETE</td>
</tr>
  )
}

export default Tr
