import React from 'react';
import Navbar from './Navbar';
import "./Products.css";

const Products = () => {
  let product1 = {
    name: "Xiomi 12 pro",
    price: 13000
  }
  let product2 = {
    name: "HeadPhone",
    price: 5000
  }
  let product3 = {
    name: "Airdops 141",
    price: 1000
  }
  let product4 = {
    name: "10000mAh power bank",
    price: 4500
  }
  return (
    <>
      <Navbar />
      <div className='products'>
        <div className='products_card'>
          <img className='products_img' src="src/assets/xiomi11pro.jpg" alt="apple" />
          <h4 className='product_name'>Model:{product1.name}</h4>
          <p className='product_price'>Price($):{product1.price}</p>
        </div>
        <div className='products_card'>
          <img className='products_img' src="src/assets/headphone2.png" alt="apple" />
          <h4 className='product_name'>Model:{product2.name}</h4>
          <p className='product_price'>Price($):{product2.price}</p>
        </div>
        <div className='products_card'>
          <img className='products_img' src="src/assets/air.jpg" alt="apple" />
          <h4 className='product_name'>Model:{product3.name}</h4>
          <p className='product_price'>Price($):{product3.price}</p>
        </div>
        <div className='products_card'>
          <img className='products_img' src="src/assets/powerbank.jpg" height={138} width={138} alt="apple" />
          <h4 className='product_name'>Model:{product4.name}</h4>
          <p className='product_price'>Price($):{product4.price}</p>
        </div>
      </div>
    </>
  );
};

export default Products;