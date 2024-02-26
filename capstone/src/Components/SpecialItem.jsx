import React from 'react'

function SpecialItem(props) {
  return (
    <section className="basicflexcolumn specials-item">
        <img width="300" src={props.img} alt={`${props.title}` }/>
        <h1> {props.title} </h1>
        <p> {props.description} </p>
        <button> Order a delivery </button>
      </section>

  )
}

export default SpecialItem