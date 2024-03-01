import React from 'react'
import CustomerReview from './CustomerReview.jsx';
import bob from '../images/bob.jpg'
function CustomersSay() {
  return (
    <div className='testimonials'>
    <h1> Testimonials</h1>
    <div className='grid-adjustable-columns customerreview-group'>
        <CustomerReview rating="5" name="Bob" review="the food was great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." img={bob}/>
        <CustomerReview rating="5" name="Bob" review="the food was great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." img={bob}/>
        <CustomerReview rating="5" name="Bob" review="the food was great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." img={bob}/>
    </div>
    </div>
  )
}

export default CustomersSay