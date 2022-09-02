import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Listbeerpage({ beerData }) {
  return (
    <div>
      {" "}
      <Header />
      <div className="d-flex mt-5 flex-wrap gap-2 justify-content-center">
        {beerData.map((beer) => {
          return (
            <div
              key={beer._id}
              className="card p-3 d-flex gap-1 flex-column align-item-center justify-content-center"
              style={{ width: "30%" }}
            >
              <img
                className="card-img-top align-self-center"
                src={beer.image_url}
                alt="Card image cap"
                style={{ width: 50 }}
              />
              <div className="card-body">
                <h5 className="card-title">{beer.name}</h5>
                <p className="card-text">{beer.tagline}</p>
                <p className="card-text"> Created by: {beer.contributed_by}</p>

                <Link to={`/beers/${beer._id}`} className="btn btn-primary">
                  See details
                </Link>
              </div>
            </div>
          );
        })}
      </div>{" "}
    </div>
  );
}

export default Listbeerpage;
