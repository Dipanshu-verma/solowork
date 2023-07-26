import React from 'react'
import {HiOutlineLocationMarker} from "react-icons/hi"
import {HiOutlineClipboardCheck} from "react-icons/hi"
export default function Card({image,destTitle,location,grade,fees,description}) {
  return (
    <div data-aos="fade-up" className='singleDestination'>
    <div className='imageDiv'>
      <img src={image} alt={destTitle}/>
    </div>
    <div className='cardInfo'>
         <h4 className='destTitle'>{destTitle}</h4>
         <span className='continent flex'>
          <HiOutlineLocationMarker className='icon'/>
          <span className='name'>{location}</span>
         </span>
         
         <div className='fees flex'>
           <div className='grade' >
                <span> {grade} <small>+1</small></span>
           </div>
           <div className='price'>
             <h5>{fees}</h5>
           </div>
         </div>
         <div className='desc'>
           <p>{description}</p>
           </div>
          <button className='btn flex'>
            BOOK NOW  <HiOutlineClipboardCheck className='icon'/>
          </button>

    </div>
</div>
  )
}
