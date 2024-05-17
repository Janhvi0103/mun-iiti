import NavBar from "./NavBar";
import React from "react";
import ReactDOM from "react-dom/client";
import Committees from "./Committees";

function HomePage() {
  return (
    <>
      <NavBar />
      <Committees />
      {/* <div className="App-header">
        <h1>Welcome to MUN-IITI Homepage</h1>
      </div> */}
    </>
  );
}

export default HomePage;
