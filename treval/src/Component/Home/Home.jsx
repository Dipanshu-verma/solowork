import React from 'react'
import './home.css'
import video from '../../Assest/beach.mp4'
export default function Home() {
  return (
    <section className='home'>
      <div className='overlay'></div>
      <video src={video} muted autoPlay loop type="video/mp4"> </video>
      <div className='homeContent container'>
        <div className='textDiv'>
      <span className='smallText'>
        Our Packeges
      </span>
      <h1 className='homeTitle'>
      Search Your Holiday

      </h1>
        </div>
      </div>
    </section>
  )
}