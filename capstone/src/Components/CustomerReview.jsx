import React from 'react'

function CustomerReview(props) {
  return (
    <div className='customerreview'>
        <h3>{props.rating} out of 5 ⭐</h3>
        <div className='basicflex img-name'>
            <img className="customerreview-img" src={props.img} alt="customer"/>
            <h4 className='customer-name'> {props.name}</h4>
        </div>
        <p> {props.review} </p>
    </div>
  )
}

export default CustomerReview