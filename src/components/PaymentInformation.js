import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Helmet from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faInfoCircle, faUser, faClock, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "./Slider"
import Header from "./Header";
import Footer from "./Footer";
import ReservationDetail from "./ReservationDetail";

const EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const PHONE_REGEX = /^[0-9]{10,12}$/;
const PaymentInformation = () => {
    


    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <form onSubmit={''}>
                <div>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </form>
            
            <Footer></Footer>
        </div>
    )

}
export default PaymentInformation;