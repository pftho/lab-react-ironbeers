import React from "react";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Singlebeerpage({ beerData }) {
  const { beerId } = useParams();
  console.log(beerId);
  const apiUrl = `https://ih-beers-api2.herokuapp.com/beers/${beerId} `;
  console.log(apiUrl);
  const [foundBeer, setFoundBeer] = useState({});

  console.log(foundBeer);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data);
        setFoundBeer(response.data);
      })
      .catch((err) => console.log(err));
  }, [beerId]);

  return (
    <div>
      <Header />
      <div className=" mt-5 d-flex flex-column gap-5 ">
        <img
          className="align-self-center"
          src={foundBeer.image_url}
          alt="Card image cap"
          style={{ width: 50 }}
        />

        <div className="d-flex justify-content-around">
          <div>
            <h5>{foundBeer.name}</h5>
            <p>{foundBeer.tagline}</p>
          </div>
          <div>
            <p> {foundBeer.attenuation_level}</p>
            <p> {foundBeer.first_brewed}</p>{" "}
          </div>
        </div>
        <div>
          <p>{foundBeer.description}</p>
          <p> {foundBeer.contributed_by}</p>
        </div>
      </div>
    </div>
  );
}

export default Singlebeerpage;
