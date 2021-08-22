import { React } from "react";
import "./../App.css";

export default function Navbar(props) {
  function removeLocalStorage() {
    localStorage.removeItem("loginID");
    props.setLogined(null);
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mynav">
        <a className="navbar-brand" href="#">
          <h5>Newton School</h5>
        </a>

        <p>
          Welcome <span className="username">{props.userName}</span>
        </p>
        <p className="logoutBTN" onClick={removeLocalStorage}>
          LogOut
        </p>
      </nav>
    </div>
  );
}
