import React from 'react'

function SpecialItem(props) {
  return (
    <section className="basicflexcolumn specials-item">
        <img className="specials-img" src={props.img} alt={`${props.title}` }/>
        <h3> {props.title} </h3>
        <p> {props.description} </p>
        <button className='special-button'> Order a delivery </button>
    </section>

  )
}

export default SpecialItem