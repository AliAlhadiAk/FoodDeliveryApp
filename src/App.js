import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import Cart from './Components/Cart';
import PlaceOrder from './Components/PlaceOrder';
import Login from './Components/Login';
import FoodDetails from './FoodDetails';
import SignUp from './Components/SignUp';
import ContactUsPage from './ContactUs';
import RequireAuth from './Components/RequireAuth';


const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className='App w-4/5 m-auto'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
    
          <Route path='/' element={<Home/>} />
          
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/food/:id' element={<FoodDetails />} />
         
        <Route path='/signup' element={<SignUp />} />
        
        <Route path='/contactus' element={<ContactUsPage/>} />
      
    
      
      </Routes>
     
    </div>
  );
};

export default App;
