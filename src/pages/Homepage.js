import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <img src={require("../assets/beers.png")} alt="bar" />
      <Link to={"/beers"}>All Beers</Link>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam
        libero, mollis id cursus vel, pellentesque ac lacus. Pellentesque tempus
        erat in accumsan convallis. Sed ultricies venenatis auctor. Nam justo
        nibh, aliquet sit amet congue ut, mollis et ligula. Vestibulum ultricies
        laoreet lectus in maximus.{" "}
      </p>
      <img src={require("../assets/random-beer.png")} alt="bar" />
      <Link to="/random-beer">Random Beers</Link>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam
        libero, mollis id cursus vel, pellentesque ac lacus. Pellentesque tempus
        erat in accumsan convallis. Sed ultricies venenatis auctor. Nam justo
        nibh, aliquet sit amet congue ut, mollis et ligula. Vestibulum ultricies
        laoreet lectus in maximus.{" "}
      </p>
      <img src={require("../assets/new-beer.png")} alt="bar" />
      <Link to="/new-beer">New Beers</Link>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam
        libero, mollis id cursus vel, pellentesque ac lacus. Pellentesque tempus
        erat in accumsan convallis. Sed ultricies venenatis auctor. Nam justo
        nibh, aliquet sit amet congue ut, mollis et ligula. Vestibulum ultricies
        laoreet lectus in maximus.{" "}
      </p>
    </div>
  );
}

export default Homepage;
