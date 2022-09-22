import React from 'react'
import calendar from '../images/calendar.png' 
const Header = (props) => {
  return (
    <header>
    <img src={calendar} alt="Calendar Star Logo" />
      <h1>{ props.text }</h1>
  </header>

  )
}

export default Header