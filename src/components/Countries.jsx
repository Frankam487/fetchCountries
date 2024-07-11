import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Countres = () => {
  const [rangevalue, setRangeValue] = useState(36);
  const [data, setData] = useState([]);
  const [selectidedRadio, setSelectidedRadio] = useState("")
  const radio = ["Africa", "Asia", "America", "Europe", "Oceania"];
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries">
      <div className='range-content'>
        <div className="content">
          <input type="range" defaultValue={rangevalue} onChange={(e) => setRangeValue(e.target.value)} name="" id="" max='250' min='10' />
          {
            radio.map((continent) => (
              <li className="continents">
                <input type="radio" onChange={(e) => setSelectidedRadio(e.target.id)} name="continent" defaultValue="continent" id={continent} />
                <label htmlFor={continent}>{continent}</label>
              </li>
            ))
          }
        </div>
      </div>
      <h1>COUNTRIES</h1>

      <ul>
        {data
        .sort((a, b) => b.population - a.population)
        .filter((country) => country.continents[0].includes(selectidedRadio))
          .slice(0, rangevalue)
          .map((country, index) => (
            <Card key={index} country={country} />
          ))}
      </ul>
    </div>
  );
};

export default Countres;
