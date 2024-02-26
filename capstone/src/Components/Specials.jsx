import React from 'react';
import salad from '../images/salad.jpg';
import bread from '../images/bread.jpg';
import pasta from '../images/pasta.jpg';
import SpecialItem from './SpecialItem.jsx'

function Specials() {
  return (
    <div className='specials'>
      <div className='onlinemenu'>
        <button className='onlinemenu-button'>Online Menu</button>
      </div>
    <div className='grid-adjustable-columns '>
      <SpecialItem title="Title of Dish"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      img={salad}
      />
      <SpecialItem title="Title of Dish"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      img={bread}
      />
      <SpecialItem title="Title of Dish"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      img={pasta}
      />
    </div>
    </div>
  )
}

export default Specials