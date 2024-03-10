import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function BookingFrom(props) {
  const navigate = useNavigate();
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [numGuest, setNumGuest] = useState("")
  const [occasion, setOccasion] = useState("")
  const [validate, setValidate] = useState({"Button": true, "Guest": false, "Date": true, "occasion": true, "time": false})
  
  function handleSubmit(e){
    e.preventDefault()
    const value = {date: date, time: time}
    props.change(value)
    if (props.submitForm({"date": date, "time": time, "numGuest": numGuest, "occasion": occasion}) === true){
      navigate("/bookingConfirmation")
    }
  }

  function dateChange(e){
    e.preventDefault()
    const value = {date: date, time: time}
    props.change(value)
    setDate(e.target.value)
    if (!e.target.value){
      setValidate({...validate, "Date": true, "Button": true})
    }
    else if(numGuest >=1 && numGuest <= 10 && occasion){
      setValidate({...validate, "Date": false, "Button": false})
    }else{
      setValidate({...validate, "Date": false})
    }
    
  }

  function validateGuests(e){
    setNumGuest(e.target.value)
    if ( e.target.value > 10 || e.target.value < 1){
      setValidate({...validate, "Button": true, "Guest": true})
    }else if(date && occasion){
      setValidate({...validate, "Button": false, "Guest": false})
    }else{
      setValidate({...validate, "Guest": false})
    }
  }
  function validateOccasion(e){
    setOccasion(e.target.value)
    console.log(occasion)
    if(!e.target.value){
      setValidate({...validate, "occasion": true, "Button": true})
    }else if(numGuest >=1 && numGuest <= 10 && date){
      setValidate({...validate, "occasion": false, "Button": false})
    }else{
      setValidate({...validate, "occasion": false})
    }
  }
  function validateTime(e){
    setTime(e.target.value)
    if(!e.target.value){
      setValidate({...validate, "time": true, "Button": true})
    }else if(numGuest >=1 && numGuest <= 10 && date){
      setValidate({...validate, "time": false, "Button": false})
    }else{
      setValidate({...validate, "time": false})
    }
  }
  return (
    <div className='form-container'>
    <h1 className='form-title'>Make Reservation</h1>
    <form className='form' onSubmit={handleSubmit}>
      
      <div className='field'> 
        <label htmlFor='res-date'>Choose date <sup>*</sup> </label>
        <input type="date" value={date} onChange={dateChange} id="res-date"/>
        {validate.Date && <p className='guestValidation'> Date is required</p>}
      </div>
    
      <div className='field'>
        <label htmlFor="res-time">Choose time<sup>*</sup> </label>
        <select id="res-time"  value={time} onChange={validateTime} >
            {props.availableTimes && props.availableTimes.map(prevval => <option> {prevval}</option> ) }
  
        </select>
        {validate.time && <p className='guestValidation'> You have to select a time</p>}
      </div>
      <div className='field'>
        <label htmlFor="guests">Number of guests<sup>*</sup> </label>
        <input type="number" placeholder="1" value={numGuest} onChange={validateGuests} min="1" max="10" id="guests"/>
        {validate.Guest && <p className='guestValidation'> Number of Guest must be between 1 and 10</p>}
      </div>
      

      <div className='field'>
      <label htmlFor="occasion">Occasion <sup>*</sup> </label>
      <select id="occasion" value={occasion} onChange={validateOccasion} >
          <option selected></option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option> Family Dinner</option>
          <option> Business</option>
      </select>
      {validate.occasion && <p className='guestValidation'> You have to pic an occasion</p>}
      </div>

      <input type="submit" className="submit-button" aria-label="Make Your Reservation" disabled={validate.Button} value={validate.Button ? "Finsih Form to Submit": "Make Your reservation"}/>
  </form>
  </div>
  )
}

export default BookingFrom
