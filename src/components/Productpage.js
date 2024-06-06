import React from 'react'
import "../App.css";


const Productpage = () => {
  return (
    <div>
        <nav className='container'>
      <div className='logo'>
        <img src ="/images/brand_logo.jpg" alt='product-logo' />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
      <button >Login</button>
      </nav>
    </div>
  )
}

export default Productpage
