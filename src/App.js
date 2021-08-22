import "./App.css";
import { React, useState, useEffect } from "react";

import GoogleLogin from "./Components/Googlelogin";
import Navbar from "./Components/Navbar";
import ChooseHostel from "./Components/ChooseHostel";
import Success from "./Components/Success";
import InintialSuccess from "./Components/InintialSuccess";

function App() {
  const [logined, setLogined] = useState(true);
  const [hostelBooked, setHostelBooked] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("loginID");
    const ifSuccess = localStorage.getItem("successID");
    setLogined(user);

    setHostelBooked(ifSuccess);
  }, []);

  return (
    <>
      {logined ? (
        <>
          <Navbar userName={logined} setLogined={setLogined} />
          {hostelBooked ? <InintialSuccess /> : <ChooseHostel />}
        </>
      ) : (
        <GoogleLogin setLogined={setLogined} />
      )}
    </>
  );
}

export default App;
