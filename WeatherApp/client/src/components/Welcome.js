import React from 'react'
import vecteezy from '../videos/vecteezy.mp4';


const Welcome = () => {
  return (
      <div className='welcomeVideo'>
      
          <video width={1750} height={1500} controls>
              <source src={vecteezy} type="video/mp4" />
          </video>
      </div>
  )
}

export default Welcome