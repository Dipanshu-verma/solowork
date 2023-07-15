import React from 'react'
import './_sidebar.scss'
import {MdSubscriptions,MdExitToApp,MdThumbUp,MdHistory,MdLibraryBooks,MdHome,MdSentimentDissatisfied} from 'react-icons/md'
const Sidebar = ({sidebar,handl}) => {
  // let classes = sidebar? ' sidebar sidebarshow':'sidebar'
  return (
    <nav className= {sidebar? ' sidebar show':'sidebar'} onClick={()=>handl()}>
       <li>
        <MdHome size={23}/>
        <span>Home</span>
       </li>
       <li>
        <MdSubscriptions size={23}/>
        <span>Subcriptions</span>
       </li>
       <li>
        <MdThumbUp size={23}/>
        <span>Liked Video</span>
       </li>
       <li>
        <MdHistory size={23}/>
        <span>Histroy</span>
       </li>
       <li>
        <MdLibraryBooks size={23}/>
        <span>Library</span>
       </li>
       <li>
        <MdSentimentDissatisfied size={23}/>
        <span>i don't know</span>
       </li>
       <hr />
       <li>
        <MdExitToApp size={23}/>
        <span>Log out</span>
       </li>
       <hr />
    </nav>
  )
}

export default Sidebar