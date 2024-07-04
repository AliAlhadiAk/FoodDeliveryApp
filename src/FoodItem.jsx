import React from 'react'

const FoodItem = ({id,name,price,description,image}) => {
  return (
    <div>
        <div>
            <img src={image} alt=''/>
        </div>
    </div>
  )
}

export default FoodItem