import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import { BrowserRouter, Route, Routes } from "react-router-dom";

test('Renders the BookingForm heading', () => {
    render(
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<BookingForm />}></Route>
            </Routes>
        </BrowserRouter>
        
        );
    const headingElement = screen.getByText(/Make Reservation/);
    expect(headingElement).toBeInTheDocument();
})