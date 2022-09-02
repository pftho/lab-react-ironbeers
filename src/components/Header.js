import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav
      className="navbar navbar-light  d-flex justify-content-center"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <Link className="navbar-brand" to={"/"}>
        <img
          src={require("../assets/noun-home-5138996.png")}
          width={30}
          height={30}
          alt="home"
        />
      </Link>
    </nav>
  );
}

export default Header;
