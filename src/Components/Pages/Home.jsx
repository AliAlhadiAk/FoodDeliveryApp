import React, { useState } from 'react'
import Header from './Header'
import ExploreMenu from '../../ExploreMenu'
import FoodDisplay from '../../FoodDisplay';

const Home = () => {
    const [category,setCategory] = useState("All");
  return (

    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay/>
    </div>
  )
}

export default Home