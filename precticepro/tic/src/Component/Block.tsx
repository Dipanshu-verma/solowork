import React from 'react'

interface blockprops {
  value?: String | null;
  onClick?: ()=> void
}

const Block: React.FC <blockprops> = ({ value,onClick }) => {


  return (
    <div style={{color:value=='X'?'Black':'red'}} className='border font-bold cursor-pointer w-[100px] h-[100px] text-2xl flex justify-center items-center' onClick={onClick} >
      {value}
    </div>
  )
}

export default Block