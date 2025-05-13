import React from "react";
import { useState } from "react";

const BookingForm = (props) => {
    const [seating, setSeating] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [request, setRequests] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
}

const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
   }

return(
    <header>
        <section>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label htmlFor="book-seating">Seating : </label>
                        <select id="book-seating" key={seating} value={seating} onChange={(e) => setSeating(e.target.value)} required>
                            <option value="">Select Option</option>
                            <option>Food</option>
                            <option>Drinks</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="book-date"> Date : </label>
                        <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required/>
                    </div>
                    <div>
                        <label htmlFor="book-time">Time :</label>
                        <select id="book-time" value={time} onChange={(e) => setTime(e.target.value)} required>
                            <option value="">Select Time:</option>
                            {props.availableTime.availableTime.map(availableTime => {return <option key={availableTime}>{availableTime}</option>})}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="book-guests">Guests:</label>
                        <input id="book-guests" min="1" value={guests} onChange={(e) => {setGuests(e.target.value)}} type="number" placeholder={0} max={10} required></input>            
                    </div>
                    <div>
                        <label htmlFor="book-request">Any Requests:</label>
                        <textarea value={request} onChange={(e) => {setRequests(e.target.value)}} id="book-request" placeholder="Any Requests?" rows={4} cols={50}></textarea>
                    </div>
                    <div>
                        <input aria-label="On Click" type={"submit"} value={"Make Your Reservation"}></input>
                    </div>
                </fieldset>
            </form>
        </section>
    </header>
    );
};

export default BookingForm;