import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Components/header/Header";
import Sidebar from "./Components/sidebar/Sidebar";
import HomeScreen from "./Components/Screens/homescreen/HomeScreen";
import "./_app.scss";
import { useState } from "react";
import LoginScreen from "./Components/LoginScreen/LoginScreen";
import { Routes, Route, Navigate } from "react-router-dom";

const Leyout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handl = () => {
    toggleSidebar(!sidebar);
  };
  return (
    <>
      <Header handl={handl} />
      <div className="app__container border">
        <Sidebar sidebar={sidebar} handl={handl} />
        <Container>{children}</Container>
      </div>
    </>
  );
};

 
const App = () => {
  return (
    <Routes>
      <Route path="/"  element={ <Leyout><HomeScreen/></Leyout> } />
      <Route path="/auth"  element={<LoginScreen/>}/>
      <Route path="/search"  element={   <Leyout><h1>Search is working</h1></Leyout>  }/>
      <Route path="*"  element={<Navigate to='/'/>} />
      
    </Routes>
  );
};

export default App;
