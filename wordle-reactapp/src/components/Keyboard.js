import React from 'react'

function Keyboard() {
    // array of the letters for the keyboard
    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
      <div className='keyboard'>
          {/** how the keyboard will be structured */}
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
    </div>
  )
}

export default Keyboard;