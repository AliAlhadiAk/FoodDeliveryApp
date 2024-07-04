import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { assets } from './Components/assets/assets';
import { incrementItemCount, decrementItemCount } from './FoodSlice';
import { Link } from 'react-router-dom';

const FoodDisplay = () => {
  const food = useSelector((state) => state.foodslice.food);
  const itemCount = useSelector((state) => state.foodslice.itemCount);
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch(incrementItemCount({ id }));
  };

  const handleDecrement = (id) => {
    dispatch(decrementItemCount({ id }));
  };

  return (
    <div className='mt-8'>
      <h2 className='text-4xl font-bold'>Top dishes near you</h2>
      <div className='food-display-list'>
        {food.map((item, index) => (
          <Link to={`/food/${index}`} key={item.id} className='w-full m-auto rounded-1xl food-item'>
            <div className='relative'>
              <img className='food-item-img' src={item.image} alt={item.name} />
              {(!itemCount[index] || itemCount[index] === 0) ? (
                <img loading='lazy' onClick={() => handleIncrement(index)} className='w-9 absolute bottom-4 right-4 cursor-pointer rounded-3xl' src={assets.add_icon_white} alt='add' />
              ) : (
                <div className='absolute bottom-4 right-4 flex items-center gap-3 p-2 bg-white rounded-3xl'>
                  <img onClick={() => handleDecrement(index)} src={assets.remove_icon_red} alt='remove' />
                  <p>{itemCount[index]}</p>
                  <img onClick={() => handleIncrement(index)} src={assets.add_icon_green} alt='add' />
                </div>
              )}
            </div>
            <div className='p-5'>
              <div className='flex justify-between items-center mt-3'>
                <p className='text-xl font-semibold'>{item.name}</p>
                {/* Assuming assets.rating_starts is a valid image */}
                <img className='w-18' src={assets.rating_starts} alt='rating' />
              </div>
              <p className='text-black text-lg'>{item.description}</p>
              <p className='text-red-500 font-semibold text-md my-3 mx-0'>${item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
