import React from 'react'
import './main.css'
import "./main.scss"

import img1 from "../../Assest/img1.jpg"
import img2 from "../../Assest/img2.jpg"
import img3 from "../../Assest/img3.jpg"
import img4 from "../../Assest/img4.jpg"
import img5 from "../../Assest/img5.jpg"
import img6 from "../../Assest/img6.jpg"
// import "../../App.css"
import { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'
import Card from '../Common/Card'
const data = [
  {
    id: 1,
    imgsrc: img1,
    destTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'Bali is an Indonesian Island and one of the best holiday destinations in the Indonesian archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches.'
  },
  {
    id: 2,
    imgsrc: img2,
    destTitle: 'Santorini',
    location: 'Greece',
    grade: 'ROMANTIC GETAWAY',
    fees: '$800',
    description: 'Santorini is a picturesque Greek island known for its stunning sunsets, white-washed buildings, and blue-domed churches. It offers breathtaking views of the Aegean Sea and boasts a rich history and vibrant local culture.'
  },
  {
    id: 3,
    imgsrc: img3,
    destTitle: 'Tokyo',
    location: 'Japan',
    grade: 'URBAN ADVENTURE',
    fees: '$900',
    description: 'Tokyo is a bustling metropolis that combines modern technology with traditional Japanese culture. From neon-lit streets and skyscrapers to historic temples and cherry blossom gardens, Tokyo offers a unique blend of old and new.'
  },
  {
    id: 4,
    imgsrc: img4,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'ADVENTURE TRAVEL',
    fees: '$1200',
    description: 'Machu Picchu is an ancient Inca citadel located high in the Andes Mountains of Peru. It is a UNESCO World Heritage site and offers breathtaking views of the surrounding mountains and valleys. Trekking to Machu Picchu is a popular adventure for travelers.'
  },
  {
    id: 5,
    imgsrc: img5,
    destTitle: 'Paris',
    location: 'France',
    grade: 'CITY EXPLORATION',
    fees: '$700',
    description: 'Paris, the capital of France, is renowned for its art, fashion, cuisine, and iconic landmarks like the Eiffel Tower and Louvre Museum. With its charming streets, sidewalk cafes, and world-class shopping, Paris is a dream destination for many.'
  },
  {
    id: 6,
    imgsrc: img6,
    destTitle: 'Maui',
    location: 'Hawaii, USA',
    grade: 'BEACH RETREAT',
    fees: '$1000',
    description: 'Maui is a tropical paradise in the Hawaiian archipelago known for its stunning beaches, lush landscapes, and diverse marine life. Visitors can enjoy activities such as snorkeling, surfing, and hiking, or simply relax and soak up the island vibes.'
  }
];

export default function Main() {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
     <section className='main container section'>
          <div className='secTitle'>
           <h3 data-aos="fade-right" className='title'>
              Most Visited destinations
           </h3>
          </div>


          <div className='secContent grid'>
              
            {
              data.map((elm)=>{
                return(
                <Card key={elm.id} image={elm.imgsrc} destTitle={elm.destTitle} location={elm.location} grade={elm.grade} fees={elm.fees} description={elm.description} />
                )
              })
            }


          </div>
     </section>
  )
}