import  { BrowserRouter, Route, Routes} from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';

import React, {useReducer} from 'react';
function Main() {
    function updateTimes(availableTimes, {date, time}){
        console.log(date, time)
        return availableTimes
    }
    function initializeTimes(){
        return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
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
                    <Route path="/booking" element={<BookingPage change={dispatch} availableTimes={availableTimes} />}></Route>
                </Routes>
            </BrowserRouter>
        </main>
    );
  }
export default Main;