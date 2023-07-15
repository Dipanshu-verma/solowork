import React from 'react'
import { Container } from 'react-bootstrap';
import Header from './Components/header/Header'
import Sidebar from './Components/sidebar/Sidebar'
import HomeScreen from './Components/Screens/homescreen/HomeScreen'
import './_app.scss'
import { useState } from 'react';
const App = () => {
  const[sidebar,toggleSidebar] = useState(false);

  const handl = ()=>{
    toggleSidebar(!sidebar)
  }
  return (
    <>
       <Header handl={handl}/>
       <div className="app__container border border-info">
       <Sidebar sidebar={sidebar}  handl={handl}/>
           <Container fluid className="app__main border border-warning">
            <HomeScreen/>
           </Container>
       </div>

    </>
  )
}

export default App
