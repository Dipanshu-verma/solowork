import React from "react";
import "./_header.scss";
 
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import {IoMdNotifications} from "react-icons/io";
import {MdApps} from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = ({handl}) => {


  const[input,setInput]  = useState('');
  const naviget  = useNavigate();
  function handleSearch(e){
    e.preventDefault();
naviget(`/search/${input}`)
  }
  
  const {intial} =  useSelector(state=>state.auth);
  
  const photourl =  intial?.user?.photoURL;
  
  return (
    <div className="border border-dark header">
      <FaBars className="header__menu" size={26} onClick={()=>{handl()}} />

      <img
        src="https://pngimg.com/uploads/youtube/youtube_PNG2.png"
        alt=""
        className="header__logo"
      />

      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Search" value={input}  onChange={(e)=>setInput(e.target.value)} />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="header__icons">
        <IoMdNotifications size={28}/>
        <MdApps size={28}/>
        <img src={photourl} alt="" />
      </div>
    </div>
  );
};

export default Header;
