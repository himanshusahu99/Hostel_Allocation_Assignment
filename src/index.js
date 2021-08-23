import React from "react";
import ReactDOM from "react-dom";
// import ".  /index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyA7IXFk6jDKPDt3U_HBQlry8AwBY0JG_qE",
//   authDomain: "hostel-allocation-assign-93429.firebaseapp.com",
//   projectId: "hostel-allocation-assign-93429",
//   storageBucket: "hostel-allocation-assign-93429.appspot.com",
//   messagingSenderId: "342174418206",
//   appId: "1:342174418206:web:78a222d3603e15c87e350f",
// };

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
