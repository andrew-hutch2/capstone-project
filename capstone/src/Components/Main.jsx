import  { BrowserRouter, Route, Routes} from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';

import React, { useReducer} from 'react';
import ConfirmedBooking from './ConfirmedBooking';

function Main() {
    const seededRandom = function(seed) {
        const m = 2 ** 35 - 31;
        const a = 185852;
        let s = seed % m;
        return function () {
          return (s = (s * a) % m) / m;
        };
      };
      
       const fetchAPI = function(date){
        const result = [];
        const random = seededRandom(date);
      
        for (let i = 17; i <= 23; i++) {
         
          if (random() < 0.5) {
            //console.log(result)
            result.push(i + ":00");
          };
          if (random() < 0.5) {
            result.push(i + ":30");
          };
        };
        return result;
      };

       const submitAPI = function(formData){
        if (!true) console.log(formData);
        return true;
      };
    

    function submitForm(formData){
      console.log(formData)
      return submitAPI(formData)
    }
    function updateTimes(availableTimes, {date, time}){
        return fetchAPI(new Date())
    }
    function initializeTimes(){
      return fetchAPI(new Date()) 
    }   
    /*const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])*/
    const [availableTimes, dispatch] = useReducer(updateTimes,  initializeTimes())

    /*
    function handleState(val){
        console.log("This is working", val)
        const arrVal = availableTimes.indexOf(val)
        setAvailableTimes(prevVal=> prevVal.splice(arrVal,1))
        console.log("This is working", val)
        setAvailableTimes(prevVal => prevVal.filter(item => item !== val))
    }
    */
    return (
        <main>
          <BrowserRouter>
            <Routes>
                <Route index  element={<Homepage/>}></Route>
                <Route path="/"  element={<Homepage/>}></Route>
                <Route path="/booking" element={<BookingPage change={dispatch} availableTimes={availableTimes} submitForm={submitForm} />}></Route>
                <Route path="/bookingConfirmation" element={<ConfirmedBooking />}></Route>
            </Routes>
          </BrowserRouter>
        </main>
    );
  }
export default Main;

