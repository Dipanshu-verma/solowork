import React from 'react'
import { TABS } from '../redux/ActionsTypes'
import {useDispatch} from "react-redux"
import { toggleTab } from '../redux/actions/addnew'
const Tab = ({currentTab}) => {
  const dispatch = useDispatch()
  return (
    TABS.map((tab)=>{
       return <button className={currentTab===tab?'selectedtab buttontab':"buttontab"} onClick={()=> dispatch(toggleTab(tab))} >{tab}</button>
    })
  )
}

export default Tab
