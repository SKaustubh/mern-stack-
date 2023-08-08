import React from "react";

function EventHandling() {
  return (
    <div>
      <div className="container">
        <h1 className="text-center">Event Handling</h1>
        <hr />

        <h2>Click Event Handling</h2>
        <button
          className="btn btn-primary"
          onClick={() => {
            alert("Button Clicked !");
          }}
        >
          Click Event
        </button>
        <input
          type="text"
          className="form-control"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default EventHandling;
