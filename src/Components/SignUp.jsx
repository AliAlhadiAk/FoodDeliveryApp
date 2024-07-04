import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center'>
      <div className='bg-white p-8 relative rounded-lg max-w-md w-full shadow-2xl'>
        <h1 className='text-3xl font-bold mb-6 text-center'>Sign In</h1>
        <form className='flex flex-col space-y-4'>
       
          <input
            type='email'
            placeholder='Email'
            className='border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
          />
          <input
            type='password'
            placeholder='Password'
            className='border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
          />
          <div className='flex items-center'>
            <input
              type='checkbox'
              id='myCheckbox'
              name='myCheckbox'
              className='hidden focus:border-orange-400'
            />
            <label
              htmlFor='myCheckbox'
              className='ml-2 text-gray-700 text-sm'
            >
              By continuing, I agree to the privacy policy
            </label>
          </div>
          <button
            type='submit'
            className='bg-orange-500 text-white py-2 rounded-md hover:bg-orange-700 transition duration-300'
          >
            Sign Up
          </button>
        </form>
        <p className='mt-4 text-sm text-gray-600 text-center'>
          Dont have an account?{' '}
          <Link to='/login' className='text-orange-500'>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
