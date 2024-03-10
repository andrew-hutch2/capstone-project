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


test("test numGuest input", () => {
    render(
        <BrowserRouter>
        <Routes>
            <Route path="*" element={<BookingForm />}></Route>
        </Routes>
        </BrowserRouter>
    );
    const userInput = screen.getByLabelText(/Number of guests/);
    expect(userInput).toBeInTheDocument();
})


test("test date input", () => {
    render(
        <BrowserRouter>
        <Routes>
            <Route path="*" element={<BookingForm />}></Route>
        </Routes>
        </BrowserRouter>
    );
    const userInput = screen.getByLabelText(/Choose date/);
    expect(userInput).toBeInTheDocument();
})

test("test time input", () => {
    render(
        <BrowserRouter>
        <Routes>
            <Route path="*" element={<BookingForm />}></Route>
        </Routes>
        </BrowserRouter>
    );
    const userInput = screen.getByLabelText(/Choose time/);
    expect(userInput).toBeInTheDocument();
})

test("test occasion input", () => {
    render(
        <BrowserRouter>
        <Routes>
            <Route path="*" element={<BookingForm />}></Route>
        </Routes>
        </BrowserRouter>
    );
    const userInput = screen.getByLabelText(/Occasion/);
    expect(userInput).toBeInTheDocument();
})

test("button is disabled at start", ()=> {
    render(
        <BrowserRouter>
        <Routes>
            <Route path="*" element={<BookingForm />}></Route>
        </Routes>
        </BrowserRouter>
    );
    const buttonelement = screen.getByDisplayValue(/Make Your reservation/);
    expect(buttonelement).toBeDisabled();
})