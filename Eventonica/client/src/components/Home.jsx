import React from 'react'
import Header from './Header';
import Footer from './Footer'
import calendarDoodle from '../images/calendarDoodle.webp'
const Home = () => {
  return (
      <div className='homePage'>
      <Header text="Eventonica" />
     
    <div className='container-home'>
      <img src={calendarDoodle} alt="illustration calendar" />
        
      </div>
      <Footer />
      </div>
  )
}

export default Home