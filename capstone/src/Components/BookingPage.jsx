import React from 'react';
import './Booking.css';
import BookingForm from './BookingForm.jsx';


function BookingPage(props) {
 
    return (
      <div>
        <BookingForm change={props.change} availableTimes={props.availableTimes} submitForm={props.submitForm}/>
      </div>
    );
}


export default BookingPage