import  { BrowserRouter, Route, Routes} from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';

function Main() {
    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route index  element={<Homepage/>}></Route>
                    <Route path="/"  element={<Homepage/>}></Route>
                    <Route path="/booking" element={<BookingPage />}></Route>
                </Routes>
            </BrowserRouter>
        </main>
    );
  }
export default Main;