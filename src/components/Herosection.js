import React from 'react'
import "../App.css";


const Herosection = () => {
  return (
    <div className='hero container'>
      <div className='hero-content'>
<h1>YOUR FEET DESERVE THE BEST</h1>
<p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p> 
      <div className='hero-btn'>
      <button>Shop Now</button>
      <button className='category'>Category</button>
      </div>
      <div className='shopping'>
      <p>Also Available On</p>
      <div className='brand-icons'>
      <img src='/images/flipkart.png' alt='flipkart' />
      <img src='/images/amazon.png' alt='amazon' />
      </div>
      </div>
      </div>
      <div>
<img src='/images/shoe_image.jpg' alt='shoe' />
      </div>
    </div>
  )
}

export default Herosection
