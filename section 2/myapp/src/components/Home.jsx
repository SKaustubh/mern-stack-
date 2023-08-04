import React from "react";
import doge from "../evil-doge.jpg";
const Home = () => {
  let num1 = 40;
  let num2 = 40;

  const add = (a, b) => a + b;
  // {} bracket is used to write javascript code in jsx
  return (
    <div className="home-bg">
      <h1 style={{ color: "red", backgroundColor: "yellowgreen" }}>
        welcome to home page {num1 + num2}
      </h1>
      <img src="/logo192.png" alt="" />
      <h1>lappu sa priyank hain {add(20, 49)}</h1>
      <h2>bolna atta nhin</h2>
      <h3>deth footiya hain</h3>
      <p className="myClass">className is used instead of class in jsx</p>
      <input type="text" />
      <img src={doge} alt="" />
      <br />
      <button type="submit"></button>
    </div>
  );
};

export default Home;
