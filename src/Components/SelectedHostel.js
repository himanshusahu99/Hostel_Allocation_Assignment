import { React, useState } from "react";
import "./../App.css";

import ChooseFloor from "./ChooseFloor";

export default function SelectedHostel(props) {
  const hostelName = [
    "B1",
    "B2",
    "B3",
    "B4",
    "B5",
    "B6",
    "B7",
    "B8",
    "B9",
    "B10",
  ];
  const [yourFloor, setYourFloor] = useState(null);
  const [selectedHostelName, SetselectedHostelName] = useState(null);

  function buttinClicked(e) {
    setYourFloor(e.target.innerHTML);
    console.log("you are going to ", e.target.innerHTML);
    SetselectedHostelName(e.target.innerHTML);
  }

  return (
    <>
      {/* <div>You are in the {props.typeOfHostle}</div>; */}
      {yourFloor ? (
        <ChooseFloor youFloor={yourFloor} hostelName={selectedHostelName} />
      ) : (
        <div className="selectedHostleBG">
          <h6 className="selectHostleH6">Choose Your Hostel</h6>
          <div className="hostelNameDiv">
            {hostelName.map((element) => {
              return (
                <>
                  <p
                    id={element}
                    value={element}
                    className="hostelNameChild"
                    onClick={buttinClicked}
                  >
                    {element}
                  </p>
                </>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
