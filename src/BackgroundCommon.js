import { render } from "@testing-library/react"
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faInfoCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
class BackgroundCommon extends Component {
    render(){
    return(

        <div className="container-background">
            <img style={{ position: "absolute", zIndex: "10", marginLeft: "-200px", marginTop: "110px" }} src="man.png"></img>
        </div>

         
       

    )
}
    
}

export default BackgroundCommon;