import React, { useState } from "react";

function StateManagement() {
  const [likes, setLikes] = useState(0);
  const [img, setimg] = useState(0);

  return (
    <div>
      <div className="container ">
        <h1>StateManagement</h1>
        <hr />
        <div className="d-flex ">
          <h1>Likes : {likes}</h1>
          <button
            className="btn btn-danger ms-5 me-5"
            onClick={() => {
              setLikes(likes + 1);
            }}
          >
            Add Likes
          </button>

          <button
            className="btn btn-primary"
            onClick={() => {
              setLikes(0);
            }}
          >
            reset
          </button>
        </div>
        <input
          type="text"
          className="form-control"
          onChange={(e) => {
            setimg(e.target.value);
          }}
        />
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default StateManagement;
