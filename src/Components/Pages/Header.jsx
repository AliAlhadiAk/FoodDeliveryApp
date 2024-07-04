import React from 'react'

const Header = () => {
  return (
    <div className='header relative'>
      <div className='absolute flex flex-col items-start header-contents '>
        <h2 className='font-bold text-2xl text-white h2 md:mt-3'>Order your favourite food here !!!</h2>
        <p className='text-white text-lg'>Choose from a diverse menu featuring delectable of dishes crafted with the finest</p>
        <button className='home-btn'>View Menu</button>
      </div>
    </div>
  )
}

export default Header
