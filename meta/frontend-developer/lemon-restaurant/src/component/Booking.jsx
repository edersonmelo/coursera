// src/Booking.js
import React from 'react';
import './Booking.css'; // Add your styles here

const Booking = () => {
    return (
        <section className="booking" id="booking">
            <h2>Book a Table</h2>
            <form action="#" method="post">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" required />

                <label htmlFor="time">Time:</label>
                <input type="time" id="time" name="time" required />

                <label htmlFor="people">Number of People:</label>
                <input type="number" id="people" name="people" required min="1" />

                <button type="submit">Book Now</button>
            </form>
        </section>
    );
};

export default Booking;
