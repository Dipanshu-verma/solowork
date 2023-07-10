import React from "react";
import "./footer.css";
import "../../App.css";
import video from "../../Assest/video2.mp4";
import { FiSend } from "react-icons/fi";
import "./footer.scss";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
import { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'


 
export default function Footer() {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} muted autoPlay loop type="video/mp4">
          {" "}
        </video>
      </div>
      <div className="secContent container">
        <div data-aos="fade-up" className="contatDiv flex">
          <div className="text">
            <small>KEEP IN TOUC</small>
            <h2>Treval with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder="Enter Email Address" />
            <button data-aos="fade-up" className="btn flex">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div  className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon" />
                Treval
              </a>
            </div>
            <div  data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate a unde sit, incidunt earum distinctio, aut autem
              tenetur recusandae iure aperiam in quia!
            </div>
            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiFillInstagram className="icon" />
              <AiFillYoutube className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
          {/* group one  */}
            <div data-aos="fade-up"  data-aos-duration="3000"  className="linkGroup ">
              <span className="groupTitle">OUR AGENCY</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>
            {/* group two  */}
            <div data-aos="fade-up"  data-aos-duration="4000"  className="linkGroup ">
              <span className="groupTitle">Patners</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
              Booking
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Hostelworld
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
              Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                TripAdvisor
              </li>
            </div>
             {/* group three  */}
             <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup ">
              <span className="groupTitle"> Last Minute</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
             Landon
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                California
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
             Indonesia
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Europe
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
            Oceania
              </li>
            </div>



          </div>

          <div className="footerDiv flex">
               <small>BEST TREVAL WEBSITE THEME </small>
               <small> COPYRIGHTS RESERVED - ISRATECH 2022 </small>
          </div>
        </div>
      </div>
    </section>
  );
}
