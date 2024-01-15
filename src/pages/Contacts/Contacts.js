import React from "react";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Contacts() {
    return (
        <div className="container mt-5">
            <h4><FontAwesomeIcon className="ml-2 mr-2" icon = {faInfoCircle}/>Contacts</h4>
            <br/>
            <p><b>Mobile:</b>(507) 321-83-87<br/>
            <b>E-mail:</b>kizilatesemrecan@gmail.com</p>
            <br/>
            <h6>Working time</h6>
            <p>The online store is open from 09:00 to 21:00 without breaks and weekends.<br/>
            Online orders are accepted as soon as possible.</p>
            <br/>
            <h6>Delivery</h6>
            <p>Delivery of orders come through courier service.</p>
        </div>
    )
}
export default Contacts