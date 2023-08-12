import React, { useEffect } from 'react'
import benner from '../../../benner.jpg'
import { distance } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../../Redux/actions/productaction'
const Home = () => {
const dispatch =  useDispatch();
useEffect(()=>{
 dispatch(getProduct())
},[dispatch])
 
const {products} = useSelector(state=>state)
 
  return (
    <div>
       <img src={benner} alt="" style={{height:"90vh",width:"100%",marginTop:"13vh"}}/>
       
        

    </div>
  )
}

export default Home
