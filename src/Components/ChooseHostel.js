import { React, useState } from "react";
import "./../App.css";
import SelectedHostel from "./SelectedHostel";

export default function ChooseHostel() {
  const [typeHostel, settypeHostel] = useState(null);

  return (
    <>
      {typeHostel ? (
        <SelectedHostel typeOfHostle={typeHostel} />
      ) : (
        <>
          <div className="chooseHostel">
            <button
              className="chooseHostelBtn boysHostelBTN"
              onClick={() => {
                console.log("BoysHostel");
                settypeHostel("BoysHostel");
              }}
            >
              Boys Hostel
            </button>
            <button
              className="chooseHostelBtn girlsHostelBTN"
              onClick={() => {
                console.log("GirlsHostle");
                settypeHostel("GirslHostel");
              }}
            >
              GirslHostel
            </button>
          </div>
        </>
      )}
    </>
  );
}
