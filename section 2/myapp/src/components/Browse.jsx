import React, { useState } from "react";
import laptopList from "./dummydata";

function Browse() {
  const [laptopdata, setlaptopdata] = useState(laptopList);

  const displayData = () => {
    return laptopdata.map((laptop) => (
      <div className="col-md-3">
        <div className="card">
          <img src={laptop.image} alt="" className="card-img-top" />
          <div className="card-body">
            <h4>{laptop.brand}</h4>
            <h3>{laptop.model}</h3>
            <h2>{laptop.price}</h2>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div className="row">{displayData()}</div>
    </div>
  );
}

export default Browse;
