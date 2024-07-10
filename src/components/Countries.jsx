import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Countres = () => {
  const [rangevalue, setRangeValue] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries">
      <div className='range-content'>
        <div className="content">
          <input type="range" defaultValue={rangevalue} onChange={(e) => setRangeValue(e.target.value)} name="" id="" max='250' min='0' />
        </div>
      </div>
      <h1>COUNTRIES</h1>

      <ul>

        {data
          .slice(0, rangevalue)
          .map((country, index) => (
            <Card key={index} country={country} />
          ))}
      </ul>
    </div>
  );
};

export default Countres;
