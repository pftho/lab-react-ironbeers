import "./App.css";
import Homepage from "./pages/Homepage";
import Listbeerpage from "./pages/Listbeerpage";
import Singlebeerpage from "./pages/Singlebeerpage";
import Newbeerpage from "./pages/Newbeerpage";
import Randompage from "./pages/Randompage";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const apiUrl = "https://ih-beers-api2.herokuapp.com/beers ";

function App() {
  const [beerData, setbeerData] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setbeerData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/beers" element={<Listbeerpage beerData={beerData} />} />
        <Route
          path="/beers/:beerId"
          element={<Singlebeerpage beerData={beerData} />}
        />
        <Route path="/random-beer" element={<Randompage />} />
        <Route path="/new-beer" element={<Newbeerpage />} />
      </Routes>
    </div>
  );
}

export default App;
