import React from "react";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";

function Randompage() {
  const apiUrl = `https://ih-beers-api2.herokuapp.com/beers/random `;
  console.log(apiUrl);
  const [randomBeer, setRandomBeer] = useState({});

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response);
        setRandomBeer(response.data);
        console.log(randomBeer);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      <div className=" mt-5 d-flex flex-column gap-5 ">
        <img
          className="align-self-center"
          src={randomBeer.image_url}
          alt="Card image cap"
          style={{ width: 50 }}
        />

        <div className="d-flex justify-content-around">
          <div>
            <h5>{randomBeer.name}</h5>
            <p>{randomBeer.tagline}</p>
          </div>
          <div>
            <p> {randomBeer.attenuation_level}</p>
            <p> {randomBeer.first_brewed}</p>{" "}
          </div>
        </div>
        <div>
          <p>{randomBeer.description}</p>
          <p> {randomBeer.contributed_by}</p>
        </div>
      </div>
    </div>
  );
}
export default Randompage;
