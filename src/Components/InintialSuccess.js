import { React, useEffect, useState } from "react";
import "./../App.css";

export default function InintialSuccess() {
  const [isBooked, setisBooked] = useState({});
  //   const successID = {
  //     HostelName: props.hostelName,
  //     Floorname: props.floorName,
  //     roomNumber: props.floorSeleceted,
  //   };

  var successDetails;
  // = JSON.parse(localStorage.getItem("successID"));
  // setisBooked(successDetails);
  useEffect(() => {
    successDetails = JSON.parse(localStorage.getItem("successID"));
    console.log(successDetails);
    setisBooked(successDetails);
    console.log(isBooked.name);
  }, []);

  return (
    <>
      <div className="succesreportBG">
        <div className="showmsg"></div>
        <h4 className="sumsg">Success</h4>
        <h6 className="sumsg">You room has been booked</h6>
        <h5 className="sumsg">Your Room details are as follows:</h5>
        <div className="roomdetails">
          <h6>
            Hostel Name: <span className="details">{isBooked.HostelName}</span>
          </h6>
          <h6>
            Floor Number:<span className="details"> {isBooked.Floorname}</span>
          </h6>
          <h6>
            Room Number : <span className="details">{isBooked.roomNumber}</span>
          </h6>
        </div>

        {/* <h3>Hostel name is : {successDetails.HostelName} </h3> */}
      </div>
    </>
  );
}
