import { React, useState } from "react";
import "./../App.css";
import Success from "./Success";

const hostels = [
  {
    name: "1st Floor",
    roomNo: ["1st", 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    name: "2nd Floor",
    roomNo: ["2nd", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    name: "3rd Floor",
    roomNo: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    name: "4th Floor",
    roomNo: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    name: "5th Floor",
    roomNo: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
];

export default function ChooseFloor(props) {
  const [hostelNameIndex, setHostelNameIndex] = useState(0);
  const [floorSeleceted, setfloorSelecte] = useState(0);
  const [roomBtnClicked, setroomBtnClicked] = useState(null);
  const [floorName, setfloorName] = useState("Ground Floor");

  function selectedFloor(e) {
    setHostelNameIndex(e.target.value);
    setfloorName(hostels[e.target.value].name);
    console.log(hostels[e.target.value].name);
  }

  function roomseleted(e) {
    if (!floorSeleceted) {
      setfloorSelecte(e.target.innerHTML);
      e.target.style.backgroundColor = "blue";
      console.log("You selected", floorSeleceted);
    }
    console.log("you have selected the room", floorSeleceted);
  }

  function roomButton() {
    setroomBtnClicked(true);
  }
  return (
    <>
      {roomBtnClicked ? (
        <Success
          hostelNameIndex={hostelNameIndex}
          floorName={floorName}
          hostelName={props.hostelName}
          floorSeleceted={floorSeleceted}
        />
      ) : (
        <div className="chooseFloorBG">
          <h4 className="choosFloor">Choose a floor</h4>
          <div className="selectedTagBG">
            <select
              className="selectTag"
              onChange={(e) => {
                selectedFloor(e);
              }}
            >
              {hostels.map((element, index) => {
                return <option value={index}>{element.name}</option>;
              })}
            </select>
          </div>
          <div className="roomNumberBox">
            {hostels[hostelNameIndex].roomNo.map((element, index) => {
              return (
                <p className="floorNumber" onClick={roomseleted}>
                  {element}
                </p>
              );
            })}
          </div>
          {floorSeleceted ? (
            <div className="bookbuttnBG">
              <button className="bookbtn" onClick={roomButton}>
                Book Room
              </button>
            </div>
          ) : null}
        </div>
      )}
    </>
  );
}
