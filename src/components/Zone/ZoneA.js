import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Zone.css';
import { url_api } from "../../API/api";
import { faCarRear,  faBicycle, faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import ReactJsAlert from "reactjs-alert";


function ZoneA() {
    const [shells, setShells] = useState([]);
   

    useEffect(() => {
        fetch(url_api + '/present_slot/findAllSlot/A')
            .then(response => response.json())
            .then((data) => {
                setShells(data)
                // console.log(data)
            })
            .catch(error => console.error(error));
    }, []);
    const residentSlot = shells.filter(slot => slot.id_slot.startsWith('R'));
    const customerSlot = shells.filter(slot => slot.id_slot.startsWith('C'));
    return (
        <div>
            <form onSubmit={'handleSubmit'}>
                <div className="zone-detail">
                    <p style={{ float: 'left' }}>
                        <h5 style={{ float: 'left', marginRight: '20px' }}>ZONE A</h5>
                        <Link style={{ float: 'left', marginRight: '20px' }} to={'/ZoneDetail/B'}>
                            <h5>ZONE B</h5>
                        </Link>
                        <Link style={{ float: 'left', marginRight: '20px' }} to={'/ZoneDetail/C'}>
                            <h5>ZONE C</h5>
                        </Link></p>
                    <p>
                        <h5>DESCRIPTION</h5>
                        <span>Zone A was built since 2020, with a capacity of up to 30 slots for all customers' vehicles. This area is close to building A of the apartment complex, so moving around is quite convenient.</span>
                        <br />
                        <span>Maximum parking time: 4 hours</span>
                    </p>
                    <p>
                        <h5>SPECIFICATIONS</h5>
                        <span>Maximum parking time: 4 hourss</span>
                    </p>
                    <p style={{ border: 'none' }}>
                        <h5>AVAILABILITY</h5>
                    </p>
                    <div class="table-responsive  align-items-center justify-content-center">
                        <div>Resident Area</div>
                        <table class="table border" style={{ boxShadow: 'rgba(0, 0, 0, 0.14) 0px 3px 8px' }}>
                            <tbody>
                                <tr class="border">
                                    {residentSlot.slice(0, 10).map(shell => (
                                        <td className="border" key={shell.id} style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>
                                            <FontAwesomeIcon style={{ fontSize: '16px', paddingRight: '30px' }} icon={faCarRear}></FontAwesomeIcon>
                                            {shell.id_slot}
                                        </td>
                                    ))}
                                </tr>
                                <tr class="border">
                                    {residentSlot.slice(10, 20).map(shell => (
                                        <td className="border" key={shell.id} style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>
                                            <FontAwesomeIcon style={{ fontSize: '16px', paddingRight: '30px' }} icon={faBicycle}></FontAwesomeIcon>
                                            {shell.id_slot}
                                        </td>
                                    ))}
                                </tr>
                                <tr class="border">

                                    {residentSlot.slice(20, 30).map(shell => (
                                        <td className="border" key={shell.id} style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>
                                            <FontAwesomeIcon style={{ fontSize: '16px', paddingRight: '30px' }} icon={faMotorcycle}></FontAwesomeIcon>
                                            {shell.id_slot}
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                        <div>Customer Area</div>
                        <table class="table border" style={{ boxShadow: 'rgba(0, 0, 0, 0.14) 0px 3px 8px' }}>
                            <tbody>
                                <tr class="border">
                                    {customerSlot.slice(0, 10).map(shell => (
                                        <td className="border" key={shell.id} style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>
                                            <FontAwesomeIcon style={{ fontSize: '16px', paddingRight: '30px' }} icon={faCarRear}></FontAwesomeIcon>
                                            {shell.id_slot}
                                        </td>
                                    ))}
                                </tr>
                                <tr class="border">
                                    {customerSlot.slice(10, 20).map(shell => (
                                        <td className="border" key={shell.id} style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>
                                            <FontAwesomeIcon style={{ fontSize: '16px', paddingRight: '30px' }} icon={faBicycle}></FontAwesomeIcon>
                                            {shell.id_slot}
                                        </td>
                                    ))}
                                </tr>
                                <tr class="border">
                                    {customerSlot.slice(20, 30).map(shell => (
                                        <td className="border" key={shell.id} style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>
                                            <FontAwesomeIcon style={{ fontSize: '16px', paddingRight: '30px' }} icon={faMotorcycle}></FontAwesomeIcon>
                                            {shell.id_slot}
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <button style={{ width: '30%', height: '50px', borderRadius: '5px', color: "#fff", marginLeft: '35%', backgroundColor: '#2DC98A', border: '#2DC98A' }} type="submit">Book now</button>
                </div>
            </form>
        </div>
    );
}
export default ZoneA;