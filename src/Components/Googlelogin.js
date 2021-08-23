import React, { useEffect } from "react";
import "./../App.css";
import socialmediaAuth from "../Service/auth";
import { GoogleProvider, facebookProvider } from "../Service/authMethod";

function GoogleLogin(props) {
  const handleOnClickforgoogle = async (provider) => {
    const res = await socialmediaAuth(provider);
    console.log(res);

    if (res.displayName) {
      props.setLogined(res.displayName);
      localStorage.setItem("loginID", res.displayName);
      console.log(res.displayName);
    } else {
      alert("error: check your connection");
    }
  };

  const handleOnClickforFacebook = async (provider) => {
    const res = await socialmediaAuth(provider);
    console.log(res);

    if (res.email) {
      props.setLogined(res.email);

      localStorage.setItem("loginID", res.email);
      console.log(res.email);
    } else {
      alert("error: check your connection");
    }
  };

  return (
    <>
      <div className="loginBtnBGGoogle">
        <h4>Hostel Allocation</h4>
        <h6>Please Sign-in</h6>
        <div className="loginchildBTN">
          <div>
            <button
              className="loginBTN googlebtn"
              onClick={() => {
                handleOnClickforgoogle(GoogleProvider);
              }}
            >
              Google Login
            </button>
          </div>
          <div>
            <button
              className="loginBTN facebookbtn"
              onClick={() => {
                handleOnClickforFacebook(facebookProvider);
              }}
            >
              Facebook Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default GoogleLogin;
