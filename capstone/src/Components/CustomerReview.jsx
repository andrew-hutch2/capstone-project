import React from 'react'

function CustomerReview(props) {
  return (
    <div className='customerreview'>
        <h4>{props.rating} out of 5</h4>
        <div className='basicflex'>
            <img width="100" src={props.img} alt="customer"/>
            <p> {props.name}</p>
        </div>
        <p> {props.review} </p>
    </div>
  )
}

export default CustomerReview