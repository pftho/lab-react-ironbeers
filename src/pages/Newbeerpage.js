import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Newbeerpage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewerTips, setBrewerTips] = useState("");
  const [attenuationLevel, setattritionLevel] = useState(0);
  const [contributor, setContributor] = useState("");
  const apiUrl = `https://ih-beers-api2.herokuapp.com/beers/new `;
  const navigate = useNavigate();

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleTagline = (e) => {
    setTagline(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleFirstBrewed = (e) => {
    setFirstBrewed(e.target.value);
  };
  const handleBrewerTips = (e) => {
    setBrewerTips(e.target.value);
  };
  const handleattenuationLevel = (e) => {
    setattritionLevel(e.target.value);
  };
  const handleContributor = (e) => {
    setContributor(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      name,
      tagline,
      description,
      first_brewed: firstBrewed,
      brewers_tips: brewerTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributor,
    };

    await axios
      .post(apiUrl, body)
      .then((response) => {
        console.log(response.status);
      })
      .catch((err) => console.log(err));

    navigate("/beers");

    setName("");
    setTagline("");
    setDescription("");
    setFirstBrewed("");
    setBrewerTips("");
    setattritionLevel(0);
    setContributor("");
  };

  return (
    <div>
      {" "}
      <Header />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="beer name"
            value={name}
            onChange={handleName}
          />{" "}
        </div>

        <div className="mb-3">
          <label className="form-label">Targline</label>
          <input
            type="text"
            className="form-control"
            id="tagline"
            value={tagline}
            onChange={handleTagline}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={handleDescription}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">First Brewed</label>
          <input
            type="text"
            className="form-control"
            id="firstBrewed"
            value={firstBrewed}
            onChange={handleFirstBrewed}
          />
        </div>

        <div className="mb-3">
          <label className="form-label"> Brewer Tips</label>
          <input
            type="text"
            className="form-control"
            id="BrewerTips"
            value={brewerTips}
            onChange={handleBrewerTips}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Attenuation Level</label>
          <input
            type="number"
            className="form-control"
            id="attenuation_level"
            value={attenuationLevel}
            onChange={handleattenuationLevel}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contributed By</label>
          <input
            type="text"
            className="form-control"
            id="contributed_by"
            value={contributor}
            onChange={handleContributor}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Newbeerpage;
