import React, { useState } from "react";
import bookSeats from "./component/BookSeats";
import { bookedSeats } from "./component/BookSeats";

const BookForm = ({ setShowList }) => {
  const availableSeats = 80 - bookedSeats.size;
  const [name, setName] = useState("");
  const [seats, setSeats] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = () => {
    if (!seats)
      return setError("please enter number of seats you wants to Book");
    if (seats < 0) return setError("Enter a valid Number");
    if (seats > availableSeats)
      return setError("value exceeds availbale seats");

    let x = bookSeats(Number(seats));
    console.log(x);
    setShowList(true);
    setError("");
  };
  return (
    <div className="form">
      <h1>Seat Booking App</h1>
      <p>Enter You Name:</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Enter Number of Seats:</p>
      <input
        type="number"
        value={seats}
        onChange={(e) => setSeats(e.target.value)}
        min="0"
      />
      <br />
      <small>{error}</small>
      <br />
      <p>Available Seats : {availableSeats}</p>
      <br />
      <button onClick={handleSubmit}>Book Tickets</button>
    </div>
  );
};

export default BookForm;
