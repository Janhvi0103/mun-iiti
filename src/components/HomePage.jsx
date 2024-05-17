import NavBar from "./NavBar";
import React from "react";
import ReactDOM from "react-dom/client";
import CommitteesHead from "./Committees_Header";

function HomePage() {
  return (
    <>
      <NavBar />
      <CommitteesHead />
      {/* <div className="App-header">
        <h1>Welcome to MUN-IITI Homepage</h1>
      </div> */}
    </>
  );
}

export default HomePage;
