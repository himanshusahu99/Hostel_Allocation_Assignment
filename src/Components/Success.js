import { React, useEffect, useState } from "react";
import "./../App.css";

export default function Success(props) {
  const [isBooked, setisBooked] = useState({});

  const successID = {
    HostelName: props.hostelName,
    Floorname: props.floorName,
    roomNumber: props.floorSeleceted,
  };

  localStorage.setItem("successID", JSON.stringify(successID));

  //   useEffect(() => {
  //     let successDetails = JSON.parse(localStorage.getItem("successID"));
  //     setisBooked(successDetails);
  //   }, []);

  return (
    <>
      <div className="succesreportBG">
        <h4 className="sumsg">Success</h4>
        <div className="sumsg">You room has been booked</div>
        <h5 className="sumsg">Your Room details are as follows:</h5>
        <div className="roomdetails">
          <h6>
            Hostel Name : <span className="details">{props.hostelName}</span>
          </h6>
          <h6>
            Floor Number: <span className="details">{props.floorName}</span>
          </h6>
          <h6>
            Room Number :{" "}
            <span className="details">{props.floorSeleceted}</span>
          </h6>
          {/* <h3>Hostel name is : {isBooked.HostelName} </h3> */}
        </div>
      </div>
    </>
  );
}
