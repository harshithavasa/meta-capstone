import React, { useReducer, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Booking from "./booking";
import ConfirmedBooking from "./confirmed_booking";
import Header from "./header";

const Main = () => {

    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchAPI = function(date){
        let result = [];
        let random = seededRandom(date.getDate());

        for( let i= 11; i <= 23;i++){
            if(random() < 0.5){
                result.push(i + ':00');
            }
            if(random() < 0.5){
                result.push(i + ':30');
            }
        }
        return result;
    };
    const submitAPI = function(formData) {
        return true;
    };

    const initialState = {availableTimes: fetchAPI(new Date())}
    const [state, dispatch] = useReducer(updateTime, initialState);

    function updateTime(state, date) {
        return {availableTimes: fetchAPI(new Date(date))}
    }

    const navigate = useNavigate();
    function submitForm(formData) {
        if(submitAPI(formData)){
            navigate('/confirmed');
        }
    }

    return(
        <main>
        <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/booking" element={<Booking availableTime={state} dispatch={dispatch} submitForm={submitForm}/>} />
            <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
        </main>
    )
}

export default Main;