import React, {useState} from 'react'

function BookingFrom(props) {
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [numGuest, setNumGuest] = useState("")
  const [occasion, setOccasion] = useState("")
  function handleSubmit(e){
    e.preventDefault()
    const value = {date: date, time: time}
    props.change(value)
    
  }

  function dateChange(e){
    e.preventDefault()
    const value = {date: date, time: time}
    props.change(value)
    
    setDate(e.target.value)
    
  }
  return (
    <div className='form-container'>
    <h1> Make Reservation</h1>
    <form className='form' onSubmit={handleSubmit}>
      
      <div className='field'> 
        <label htmlFor='res-date'>Choose date: </label>
        <input type="date" value={date} onChange={dateChange} id="res-date"/>
      </div>
    
      <div className='field'>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time "  value={time} onChange={(e) => setTime(e.target.value)} >
            {props.availableTimes.map(prevval => <option> {prevval}</option>)}
        </select>
      </div>
      <div className='field'>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" value={numGuest} onChange={(e) => setNumGuest(e.target.value)} min="1" max="10" id="guests"/>
      </div>

      <div className='field'>
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
          <option>Birthday</option>
          <option>Anniversary</option>
      </select>
      </div>

      <input type="submit" value="Make Your reservation"/>
  </form>
  </div>
  )
}

export default BookingFrom