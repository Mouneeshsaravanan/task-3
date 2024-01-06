import React from 'react';
import Navbar from './Navbar';
import './Account.css'

const Account = () => {
  return (
    <div className='cart'>
      <Navbar /> 
      <h2 className='habout'>About Us</h2>
      <p className='hp'>
        We are dedicated to providing high-quality products and a delightful shopping experience.
      </p>
      <p className='hp'>
  
        Our mission is to make online shopping convenient, enjoyable, and secure for our customers.
      </p>
    </div>
  );
};

export default Account;