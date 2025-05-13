import React from "react";
import BookingForm from "./booking_form";
import { useState } from "react";

const Booking = (props) => {
    return(
        <BookingForm availableTime={props.availableTime} dispatch={props.dispatch} subnitForm={props.submitForm}/>
    )
}

export default Booking;