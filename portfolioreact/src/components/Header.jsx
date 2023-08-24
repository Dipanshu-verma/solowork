import React from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const handleMenuClick = () => {
    document.querySelector(".navbar").classList.add("navleft");
   document.querySelector(".fa-bars").classList.add("dotlose")
    document.querySelector(".fa-xmark").classList.add("crosshow")
  };

  const handleCrossClick = () => {
    document.querySelector(".navbar").classList.remove("navleft");
    document.querySelector(".fa-xmark").classList.remove("crosshow")
    document.querySelector(".fa-bars").classList.remove("dotlose")
  };

  const handleNavbarClick = () => {
   document.querySelector(".navbar").classList.remove("navleft");
  document.querySelector(".fa-xmark").classList.remove("crosshow")
  document.querySelector(".fa-bars").classList.remove("dotlose")
  };

  return (
    <header className="header">
      <a href="#" className="logo">Portfo<span id="io">lio.</span></a>
      <FiMenu className="fa-solid fa-bars fa-xl" onClick={handleMenuClick} />
      <FiX className="fa-solid fa-xmark" onClick={handleCrossClick} />
      <nav className="navbar" onClick={handleNavbarClick}>
        <a href="#home" style={{ '--i': 1 }}>Home</a>
        <a href="#about" style={{ '--i': 2 }}>About</a>
        <a href="#skill" style={{ '--i': 3 }}>Skills</a>
        <a href="#project" style={{ '--i': 4 }}>Projects</a>
        <a href="#Contact" style={{ '--i': 5 }}>Contact</a>
        <a href={require("./../Assets/Dipanshu verma.pdf")} target="_blank" style={{ '--i': 6 }}>Resume</a>
      </nav>
    </header>
  );
}

export default Header;
