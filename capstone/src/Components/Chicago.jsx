import React from 'react'
import fish from '../images/fish.jpg';
import bread from '../images/sandwiches4.jpg';
function Chicago() {
  return (
    <div className='grid-adjustable-columns chicago'>
      <section className='chicago-text'>
        <h1> Little Lemon </h1>
        <h4> Chicago</h4>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
      </section>
      <section className="chicagoimgs">
        <img className="chicago-img1"  src={fish} alt="fish"></img>
        <img className="chicago-img2"  src={bread} alt="bread"></img>
      </section>
    </div>
  )
}

export default Chicago