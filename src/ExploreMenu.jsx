import React from 'react'
import { menu_list } from './Components/assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu flex flex-col gap-5' id='explore-menu'>
      <h2 className='text-gray-800 font-semibold'>Explore our menu</h2>
      <p className='menu-text'>Embark on a culinary journey through our diverse menu offerings, where every dish tells a story of flavor and innovation.</p>
      <div className='flex justify-between items-center gap-8 text-center my-5 mx-0 overflow-x-scroll explore-menu-list'>
        {menu_list.map((item,index)=>(
            <div onClick={()=> setCategory(prev=>prev == item.menu_name?"All":item.menu_name)}key={index} className=''>
                <img className={category == item.menu_name?"active-menu img-menu":"img-menu"} src={item.menu_image} alt=''/>
                <p className=" mt-3 text-black p-menu">{item.menu_name}</p>
            </div>
        ))}
      </div>
      <hr className='my-3 mx-0 h-1 bg-gray-300 border-none'/>
    </div>
  )
}

export default ExploreMenu
