import React from 'react'
import CustomerReview from './CustomerReview.jsx';
import bob from '../images/bob.jpg'
function CustomersSay() {
  return (
    <div className='testimonials'>
    <h1> Testimonials</h1>
    <div className='grid-adjustable-columns'>
        <CustomerReview rating="5" name="Bob" review="the food was great" img={bob}/>
        <CustomerReview rating="5" name="Bob" review="the food was great" img={bob}/>
        <CustomerReview rating="5" name="Bob" review="the food was great" img={bob}/>
    </div>
    </div>
  )
}

export default CustomersSay