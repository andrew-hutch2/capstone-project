import React from 'react'
import {useNavigate}  from 'react-router-dom';
function ConfirmedBooking() {
  const navigate = useNavigate();
  function handleNav(){
    navigate("/")
  }
  return (
    <div className='bookingconfirm'>
    <h1>Booking Confirmed</h1>

    <input type="submit" className='submit-button' onClick={handleNav} value="return to main menu" />
    </div>
  )
}

export default ConfirmedBooking